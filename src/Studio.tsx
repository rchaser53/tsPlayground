import * as React from 'react';
import App from './components/App';
import {render} from 'react-dom';

render(
    <App />,
    document.querySelector('#redux-app')
);

import {
	initializeApp,
	auth
} from 'firebase';

import {
	config,
	userSetting
} from '../firebase.config';
const {
	email,
	password
} = userSetting;

initializeApp(config);
auth()
		.signInWithEmailAndPassword(email, password)
		.then((user) => {
			console.log(user);
		})
		.catch((error) => {
			console.log(error);
		});