import React from 'react';
//import robots from './Robots';

import Card from './Card.js';

const CardList = ({robots}) => {

	console.log('CardList');
	/*if(true){
		throw new Error('Nooooo!');
	}*/

	const CardArray = robots.map((user,i) => {
		return  (<Card 

		key={i}

		id={robots[i].id} 

		name={robots[i].name} 

		email={robots[i].email}

		/>);
	});

	return (

		<div >
			
			{ CardArray }
				
		</div>

		);

		
	
}

export default CardList;