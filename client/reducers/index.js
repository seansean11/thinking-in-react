import { combineReducers } from 'redux';

const music = (state = [], action) => {
	switch (action.type) {
		case 'GET_MUSIC':
			return action.music;
		default:
			return state;
	}
};

const onlyActive = (state = false, action) => {
	switch (action.type) {
		case 'ONLY_ACTIVE_UPDATE':
			return action.onlyActive;
		default:
			return state;
	}
}

const search = (state = '', action) => {
	switch (action.type) {
		case 'SEARCH_UPDATE':
			return action.search;
		default:
			return state;
	}
};

const reducers = combineReducers({
	onlyActive,
	search,
	music
});

export default reducers;
