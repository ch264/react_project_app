import React from 'react'
import { Link } from 'react-router-dom'
import SignedInNav from './SignedInNav'
import SignedOutNav from './SignedOutNav'
import { connect } from 'react-redux'
 
const Navbar = (props) => {
	const { auth, profile } = props;
	// save component in links depending on auth status. pass profile down to links
	const links = auth.uid ? <SignedInNav profile={profile}/> : <SignedOutNav />
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
	console.log(state)
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

export default connect(mapStateToProps)(Navbar)