import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.scss'

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null

	return ReactDOM.createPortal(
		<>
			<div className="modaloverlay" onClick={onClose}></div>
			<div className="modalcontainer">
				<button onClick={onClose}>Close</button>
				<div className="modal">{children}</div>
			</div>
		</>,
		document.body
	)
}

export default Modal
