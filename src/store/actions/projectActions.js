

export const createProject = (project) =>{
	// dispatch method dispatches an action to the reducer
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// pause dispatch and make async call to database
		dispatch({ type: 'CREATE_PROJECT', project: project});
	}
};