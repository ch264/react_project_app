import React from 'react'
import { Link } from 'react-router-dom'
import SignedInNav from './SignedInNav'
import SignedOutNav from './SignedOutNav'
import { connect } from 'react-redux'
 
const Navbar = (props) => {
	const { auth } = props;
	// save component in links depending on auth status
	const links = auth.uid ? <SignedInNav /> : <SignedOutNav />
	return (
		<nav className="nav-wrapper grey darken-1">
			<div className="container">
				<Link to='/' className='brand-logo left'>Project Planner</Link>
				{/* depending on sign in status will show either link */}
				{ links }
			</div>
		</nav>
	)
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps)(Navbar)