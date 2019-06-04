 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
	apiKey: "AIzaSyBf6lKCopv-BHBgjqmPIwglL8RHcqotG_o",
	authDomain: "react-project-app-ch.firebaseapp.com",
	databaseURL: "https://react-project-app-ch.firebaseio.com",
	projectId: "react-project-app-ch",
	storageBucket: "react-project-app-ch.appspot.com",
	messagingSenderId: "1015825621679",
	appId: "1:1015825621679:web:20b9239a444b688f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Update in firebase library
firebase.firestore().settings({ timestampsInSnapshots:true })

export default firebase