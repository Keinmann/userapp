USE testdb;

DROP TABLE IF EXISTS merged;

CREATE TABLE merged (
id bigint not null primary key, 
name varchar(max) null, 
age bigint not null,
sub_name varchar(max) null, 
sub_id bigint not null, 
parent_id bigint null
);

INSERT INTO merged(id, name, age, sub_name, sub_id, parent_id) 
SELECT c.id, c.name, c.age, s.name, s.id, s.parent_id FROM collaborators c INNER JOIN subdivisions s ON c.subdivision_id = s.id;

WITH RQUERY( id, name, age, sub_name, sub_id, sub_level, parent_id)
AS(
	SELECT c.id, c.name, c.age, c.sub_name, c.sub_id, 0 as sub_level, c.parent_id
	FROM merged c WHERE c.id = 710253 GROUP BY c.sub_id, c.id, c.name, c.age, c.sub_name, c.parent_id
	UNION ALL 
	SELECT c.id, c.name, c.age, c.sub_name, c.sub_id, rq.sub_level+1, c.parent_id
	FROM merged c 
	JOIN RQUERY rq ON c.parent_id = rq.sub_id
	WHERE LEN(c.name) > 11 AND c.age < 40 AND c.sub_id != 100055 AND c.sub_id != 100059)
SELECT rq.id, name, age, sub_name, sub_id, sub_level, (SELECT COUNT(qr.id) FROM RQUERY qr WHERE qr.sub_id = rq.sub_id) as colls_count FROM RQUERY rq ORDER BY sub_level ASC;

DROP TABLE merged;