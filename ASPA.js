/*global console, $ */
(function () {
	'use strict';
	var main;
	main = $('#ASPAmain');

	//load scripts
	$('<script />', {src: 'https://raw.github.com/adussaq/ASPA2/master/bootstrap.min.js'}).appendTo(main);


	//Make tabs
	main.html('<ul class="nav nav-tabs"><li><a href="#home" data-toggle="tab">Home</a></li><li><a href="#profile" data-toggle="tab">Profile</a></li><li><a href="#messages" data-toggle="tab">Messages</a></li><li><a href="#settings" data-toggle="tab">Settings</a></li></ul>');

	$('#home').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	$('#profiles').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	$('#messages').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	$('#home').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});

	console.log('Hello from github');


}());