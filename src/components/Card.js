import React from 'react';
import './Card.css';

const Card = ({id , name, email}) => {

	

	return (

		<div className='bg-light-green dib br3 pa3  ma2 grow bw2 shadow-5 '>
			<img className='car' alt='robots' src={`https://robohash.org/${id}?size=300x400`}/>
			<div className='tc '>
				<h3>{name}</h3>
				<p >{email}</p>
			</div>
		</div>

	);
}




export default Card;
