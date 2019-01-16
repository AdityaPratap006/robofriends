import React from 'react';



const SearchBox = ({SearchField,SearchChange}) => {
	console.log('SearchBox');
	return (

		<div className = ' ma3 '>
			<input 
				type = 'search' 
				placeholder='search Robots'
				onChange={SearchChange} 
				className = ' pa3  ba b--green bg-lightest-blue'
			/>
		</div>
	);
}

export default SearchBox;