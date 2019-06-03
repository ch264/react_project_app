import React from 'react'
import { Link } from 'react-router-dom'
import SignedInNav from './SignedInNav'
import SignedOutNav from './SignedOutNav'
 
const Navbar = () => {
	return (
		<nav className="nav-wrapper grey darken-1">
			<div className="container">
				<Link to='/' className='brand-logo left'>Project Planner</Link>
				<SignedInNav />
				<SignedOutNav />
			</div>
		</nav>
	)
}

export default Navbar