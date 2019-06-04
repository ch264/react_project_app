import React from 'react'

import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

const ProjectDetails = (props) => {
	// const id = props.match.params.id;
	// console.log(props)
	// get project object from props and store in constant
	const { project } = props;
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
						<div>Date</div>
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
		project: project
	}
}

// sync project with state and we have access to this projects collection on the state via the firestore object
export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'projects'}
	])
)(ProjectDetails)
