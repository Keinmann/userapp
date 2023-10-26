import "./App.scss";
import Search from "../Search/Search";
import User from "../User/User";
import { useEffect, useState } from "react";

function App() {
	const [userData, setUserData] = useState(Array);

	async function getUserData(searchString = "") {
		try {
			const response = await fetch(
				`http://127.0.0.1:3000?term=${searchString}`
			);
			const json = await response.json();
			setUserData(json);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		getUserData();
	}, []);

	return (
		<div className="app">
			<Search getUserData={getUserData} />
			<div className="app_list">
				{userData?.map((user, key) => (
					<User key={key} user={user} />
				))}
			</div>
		</div>
	);
}

export default App;
