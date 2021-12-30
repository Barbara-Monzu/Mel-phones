
import React, { useState, useEffect } from 'react';
import "./searchBar.css"

const SearchBar = (props) => {

	const [searchText, setSearchText] = useState("")
	const [price, setPrice] = useState("")

	const handleSelect = (e) => {
		setPrice(e.currentTarget.value)
	}

	const handleSearch = (e) => {
		setSearchText(e.currentTarget.value.toLowerCase())
	}

	useEffect(() => {
		props.searchProduct(searchText)

	}, [searchText])

	useEffect(() => {
		props.searchByPrice(price)

	}, [price])



	return (
		<div>
			<div className="search-container">
				<input className="search-input" type="search" placeholder="What are you looking for?" name="search" onChange={handleSearch} />

				<label for="price">Filter by price: </label>
				<select class="search-input2" id="price" name="price" onChange={handleSelect}>
					<option value=''>Price</option>
					<option value="Cheap">De más barato a más caro</option>
					<option value="Expensive">De más caro a más barato</option>

				</select>
			</div>
		</div>
	);
}

export default SearchBar;