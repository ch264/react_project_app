import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
	const { notifications } = props;
	return (
		<div className="section">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Notifications</span>
					<ul className="notifications">
						{/* check that notifications exist */}
						{ notifications && notifications.map(notification => {
							return (
								<li key={notification.id}>
									<span className="darkblue-text">{notification.user} </span>
									<span>{notification.content}</span>
									<div className="grey-text note-date">
										{moment(notification.time.toDate()).fromNow()}
									</div>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Notifications