import React, { Component } from 'react';
import CounterButton from './CounterButton.js';
import img2 from './logo.png';

class Header extends Component{
	//shouldComponentUpdate(nextProps, nextState ){
	//	return false;
	//}

	render(){
		console.log('Header');
		return (<div>
					<img className='logo' alt='My Logo' src={img2}/>
					<CounterButton color={'red'} className='center'/>
				</div>
			)
	}
}

export default Header;