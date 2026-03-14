import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.scss'

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null

	return ReactDOM.createPortal(
		<>
			<div className="modaloverlay" onClick={onClose}></div>
			<div className="modalcontainer">
				<div className="modal">{children}</div>
				<div className="modal-chin">
					<button type="button" onClick={onClose}>Close</button>
				</div>
			</div>
		</>,
		document.body
	)
}

export default Modal
