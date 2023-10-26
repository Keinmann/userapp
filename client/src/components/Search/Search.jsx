import "./Search.scss";
import Magnifier from "../../assets/Magnifier.svg";
import { ReactPropTypes, useState } from "react";

function Search({ getUserData }) {
	let isUpdated = false;
	const [searchString, setSearchString] = useState(String);
	const handleChange = (value) => {
		setSearchString(value.trim());
		if (searchString.length > 2) {
			isUpdated = false;
			getUserData(searchString);
		} else if (isUpdated == false) {
			isUpdated = true;
			getUserData();
		}
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
