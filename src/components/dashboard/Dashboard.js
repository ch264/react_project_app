import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
// connects dashboard component with redux store
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
	render(){
		// grabs projects and auth object of the props and pass them down to the ProjectList component
		const { projects, auth, notifications } = this.props;
		if (!auth.uid) return <Redirect to='/signin' />
		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
						<ProjectList projects={projects} />
					</div>
					{/* leave gap between divs */}
					<div className="col s12 m5 offset-m1">
						<Notifications notifications={notifications}/>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {

	// return object that represents which state is attached to props
	return {
		// project is from rootreudcer and projects is from project reducer
		projects: state.firestore.ordered.projects,
		auth: state.firebase.auth,
		notifications: state.firestore.ordered.notifications
	}
}

// use two higher order components by using compose
export default compose(
	connect(mapStateToProps),
	// sync up with project collection in firestore
	firestoreConnect([
		{ collection: 'projects' },
		{ collection: 'notifications', limit: 4}
	])
)(Dashboard)