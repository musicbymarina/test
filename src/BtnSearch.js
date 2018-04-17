import { Link } from 'react-router-dom'
import React from 'react'

/**
* @description Add a button to search a book
*
*/
function BtnSearch() {
	return (
		<div className="open-search">
        <Link to='/search'> Add a book </Link>
        </div>
		)
}

export default BtnSearch