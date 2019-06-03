// summary of a single project
import React from 'react'

// receives individual project each time ProjectList cycles through
const ProjectSummary = ({project}) => {
	return (
		<div className="card z-depth-0 project-summary">
				<div className="card-content grey-text-darken-3">
					<span className="card-title">{project.title}</span>
					<p>Posted by CH</p>
					<p className='grey-text'>June 3rd</p>
				</div>
			</div>
	)
}

export default ProjectSummary