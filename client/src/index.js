import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import usernameReducer from './components/reducers/username';

const combinedReducers = combineReducers({
	username: usernameReducer,
});

const store = createStore(combinedReducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
