// combines reducers into a single root reducer

import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

// sync firestore in background to database
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
	// the reducers will each update information on the corresponding properties inside the state object
	auth: authReducer,
	project: projectReducer,
	firestore: firestoreReducer
});


export default rootReducer
