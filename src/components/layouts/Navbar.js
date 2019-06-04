import React from 'react'
import { Link } from 'react-router-dom'
import SignedInNav from './SignedInNav'
import SignedOutNav from './SignedOutNav'
import { connect } from 'react-redux'
 
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

const mapStateToProps = (state) => {
	console.log(state)
	return {

	}
}

export default connect(mapStateToProps)(Navbar)