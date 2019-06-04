import React from 'react'
import moment from 'moment'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

const ProjectDetails = (props) => {
	// get project object from props and store in constant
	const { project, auth } = props;
	if (!auth.uid) return <Redirect to='/signin' />

	if (project) {
		return(
			<div className="container section project-details">
				<div className="card z-depth-0">
					<div className="card-content">
						<span className="card-title">{ project.title }</span>
						<p>{ project.content }</p>
					</div>
					<div className="card-action grey lighten-4 grey-text">
						<div>{ project.authorFirstName } { project.authorLastName }</div>
						<div>{ moment(project.createdAt.toDate()).calendar() }</div>
					</div>
				</div>
			</div>
		)
	} else {
		return (
		<div className="container center">
			<p>Projects are loading ....</p>
		</div>
		)
	}
}

// ownProps is props of component before we attach anything else
const mapStateToProps = (state, ownProps) => {
	console.log(state)
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;
	// only return if there are projects in the collection
	const project = projects ? projects[id] : null
	return {
		project: project,
		auth: state.firebase.auth
	}
}

// sync project with state and we have access to this projects collection on the state via the firestore object
export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'projects'}
	])
)(ProjectDetails)
