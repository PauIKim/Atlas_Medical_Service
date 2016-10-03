import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Home from'./Home';
import Reviews from './Reviews';
import Appointments from './Appointments';
import Register from './Register';

var destination = document.querySelector("#root");

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