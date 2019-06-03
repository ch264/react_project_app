import React from 'react'
import { NavLink } from 'react-router-dom'
 
const SignedOutNav = () => {
	return (
		<ul className="right">
			<li><NavLink to='/signup'>Sign Up</NavLink></li>
			<li><NavLink to='/signin'>Login</NavLink></li>
		</ul>
	)
}

export default SignedOutNav