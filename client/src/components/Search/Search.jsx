import "./Search.scss";
import Magnifier from "../../assets/Magnifier.svg";

function Search() {
	return (
		<div className="search">
			<input className="search_field" type="text" />
			<button className="search_button">
				{" "}
				<img src={Magnifier} alt="" />
			</button>
		</div>
	);
}

export default Search;
