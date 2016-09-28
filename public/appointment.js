var appointmentHTML = '<div id="view-container">'+
    '        <div id="booking-view"  view ="no-show">'+
    '            <div class="container">'+
    '                <h2 class="text-center">Make Appointment</h2>'+
    ''+
    '                <div class=" text-center" class="container">'+
    '                    <button type="button" class="btn btn-primary active">Services</button>'+
    '                    <button id="date-time-btn" type="button" class="btn btn-primary disabled">Date Time</button>'+
    '                    <button type="button" class="btn btn-primary disabled">Confirmation</button>'+
    '                </div>'+
    '                <div id="booking-service" class=" show" class="container">'+
    '                    booking service list for picking page'+
    '                    List all services here'+
    '                    <div class="row">'+
    '                        <div class="col-sm-6 service-grid">'+
    '                            <table class="table table-hover">'+
    '                                <thead>'+
    '                                    <tr>'+
    '                                        <th>#</th>'+
    '                                        <th>Service</th>'+
    '                                        <th>Duration</th>'+
    '                                        <th></th>'+
    '                                    </tr>'+
    '                                </thead>'+
    '                                <tbody>'+
    '                                    <tr>'+
    '                                        <td>1</td>'+
    '                                        <td>Normal Checkup</td>'+
    '                                        <td>1:00 hour</td>'+
    '                                        <td><button type="button" class="btn btn-primary btn-sm service-btn">Select</button></td>'+
    '                                    </tr>'+
    '                                    <tr>'+
    '                                        <td>2</td>'+
    '                                        <td>Teath cleaning</td>'+
    '                                        <td>35 min</td>'+
    '                                        <td><button type="button" class="btn btn-primary btn-sm service-btn">Select</button></td>'+
    '                                    </tr>'+
    '                                    <tr>'+
    '                                        <td>3</td>'+
    '                                        <td>Teath removal</td>'+
    '                                        <td>35 min</td>'+
    '                                        <td><button type="button " class="btn btn-primary btn-sm service-btn">Select</button></td>'+
    '                                    </tr>'+
    '                                </tbody>'+
    '                            </table>'+
    '                        </div>'+
    '                        <div class="col-sm-6 service-grid">'+
    '                            <table class="table table-hover">'+
    '                                <thead>'+
    '                                <tr>'+
    '                                    <th>#</th>'+
    '                                    <th>Service</th>'+
    '                                    <th>Duration</th>'+
    '                                    <th></th>'+
    '                                </tr>'+
    '                                </thead>'+
    '                                <tbody>'+
    '                                <tr>'+
    '                                    <td>1</td>'+
    '                                    <td>Normal Checkup</td>'+
    '                                    <td>1:00 hour</td>'+
    '                                    <td><button type="button" class="btn btn-primary btn-sm">Select</button></td>'+
    '                                </tr>'+
    '                                <tr>'+
    '                                    <td>2</td>'+
    '                                    <td>Teath cleaning</td>'+
    '                                    <td>35 min</td>'+
    '                                    <td><button type="button" class="btn btn-primary btn-sm">Select</button></td>'+
    '                                </tr>'+
    '                                <tr>'+
    '                                    <td>3</td>'+
    '                                    <td>Teath removal</td>'+
    '                                    <td>25 min</td>'+
    '                                    <td><button type="button" class="btn btn-primary btn-sm">Select</button></td>'+
    '                                </tr>'+
    '                                </tbody>'+
    '                            </table>'+
    '                        </div>'+
    ''+
    '                    </div>'+
    '                </div>'+
    ''+
    '                <div id="booking-confirm" class="show">'+
    '                    booking confirmation page'+
    '                </div>'+
    '            </div>'+
    '        </div>';

document.write(appointmentHTML);