import {Modal} from 'react-bootstrap'
import React from 'react'

function ResumeModal({showResumeModal, closeModal}) {
	return (
		<Modal
			size='lg'
			show={showResumeModal}
			onHide={closeModal}
			aria-labelledby='example-modal-sizes-title-lg'
		>
			<Modal.Header closeButton>
				<Modal.Title id='example-modal-sizes-title-lg'>Resume</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<iframe
					title='Resume'
					src='https://pranjaljain0.github.io/pranjaljain0/Pranjal_Jain_CV.pdf#toolbar=0'
					width='100%'
					height='700px'
					frameBorder='0'
				></iframe>
			</Modal.Body>
		</Modal>
	)
}

export default ResumeModal
