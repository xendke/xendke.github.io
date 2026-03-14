import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.scss'

const Modal = ({ isOpen, onClose, children, contentClassName }) => {
	if (!isOpen) return null

	const modalClass = ['modal', contentClassName].filter(Boolean).join(' ')

	return ReactDOM.createPortal(
		<>
			<div className="modaloverlay" onClick={onClose}></div>
			<div className="modalcontainer">
				<div className={modalClass}>{children}</div>
				<div className="modal-chin">
					<button type="button" onClick={onClose}>Close</button>
				</div>
			</div>
		</>,
		document.body
	)
}

export default Modal
