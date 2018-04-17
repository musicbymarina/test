import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddForm from './addForm'
import BookDetail from './BookDetail'
import Modal from './Modal'

/**
* @description Represents the Book
* @constructor 
* @param {string} type - The name "book" to display with styles
* @param {object} book - The book
* @param {function} changeShelf - Change the shelf of the book
*/
class Book extends Component{
	static defaultProps = {
		type: "book"
	}
	
	static propTypes = {
		book: PropTypes.object.isRequired,
		changeShelf: PropTypes.func.isRequired,
		type: PropTypes.string.isRequired,
		bookToAdd: PropTypes.object
	}
	
	state = {isOpen: false}
	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
	
	
	render() {
	   	const {type, book, changeShelf} = this.props;

	   	return (

			<div className={`${type}`}>
                <div className={`${type}-top`}>
                    <div className={`${type}-cover`} style={{width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                    	<AddForm book={book} changeShelf={changeShelf} />
                    	<div className='more'>	
						<button onClick={this.toggleModal}></button>
						</div>
                    </div>
                </div>
                <div className={`${type}-title`}>{book.title}</div>
                <div className={`${type}-authors`}>{book.authors}</div>
        			<Modal show={this.state.isOpen} onClose={this.toggleModal}>
          				<BookDetail book={book} />
        			</Modal>
            </div>	
	   	)
	}
}

export default Book