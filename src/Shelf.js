import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'


/**
* @description Represents the shelf of the book
* @constructor 
* @param {string} type - The name "bookshelf" to display with styles
* @param {string} type - The title of the shelf
* @param {array} books - The books
* @param {function} changeShelf - Change the shelf of the book
*/
class Shelf extends Component {
	static propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
	}
  
  static defaultProps = {
    type: "bookshelf"
  }

	render() {
    const {books, type, title, changeShelf} = this.props
    
		return (
		  <div className="{type}">
        <h2 className={`${type}-title`}>{title}</h2>
          <div className={`${type}-books`}>
            <ol className="books-grid">
            {
              books.map(book => 
                <li key={book.id}>
                  <Book book={book} changeShelf={changeShelf}/> 
                

              
                </li>
              )
            }  
            </ol>
          </div>

      </div>
		)
	}
}

export default Shelf