// add new project to project collection in Firestore

export const createProject = (project) =>{
	// dispatch method dispatches an action to the reducer
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid
		// returns promise because it takes time
		firestore.collection('projects').add({
			...project,
			authorFirstName: profile.firstName,
			authorLastName: profile.lastName,
			authorId: authorId,
			createdAt: new Date()
		}).then(() => {
			// pause dispatch and make async call to database
			dispatch({ type: 'CREATE_PROJECT', project: project});
		}).catch((err) => {
			dispatch({ type: 'CREATE_PROJECT_ERROR', err});
		})
	}
};