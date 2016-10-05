import React from 'react';
import './home-stylesheet.css';
import App from './App';
import firebase from 'firebase';
import $ from 'jquery';
var Appointments = React.createClass({
    handleSubmit : function(e) {
        e.preventDefault();

        this.transitionTo('/');

    },
    booking : function() {
        //will worry later(Professor said to not worry about server side yet)
        /*   $(document).ready(function() {
         //First query the firebase database to see if email and password exists

         var ref = new Firebase("https://swe432-ce0a7.firebaseio.com/appointments");
         //var email = document.getElementById("emailId"),
         //   appointments = rootRef.child("appointments"),
         //  users = rootRef.child("users");
         //Query the firebase database to see if the time is already taken
         var query = ref.orderByChild("time").limitToLast(100);
         query.on("child_added", function(messageSnapshot) {
         // This will only be called for the last 100 messages
         var messageData = messageSnapshot.val();
         console.log(messageData);
         });
         //If everything went smooth, save in a time slot in the firebase along with the email
         console.log("DAK");
         });*/
        $(document).ready(function(){
            var rootRef = firebase.database().ref();

            var email = document.getElementById("emailId"),
                appointments = rootRef.child("appointments"),
                time = document.getElementById("time"),
                password = document.getElementById("passId");
            if (email.value === "" || password.value === "" || time.value === ""){
                alert("You must enter a correct email and password and time")
            } else {
                var scheduleTime = time.value;
                console.log(scheduleTime);
                console.log("HMM");
                appointments.push({"time": scheduleTime});
                alert("You have been scheduled for " + scheduleTime);
            }
        });
    },
    render: function() {
        return (
            <div>
                   <div id="appointment-form">
                        <form>
                            <p id="validation"> Important : You must be registered to set an appointment </p>
                            <br /> E-mail: &nbsp; &nbsp; &nbsp; <input type="email" pattern="*@*.*" id="emailId" name="email" placeholder="example@example.com" /> <br />
                            Password:
                            <input type="password" id="passId" /> <br />
                            <br />
                            <h3>Appointment Time</h3>
                            <input type="datetime-local" id="time"/>
                            <h3>Patient General Information</h3>
                            First Name: <br />
                            <input type="text" pattern="[A-Za-z]{1}" name="firstname" /><br /> Last Name: <br />
                            <input type="text" pattern="[A-Za-z]{1}" name="lastname" /><br />
                            <br />
                                Gender <br /> <input type="radio" name="gender" id="male" value="1" />
                                male<br /> <input type="radio" name="gender" id="female" value="2" />
                                female<br />
                            <br /> Cell Phone: &nbsp;
                            <input type="text" pattern="[0-9]{3}-{0-9}{3}-{0-9}{4}" placeholder="(888) 888-8888" />
                            <br /> <br /> Phone Number: &nbsp;
                            <input type="text" pattern="[0-9]{3}-{0-9}{3}-{0-9}{4}" placeholder="(888) 888-8888" /> <br />
                            <h3>Patient Background Information</h3>
                            <p>Are you insured?</p>
                            <label htmlFor="healthinsurance"></label> <input type="radio" name="healthinsurance" value="" />I have insurance<br /> <label
                            htmlFor="healthinsurance"></label> <input type="radio" name="healthinsurance" value="" />I do not have insurance<br /> <label
                            htmlFor="healthinsurance"></label> <input type="radio" name="healthinsurance" value="" />I do not know<br /> <br />

                            Briefly describe below, the diagnosis. e.g any symptons, check-ups
                            etc.. <br />
                            <textarea id="diagnosis"></textarea><br /><br />
                            <input type="submit" value="Submit" onClick={this.booking} onSubmit={this.handleSubmit} /> <input type="reset" />
                        </form>
                   </div>
            </div>
        );
    }
});

export default Appointments;
