import "./User.scss";
import Phone from "../../assets/Phone.svg";
import Mail from "../../assets/Mail.svg";

function User() {
	return (
		<div className="user">
			<h2 className="user_header">Евгения Савченко</h2>
			<div className="user_body">
				<div className="user_body_field">
					<img className="user_body_field__icon" src={Phone} alt="" />
					<p className="user_body_field__data">+7 (918) 078-17-05</p>
				</div>
				<div className="user_body_field">
					<img className="user_body_field__icon" src={Mail} alt="" />
					<p className="user_body_field__data">yysavchenk@mail.ru</p>
				</div>
			</div>
		</div>
	);
}

export default User;
