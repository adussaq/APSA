/*global console, $ */
(function () {
	'use strict';
	var main, tabClick;
	main = $('#ASPAmain');
	console.log('Hello from github');
	tabClick = function (evt) {
		var text;
		evt.preventDefault();
		text = $($(this).parent().children('div')[0]);
		if (text.is(":visible")) {
			$('.hide').hide('slow');
		} else {
			$('.hide').hide({duration: 'slow', complete: function () { text.show(); }});
		}
	};

	//Make tabs
	main = $('#ASPAmain');
	//$('<div />', {html: '<a href="#" id="tab1">Tab1</a><div class= "hide">This is text</div>'}).appendTo(main);
	//$('<div />', {html: '<a href="#" id="tab2">Tab2</a><div class= "hide">This is also text</div>'}).appendTo(main);
	//$('.hide').hide();
	//$('#tab1').click(tabClick);
	//$('#tab2').click(tabClick);
}());