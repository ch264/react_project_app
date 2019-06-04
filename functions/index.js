// this code is running on the firebase server, not the browser
const functions = require('firebase-functions');
// use admin SDK to interact with auth service and firestore service
const admin = require('firebase-admin'); 
admin.initializeApp(functions.config().firebase)


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
	response.send("Hello Project People!");
});

const createNotification = (notification => {
	return admin.firestore().collection('notifications')
		.add(notification)
		.then(doc => console.log('notification added', doc))
})

// whenever a project is created fire a callback function that takes that new project
exports.projectCreated = functions.firestore
	.document('projects/{projectId}')
	.onCreate(doc => {
	
	const project = doc.data();
	const notification = {
		content: 'Added a new project', 
		user: `${project.authorFirstName} ${project.authorLastName}`,
		time: admin.firestore.FieldValue.serverTimestamp()
	}

	return createNotification(notification)
})