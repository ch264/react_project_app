import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {
	state = {
		email: '',
		password: ''
	}

	handleChange = (e) => {
		this.setState ({
			// gets id of field that is being updated
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.signin(this.state)
	}

	render() {
		const { authError } = this.props;
		return (
			<div className='container'>
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Sign In</h5>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange}/>
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange}/>
					</div>
					<div className="input-field">
						<button className="btn red lighten-3 z-depth-0">Login</button>
						<div className="red-text center">
							{ authError ? <p>{authError}</p> : null }
						</div>
					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		// state.auth comes from the root reducer
		authError: state.auth.authError
	}
}
 
// map dispatch to props so that we have access to signin mathod from action creator
const mapDispatchToProps = (dispatch) => {
	return {
		signin: (credentials) => dispatch(signIn(credentials))
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
