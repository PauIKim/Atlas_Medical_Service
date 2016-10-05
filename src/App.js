import React from 'react';
import { Link, IndexLink }from 'react-router';
import $ from 'jquery';
var firebase = require('firebase');
import "./kstyle.css";
//import Firebase from 'firebase';
var App = React.createClass({
    getReviews: function() {
        $(document).ready(function() {
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

                    '<li class="list-group-item">' + value + '<br>-' +
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
        });

    },
    register: function() {
        $(document).ready(function(){

        });
    },
    render: function() {
        return (
        <div id="header" className="container">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Atlas Medical Service</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                                <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                                <li><Link to="/appointments" activeClassName="active" onClick={this.booking}>Appointments</Link></li>
                                <li><Link to="/reviews" activeClassName="active" onClick={this.getReviews}>Reviews</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/register" activeClassName="active"><span className="glyphicon glyphicon-user"></span>Register</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="content">
                {this.props.children}
            </div>
            <br /> <br />
            <footer>© 2016-2016 AtlasMedicalService. Medicine and Health
                Research Foundation. All Rights reserved.</footer>
        </div>
        )
    }
});

export default App;
