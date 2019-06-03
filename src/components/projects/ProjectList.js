import React from 'react'
import ProjectSummary from './ProjectSummary'

// grabs projects property of props that we receive inside this component from the Dashboard
const ProjectList = ({projects}) => {
	// cycle through projects that are passed down and output a project summary by passing in project as prop
	return (
		<div className="project-list section">
			{ projects && projects.map(project => {
				return (
					<ProjectSummary project={project} key={project.id} />
				)
			})}
		</div>
	)
}

export default ProjectList