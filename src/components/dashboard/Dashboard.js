import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
// connects dashboard component with redux store
import { connect } from 'react-redux'

class Dashboard extends Component {
	render(){
		// grabs projects object of the props and pass them down to the ProjectList component
		const { projects } = this.props;
	
		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
						<ProjectList projects={projects} />
					</div>
					{/* leave gap between divs */}
					<div className="col s12 m5 offset-m1">
						<Notifications />
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
		projects: state.project.projects
	}
}

export default connect(mapStateToProps)(Dashboard)