import React, { Component } from 'react'
import { createProject } from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
	state = {
		title: '',
		content: ''
	}

	handleChange = (e) => {
		this.setState ({
			// gets id of field that is being updated
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		// console.log(this.state)
		this.props.createProject(this.state)
	}

	render() {
		const { auth } = this.props;
		if (!auth.uid) return <Redirect to='/signin' />

		return (
			<div className='container'>
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Create a new project</h5>

					<div className="input-field">
						<label htmlFor="title">Title</label>
						<input type="text" id="title" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<label htmlFor="content">Project Content</label>
						<textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
					</div>

					<div className="input-field">
						<button className="btn red lighten-3 z-depth-0">Create</button>
					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	// when call props.createproject, it will run the function, take in project and dispatch an action creater to make an async call and carry on with the dispatch action
	return {
		createProject: (project) => dispatch(createProject(project))
	}
}

// connects first parameter is mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
