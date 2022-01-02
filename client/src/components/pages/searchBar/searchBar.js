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
			<div className="container">
				<input className="search-input searchBar-img" type="search" placeholder="Search by name..." name="search" onChange={handleSearch} />

				<label>
					<select className="search-input2" id="price" name="price" onChange={handleSelect}>
						<option value=''>By price</option>
						<option value="Cheap">From cheaper to more expensive</option>
						<option value="Expensive">From most expensive to cheapest</option>

					</select>
				</label>
			</div>
		</div>

	);
}

export default SearchBar;