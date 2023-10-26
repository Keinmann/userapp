import "./App.scss";
import Search from "../Search/Search";
import User from "../User/User";

function App() {
	return (
		<div className="app">
			<Search />
			<div className="app_list">
				<User />
				<User />
				<User />
				<User />
				<User />
				<User />
			</div>
		</div>
	);
}

export default App;
