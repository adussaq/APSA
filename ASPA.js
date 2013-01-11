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
			text.hide('slow');
		} else {
			$('.hide').hide('slow');
			text.show('slow');
		}
	};

	//Make tabs
	main = $('#ASPAmain');
	$('<div />', {html: '<a href="#" id="tab1">About Us</a><div class= "hide">&nbsp;&nbsp;The MSTP is excited to announce the formation of an American Physician Scientists Association (APSA) chapter at UAB! The goals of our APSA chapter are multifaceted, as we aim to address the unique challenges that face physician-scientists during their training and career. Among other things, we will provide members with opportunities for informal networking with UAB faculty, organize career development and volunteering events, and provide a formal organization through which UAB’s future physician-scientists can have an active voice both nationally and among UAB’s scientific community.<br />&nbsp;&nbsp;APSA is a national organization that was formed by MD/PhD students to address the needs and unique challenges faced by physician-scientists during their training. The national APSA chapter is run entirely by MD/PhD students from institutions across the country.  The organization advocates for policy changes essential to the continued success of physician-scientists, and the NCI’s recent establishment of an F30 for MD/PhD students is an example of APSA’s influence and frequent success. The association also sponsors events such as conferences and webinars that are developed specifically for aspiring-physician scientists. For more information, please visit the national chapter’s website (<a href=http://www.physicianscientists.org>http://www.physicianscientists.org</a>), which contains useful resources, including forums to network with established physician-scientists from around the country and to get specialty-specific mentorship.<br />&nbsp;&nbsp;The UAB MSTP was interested in forming an APSA chapter because the organization has the potential to strengthen our MSTP, to establish a forum for networking with research-oriented SOM students, and to provide additional resources for career development. Excitingly, our chapter already has over 40 members! Our chapter meets monthly, and meetings consist of research presentations and the planning of future APSA-sponsored events tailored to the needs of our members. Most importantly, our organization is meant to be a resource for our members, so please let us know if you have any ideas for APSA-sponsored events in the future! We believe that our UAB APSA chapter will be an extremely valuable organization for our members and our MSTP, so please consider joining! <br /><br /><a href="https://github.com/adussaq/ASPA2/raw/master/APSAConstitution_2013_01_10.pdf">Download Constitution</a><br /><br /></div>'}).appendTo(main);
	$('<div />', {html: '<a href="#" id="tab2">Officers</a><div class= "hide">President: Travis Hull<br />Vice President: Jennifer Stanley<br />Secretary: Stephanie Robert<br />Treasurer: Alice Weaver<br />Webmaster: Alex Dussaq<br /></div>'}).appendTo(main);
	$('<div />', {html: '<a href="#" id="tab3">Contact Us</a><div class= "hide">In development</div>'}).appendTo(main);
	$('.hide').hide();
	$('#tab1').click(tabClick);
	$('#tab2').click(tabClick);
	$('#tab3').click(tabClick);
}());