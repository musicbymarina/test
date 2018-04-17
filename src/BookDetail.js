import React, { Component } from 'react'
import PropTypes from 'prop-types'


/**
* @description Represents the details of the book for the modal
* Name of authors and subtitle appear in the title if they're in the API
* @constructor 
* @param {object} book - The book
*/
class BookDetail extends Component{
	
	static propTypes = {
		book: PropTypes.object.isRequired,
	}
	
	render() {
	   	const {book} = this.props;
	console.log(book.authors);
	
	   	return (

			<div >
                <div>
                	<h1>My reads</h1>
                	<h2>{book.title}</h2>		
             			{book.authors !== undefined && <h2>  by {book.authors}</h2>}
             			{book.subtitle !== undefined && <h3> {book.subtitle}</h3>}
                </div>
                <div className='details' style={{width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                </div>
                <div className='description'>
            		<p>{book.description}</p>
            		<a href={book.infoLink} target='_blank' className='google'>Find more about {book.title} on Google Book</a>
            	</div>
            </div>	
	   	)
	}
}

export default BookDetail