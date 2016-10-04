import React from 'react';

var Register = React.createClass({
    render: function() {
        return (
            <div id="setting-view" view="no-show" className="container">
                <div className="container">
                    <h3> Register Now</h3>
                    <form id="emailForm">
                        <div className="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" className="form-control" id="emailFormInput"/>
                        </div>
                        <div className="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" className="form-control" id="pwd"/>
                        </div>
                        <button type="submit" className="btn btn-default" id="verify">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
});

export default Register;
