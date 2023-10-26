import "./Search.scss";
import Magnifier from "../../assets/Magnifier.svg";
import { ReactPropTypes, useState } from "react";

function Search({ getUserData }) {
	const [searchString, setSearchString] = useState(String);
	const handleChange = (value) => {
		setSearchString(value.trim());
		getUserData(searchString);
	};

	return (
		<div className="search">
			<input
				className="search_field"
				type="text"
				onChange={(event) => handleChange(event.target.value)}
			/>
			<img className="search_button" src={Magnifier} alt="" />
		</div>
	);
}

Search.propTypes = ReactPropTypes;

export default Search;
