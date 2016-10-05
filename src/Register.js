import React from 'react';
import $ from 'jquery';

var Register = React.createClass({
    registerNow: function() {
      $(document).ready(function(){
         // Will Implement register later, should only worry about presentation and no server side for this specific submission when discussed with Professor Latoza at office hours
      });
    },
    render: function() {
        return (
            <div id="setting-view" className="container">
                <div className="container">
                    <h3> Register Now</h3>
                    <form id="emailForm">
                        <div className="form-group">
                            <label>Email address:</label>
                            <input type="email" className="form-control" id="emailFormInput"/>
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" className="form-control" id="pwd"/>
                        </div>
                        <button type="submit" className="btn btn-default" id="verify" onClick={this.registerNow}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
});

export default Register;
