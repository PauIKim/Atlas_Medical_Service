import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Home from'./Home';
import Reviews from './Reviews';
import Appointments from './Appointments';
import Register from './Register';
import firebase from 'firebase';
import $ from 'jquery';

import './kstyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './home-stylesheet.css';

var destination = document.querySelector("#root");

var config = {
    apiKey: "AIzaSyAWxwRaLPoQHNhWlL0BNEhAAiw5ejKR9Po",
    authDomain: "swe432-ce0a7.firebaseapp.com",
    databaseURL: "https://swe432-ce0a7.firebaseio.com",
    storageBucket: "swe432-ce0a7.appspot.com",
    messagingSenderId: "245504141818"
};
firebase.initializeApp(config);

ReactDOM.render(
    <ReactRouter.Router>
        <ReactRouter.Route path="/" component={App}>
            <ReactRouter.IndexRoute component={Home}/>
            <ReactRouter.Route path="reviews" component={Reviews} />
            <ReactRouter.Route path="appointments" component={Appointments} />
            <ReactRouter.Route path="register" component={Register} />
        </ReactRouter.Route>
    </ReactRouter.Router>,
    destination
);
