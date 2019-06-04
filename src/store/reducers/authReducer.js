
const initState = {
	authError: null
}

// manipulates the state
const authReducer = (state = initState, action) => {
	switch(action.type) {
		case 'LOGIN_ERROR':
			console.log('login error')
			return {
				...state,
				authError: 'failed login'
			}
			case 'LOGIN_SUCCESS':
				console.log('login success')
				return {
					...state,
					authError:null
				}
			default:
				return state;
	}
}

export default authReducer