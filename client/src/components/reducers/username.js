const intital_state = '';

const usernameReducer = (state, action) => {
	if (typeof state === 'undefined') {
		return intital_state;
	}

	switch (action.type) {
		case 'FILTERAUTHOR':
			return action.payload;
		default:
			return state;
	}
};

export default usernameReducer;
