import { SIGN_IN, SIGN_OUT } from '../actions/types.js';

const INITIAL_STATE = {
	isSignedIn: null,
	userId: null
};

const authReducer = (state = INITIAL_STATE, action) => {
	if (action.type === SIGN_IN) {
		return { ...state, isSignedIn: true, userId: action.payload };
	} else if (action.type === SIGN_OUT) {
		return { ...state, isSignedIn: false, userId: null };
	}
	return state;
};

export default authReducer;
