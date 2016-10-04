import React from 'react';

var Reviews = React.createClass({
    render: function() {
        return (
            <div>
                <div className="container">
                    <div className="container">
                        <h3 className="text-center">Reviews</h3>
                        <div className="jumbotron">
                            <h3 id="currentMessage" className="text-center"></h3>
                        </div>
                        <div className="form-group">
                            <input type="text" id="txtNewMessage" className="form-control"/>
                                <button id="btUpdateMessage" className="btn btn-primary">Submit Review!</button>
                        </div>
                        <ul className="list-group" id="allReviews">
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

export default Reviews;