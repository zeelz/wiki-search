import React, { Component, Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';


const SearchBox = () => {

	const [term, setTerm] = useState('');
	const [searchData, setSearchData] = useState([]);

	const URL = 'https://en.wikipedia.org/w/api.php';
	let timerId = null;
	
	// do this everytime term in the array updates (componentDidUpdate)

	useEffect(() => {
		if (term) {
			timerId = setTimeout(() => {
				axios.get(URL, {
					params: {
						action: 'query',
						list: 'search',
						origin: '*',
						format: 'json',
						srsearch: term

					}
				})
				.then(({data}) => {
					setSearchData(data.query.search);
				})
				
			}, 1000);
		}
		return () => {			
			clearTimeout(timerId);
		};

	}, [term]);


	return (
		<Fragment>
			<h1>Wiki Search</h1>

			<form className="wiki-form">
				<input 
					type="text"
					value={term}
					placeholder="enter your search term"
					onChange={ (e) => setTerm(e.target.value) } 
				/>
			</form>

			<List searchData={searchData} />
		</Fragment>
	);
	
}

export default SearchBox;