import React, { Component } from 'react';
import Home from './Home';
import { Link, IndexLink }from 'react-router';

var App = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li><Link to="/appointments" activeClassName="active">Appointments</Link></li>
                    <li><Link to="/reviews" activeClassName="active">Reviews</Link></li>
                    <li><Link to="/register" activeClassName="active">Register</Link></li>
                 </ul>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

export default App;
