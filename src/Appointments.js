import React from 'react';
import './home-stylesheet.css';
var Appointments = React.createClass({
    render: function() {
        return (
            <div>
                   <div id="appointment-form">
                       <p id="validation"> Important : You must be registered to set an appointment </p>
                        <br /> E-mail: &nbsp; &nbsp; &nbsp; <input type="email" pattern="*@*.*"
                                                    name="email" placeholder="example@example.com" /> <br />
                        Password: <input type="password" /> <br />
                        <br />
                        <h3>Appointment Time</h3>
                        <input type="datetime-local" />
                        <h3>Patient General Information</h3>
                        First Name: <br /> <input type="text" pattern="[A-Za-z]{1}"
                                                  name="firstname" value="" /><br /> Last Name: <br /> <input
                        type="text" pattern="[A-Za-z]{1}" name="lastname" value="" /><br />
                        <br />

                        <form action="">
                            Gender <br /> <input type="radio" name="gender" id="male" value="1" />
                            male<br /> <input type="radio" name="gender" id="female" value="2" />
                            female<br />
                    </form>

                        <br /> Cell Phone: &nbsp; <input type="text"
                                                                          pattern="[0-9]{3}-{0-9}{3}-{0-9}{4}" placeholder="(888) 888-8888" />
                        <br /> <br /> Phone Number: &nbsp; <input type="text"
                                                            pattern="[0-9]{3}-{0-9}{3}-{0-9}{4}" placeholder="(888) 888-8888" /> <br />
                        <h3>Patient Background Information</h3>
                        <p>Are you insured?</p>
                        <label htmlFor="healthinsurance"></label> <input type="radio"
                                                                         name="healthinsurance" value="" />I have insurance<br /> <label
                        htmlFor="healthinsurance"></label> <input type="radio"
                                                                  name="healthinsurance" value="" />I do not have insurance<br /> <label
                        htmlFor="healthinsurance"></label> <input type="radio"
                                                                  name="healthinsurance" value="" />I do not know<br /> <br />
                        Briefly describe below, the diagnosis. e.g any symptons, check-ups
                        etc.. <br />
                        <textarea id="diagnosis"></textarea><br /><br />
                        <input type="submit" value="Submit" /> <input type="reset" />
                    </div>
            </div>
        );
    }
});

export default Appointments;
