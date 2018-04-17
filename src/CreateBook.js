import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

/**
* @description Represents the page to search a book
* @constructor 
* @param {string} type - The name "search-books" to display with styles
* @param {array} books - The books
* @param {function} changeShelf - Change the shelf of the book
* @param {function} updateQuery - Find the books following the query with one or more words
*/
class CreateBook extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
  }
  
  static defaultProps = {
    type: "search-books"
  }

  componentWillUnmount() {
    this.props.updateQuery('');
  }
  
  updateQuery = (query) => {
    this.props.updateQuery(query.trim());
  }
  
  
	render() {
    const { books, changeShelf, type } = this.props
    
		return (
		  <div className="{type}">
        <div className={`${type}-bar`}>
          <Link className="close-search" to='/'>Close</Link>
            <div className={`${type}-input-wrapper`}>
              <input type='text' placeholder='Search by title or author' onChange={(event) => this.updateQuery(event.target.value)}/>
            </div>
        </div>
        <div className={`${type}-results`}>
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

export default CreateBook