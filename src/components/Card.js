import React from 'react';
import './Card.css';

const Card = ({id , name, email}) => {

	

	return (

		<div className='bg-light-green dib br3 pa3  ma2 grow bw2 shadow-5 '>
			<img className='car' alt='robots' src={`https://images.caricos.com/r/rolls-royce/2015_rolls-royce_ghost_series_ii/images/1600x1200/2015_rolls-royce_ghost_series_ii_${id}_1600x1200.jpg`}/>
			<div className='tc '>
				<h3>{name}</h3>
				<p >{email}</p>
			</div>
		</div>

	);
}




export default Card;
