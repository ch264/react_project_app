import React from 'react'
import { Link } from 'react-router-dom'
import ProjectSummary from './ProjectSummary'

// grabs projects property of props that we receive inside this component from the Dashboard
const ProjectList = ({projects}) => {
	// cycle through projects that are passed down and output a project summary by passing in project as prop
	return (
		<div className="project-list section">
			{ projects && projects.map(project => {
				return (
					<Link to={'/project/' + project.id} key={project.id}>
						<ProjectSummary project={project} />
					</Link>
				)
			})}
		</div>
	)
}

export default ProjectList