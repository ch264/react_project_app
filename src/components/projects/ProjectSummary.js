// summary of a single project
import React from 'react'
import moment from 'moment'

// receives individual project each time ProjectList cycles through
const ProjectSummary = ({project}) => {
	return (
		<div className="card z-depth-0 project-summary">
				<div className="card-content grey-text-darken-3">
					<span className="card-title">{project.title}</span>
					<p>Posted by {project.authorFirstName} {project.authorLastName}</p>
					<p className='grey-text'>{ moment(project.createdAt.toDate()).calendar() }</p>
				</div>
			</div>
	)
}

export default ProjectSummary