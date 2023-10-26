import "./Modal.scss";
import Cross from "../../assets/Cross.svg";
import { ReactPropTypes } from "react";

function Modal({ setShowModal, user }) {
	return (
		<div className="modal-container">
			<div
				className="overlay"
				onClick={() => {
					setShowModal(false);
				}}
			/>
			<div className="modal">
				<div className="modal_header">
					<h2 className="modal_header_field">{user.name}</h2>
					<button
						className="modal_header_close"
						onClick={() => {
							setShowModal(false);
						}}
					>
						<img src={Cross} alt="" />
					</button>
				</div>
				<div className="modal_body">
					<p className="modal_body__phone_title">Телефон:</p>
					<p className="modal_body__phone_value">{user.phone}</p>
					<p className="modal_body__email_title">Почта:</p>
					<p className="modal_body__email_value">{user.email}</p>
					<p className="modal_body__date_title">Дата приёма:</p>
					<p className="modal_body__date_value">{user.hire_date}</p>
					<p className="modal_body__position_title">Должность:</p>
					<p className="modal_body__position_value">{user.position_name}</p>
					<p className="modal_body__department_title">Подразделение:</p>
					<p className="modal_body__department_value">{user.department}</p>
				</div>
				<div className="modal_footer">
					<p>Дополнительная информация:</p>
					<p>
						Разработчики используют текст в качестве заполнителя макта страницы.
						Разработчики используют текст в качестве заполнителя макта страницы.
					</p>
				</div>
			</div>
		</div>
	);
}

Modal.propTypes = ReactPropTypes;

export default Modal;
