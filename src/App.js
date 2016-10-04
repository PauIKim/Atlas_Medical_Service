import React from 'react';
import { Link, IndexLink }from 'react-router';

var App = React.createClass({
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
                                <li><Link to="/appointments" activeClassName="active">Appointments</Link></li>
                                <li><Link to="/reviews" activeClassName="active">Reviews</Link></li>
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
        </div>
        )
    }
});

export default App;
