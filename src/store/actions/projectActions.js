

export const createProject = (project) =>{
	// dispatch method dispatches an action to the reducer
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		// returns promise because it takes time
		firestore.collection('projects').add({
			...project,
			authorFirstName:'Christina',
			authorLastName: 'Muller',
			authorId: 23423,
			createdAt: new Date()
		}).then(() => {
			// pause dispatch and make async call to database
			dispatch({ type: 'CREATE_PROJECT', project: project});
		}).catch((err) => {
			dispatch({ type: 'CREATE_PROJECT_ERROR', err});
		})
	}
};