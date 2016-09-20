/**
 * Created by Kien
 */
var curView ='home-view';

$(document).ready(function (e) {

	function showView(viewName) {
		//console.log(curView+'.'+viewName);
		$('#'+curView).hide();
		//$('.'+curView).attr('view','no-view');
		$('#' + viewName).show();
		curView = viewName;
	}
	function getFileName(url) {
		var i=url.indexOf('#');
		if (i!=-1) {
			return url.substr(i+1);
		} else return
		url? url.split('/').pop().split('#').shift().split('?').shift(): null;
	}
	window.addEventListener("popstate", function(e) {
		// Get State value using e.state
		e.preventDefault();
		var path=$(location).attr('href');
		path = getFileName(path);
		console.log('history:'+path+'-view');
		showView(path+'-view');
	});


	$('[data-launch-view]').click(function (e) {
		e.preventDefault();
		var viewName = $(this).attr('data-launch-view');
		showView(viewName);

	});

	// add click event for Service nav-link
	$('#li-service').click(function (e) {
		e.preventDefault();
		var viewName = $(this).attr('launch-view');
		showView(viewName);
		$('#service-view .container').append("<p>" +
			"Welcome to our service. We are among the best group of doctor " +
			"physicians in the Fairfax are. The service is cheap but you will " +
			" get the best service. Don't hesistate . Call us today for a free consultation.</p>" +
			"<h3>Product and services</h3> " +
			"<p>With more than 50,000 different treatments and state of the art medical practices, " +
			"we are sure to give you the best health treatment possible.</p>");
		history.pushState(null, null, 'booking.html#service');
	});

	$('#login').click(function (e) {
		e.preventDefault();
		var viewName = $(this).attr('launch-view');
		showView(viewName);
		$('#login-view .container').html(
			'<h3> Log in to set up your services and time</h3>'+
			'<form>'+
			'<div class="form-group">'+
			'<label for="email">Email address:</label>'+
			'<input type="email" class="form-control" id="email">'+
			'</div>'+
			'<div class="form-group">'+
			'<label for="pwd">Password:</label>'+
			'<input type="password" class="form-control" id="pwd">'+
			'</div>'+
			'<div class="checkbox">'+
			'<label><input type="checkbox"> Remember me</label>'+
			'</div>'+
			'<button type="submit" class="btn btn-default">Submit</button>'+
			'</form>');
		history.pushState(null, null, 'booking.html#login');
	});

	$('#li-doctor').click(function (e) {
		e.preventDefault();
		var viewName = $(this).attr('launch-view');
		showView(viewName);
		history.pushState(null, null, 'booking.html#doctor');
	});

	$('#li-booking').click(function (e) {
		e.preventDefault();
		var viewName = $(this).attr('launch-view');
		showView(viewName);
		history.pushState(null, null, 'booking.html#booking');
	});

	$('#li-home').click(function (e) {
		e.preventDefault();
		var viewName = $(this).attr('launch-view');
		showView(viewName);

		history.pushState(null, null, 'booking.html#home');
	});

	$('#li-setting').click(function (e) {
		e.preventDefault();
		var viewName = $(this).attr('launch-view');
		showView(viewName);
		history.pushState(null, null, 'booking.html#setting');
	});

	$('.service-btn').click(function (e) {
		$('#date-time-btn').removeClass("disabled");
	});


});