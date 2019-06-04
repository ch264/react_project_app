import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

// functional components take in props
const SignedInNav = (props) => {
	return (
		<ul className="right">
			<li><NavLink to='/create'>New Project</NavLink></li>
			<li><a onClick={props.signOut}>Log Out</a></li>
			<li><NavLink to='/' className='btn btn-floating red lighten-2'>CH</NavLink></li>
		</ul>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut())
	}
}

export default connect(null, mapDispatchToProps)(SignedInNav)