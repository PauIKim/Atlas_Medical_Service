import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Home from'./Home';
import Reviews from './Reviews';
import Appointments from './Appointments';
import Register from './Register';

import './kstyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './home-stylesheet.css';

import $ from 'jquery';
var firebase = require('firebase');
var destination = document.querySelector("#root");

var config = {
    apiKey: "AIzaSyAWxwRaLPoQHNhWlL0BNEhAAiw5ejKR9Po",
    authDomain: "swe432-ce0a7.firebaseapp.com",
    databaseURL: "https://swe432-ce0a7.firebaseio.com",
    storageBucket: "swe432-ce0a7.appspot.com",
    messagingSenderId: "245504141818"
};
const F = firebase.initializeApp(config);

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

var rootRef = firebase.database().ref();
var currentMessage = document.getElementById("currentMessage"),
    txtNewMessage = document.getElementById("txtNewMessage"),
    btUpdateMessage = document.getElementById("btUpdateMessage"),
    reviews = rootRef.child("themReviews"),
    latestReview = rootRef.child("latestReview"),
    allReviews = document.getElementById("allReviews"),
    users = rootRef.child("users");

var today = new Date();

function addReview(value, key){
    console.log(today.toDateString());
    $("#allReviews").append(

        '<li class="list-group-item">' + value + '<br>-' + today.toDateString() +
        '</li>'
    );
}

reviews.on("child_added", function (data){
    addReview(data.val().review, data.key);
});
//when submit review button is clicked, push the review to firebase
btUpdateMessage.addEventListener("click", function (){
    reviews.push({"review" : txtNewMessage.value})
    latestReview.set({"currentMessage" : txtNewMessage.value})
    txtNewMessage.value = "";
});
//keep the latest review in the jumbotron
latestReview.on("value", function(snapshot){
    currentMessage.innerText = snapshot.val().currentMessage + '\n -' + today.toDateString();
});