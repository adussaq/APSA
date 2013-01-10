/*global console, $ */
(function () {
	'use strict';
	var main;
	main = $('#ASPAmain');

	//load scripts
	$('<script />', {src: 'https://raw.github.com/adussaq/ASPA2/master/bootstrap.min.js'}).appendTo(main);


	//Make tabs
	main.html('<ul class="nav nav-tabs"><li><a href="#constitution" data-toggle="tab">Constitution</a>This will be the constitution...</li><li><a href="#profiles" data-toggle="tab">Profiles</a>These will be student profiles</li></ul>');

	$('#constitution').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	$('#profiles').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});

	console.log('Hello from github');


}());