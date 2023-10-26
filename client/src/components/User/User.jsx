import "./User.scss";
import Phone from "../../assets/Phone.svg";
import Mail from "../../assets/Mail.svg";
import { ReactPropTypes, useState } from "react";
import Modal from "../Modal/Modal";

function User({ user }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className="user-container">
			<div
				className="user"
				onClick={() => {
					setShowModal(true);
				}}
			>
				<h2 className="user_header">{user.name}</h2>
				<div className="user_body">
					<div className="user_body_field">
						<img className="user_body_field__icon" src={Phone} alt="" />
						<p className="user_body_field__data">{user.phone}</p>
					</div>
					<div className="user_body_field">
						<img className="user_body_field__icon" src={Mail} alt="" />
						<p className="user_body_field__data">{user.email}</p>
					</div>
				</div>
			</div>
			{showModal && <Modal setShowModal={setShowModal} user={user} />}
		</div>
	);
}

User.propTypes = ReactPropTypes;

export default User;
