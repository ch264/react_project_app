import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
// redux middleware
import thunk from 'redux-thunk'

import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

import firebase from './config/firebase'

// allows extra arguent in project actions
const store = createStore(rootReducer, 
	compose(
	applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
	// store enhancers to pass in config so that in projectActions the database is known
	reduxFirestore(firebase),
	// set configs on firebase enhancer to access user profile data from the collection called 'users' in firestore. we can now access it.
	reactReduxFirebase(firebase, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
	)
);

store.firebaseAuthIsReady.then(() =>{
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


	serviceWorker.unregister();
})


