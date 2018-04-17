import React, { Component } from 'react'
import { Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import CreateBook from './CreateBook'
import BtnSearch from './BtnSearch'
import BookDetail from './BookDetail'
import './App.css'


/**
* @description Represents the main page of the app
* @constructor 
* @param {array} shelves - The shelves of the book
* @param {function} changeShelf - Change the shelf of the book
* @param {function} updateQuery - Find the books following the query of the user
*/
class App extends Component {
  
  static propTypes = {
    shelves: PropTypes.array.isRequired
  };
  
  static defaultProps = {
    shelves: [{type: "currentlyReading", title: "Currently Reading"},
    {type:"wantToRead", title: "Want to Read"},
    {type: "read", title: "Read"}]
  };
  
  state = {
    books: [],
    booksToAdd: [],
    book: {}
  };
  
 /*Ask to get data after the app loads*/ 
  componentDidMount = () => {
  this.fetchAllBooks();
  }

  /*Get all the books from network and get them in my books array*/
  fetchAllBooks = () => {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({books});
    })
  }

  /*Update the books from API when the user change the book is removed from the DOM*/
  componentWillUnmount = () => {
    this.fetchAllBooks();
  }

  /*Filter the books by shelf*/
  getShelfBook = (userShelf) => this.state.books.filter((b) => b.shelf === userShelf)

  /*Change the shelf of the chosen book and add it to my books array*/
  changeShelf = (book, userShelf) => {
    BooksAPI.update(book, userShelf).then(() => {
      book.shelf = userShelf;
    
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  };
  
  /*Find the books following the query of the user*/
  updateQuery = (query) => {
    if(query) {
      BooksAPI.search(query).then((books) => {
        if(books.length) {
          books.map((book, index) => {
            let bookToAdd = this.state.books.find((b) => b.id === book.id);
            book.shelf = bookToAdd ? bookToAdd.shelf : 'none';
            books[index] = book;
          });
        
          this.setState({
            booksToAdd: books
          });
        }
    });
    } else {
      this.setState({
        booksToAdd: []
      });
    }
  };
  
  render() {
    const {shelves} = this.props

    return (
      
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <ol className="shelves-grid">
                {  
                  shelves.map((shelf) => 
                    <li key={shelf.type}>
                      <Shelf title={shelf.title} books={this.getShelfBook(shelf.type)} changeShelf={this.changeShelf} />
                    </li>
                  ) 
                }
                </ol>
              </div>
            </div>
            <BtnSearch />
          </div> 
        )}/>
      
        <Route path='/search' render={({}) => (
          <CreateBook books={this.state.booksToAdd} updateQuery={this.updateQuery} changeShelf={this.changeShelf}/>
        )}/>
        

        
      </div>
    );
  }
}

export default App
