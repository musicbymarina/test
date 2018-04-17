import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @description Represents the modal
* @constructor 
* @param {boolean} show - check if the user asks to show the modal
* @param {function} onClose - Close the modal
*/
class Modal extends Component {
	
		static propTypes = {
		children: PropTypes.node,
		show: PropTypes.bool,
		onClose: PropTypes.func.isRequired
	}
	
	render() {
		if(!this.props.show) {
			return null;
		}
		
		const backdropStyle = {
			position: 'fixed',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			backgroundColor: 'green',
			padding: 50,
			width: '100%',
			zIndex: 1
		};
		
		const modalStyle = {
			backgroundColor: 'white',
			borderRadius: 5,
			width: '90%',
			marginBottom : '2rem',
			padding: 30,
			zIndex: 1000,
			color: 'green',
			display: 'block',
			position: 'absolute',
			opacity: 1,
			height: 'auto',
			minHeight: '400px',
			overflowY: 'auto'
		};
		
		return (
			<div className="backdrop" style={backdropStyle}>
				<div className="modal" style={modalStyle}>
					<div>
						<button onMouseOver={this.props.onClose} className='close-btn'></button>
						{this.props.children}
					</div>
				</div>
			</div>
			);
		
	}
}

export default Modal;