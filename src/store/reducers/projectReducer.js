// dummy data
const initState = {
	projects: [
		{id: '1', title: 'call baker', content: '00928757147'},
		{id: '2', title: 'call photographer', content: '982y35784'},
		{id: '3', title: 'email location', content: 'example@test.com'},
		
	]
}

// manipulates the state
const projectReducer = (state = initState, action) => {
	return state
}

export default projectReducer
