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
	});

	$('#li-doctor').click(function (e) {
		e.preventDefault();
		var viewName = $(this).attr('launch-view');
		showView(viewName);
	});
	$('#li-booking').click(function (e) {
		e.preventDefault();
		var viewName = $(this).attr('launch-view');
		showView(viewName);
	});

	$('#li-home').click(function (e) {
		e.preventDefault();
		var viewName = $(this).attr('launch-view');
		showView(viewName);
	});
});