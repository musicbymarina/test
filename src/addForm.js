import React, { Component } from 'react'
import PropTypes from 'prop-types'


/**
* @description Represents the form of the book to change its shelf
* @constructor 
* @param {object} book - The book
* @param {function} changeShelf - Change the shelf of the book
*/
class AddForm extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf:PropTypes.func.isRequired
    }

    state = {
        currentShelf: this.props.book.shelf,
        update: false
    };

    changeShelf = (event) => {
        this.props.changeShelf(this.props.book, event.target.value)
        
        this.setState({
            currentShelf: event.target.value,
            update: true
        });
    };

    componentWillReceiveProps() {
        this.setState({
            update: false
        });
    }
    
    render() {
    const {currentShelf} = this.state
    
    return (
        <div className="book-shelf-changer">
            <select 
            value={currentShelf} 
            onChange={this.changeShelf} >
            
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                
            </select>
        </div>
	)
	}
}

export default AddForm