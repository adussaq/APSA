/*global console, $, jQuery */
var getImportantDates, importantDates;
(function () {
	'use strict';
	var events, main, tabClick, thisIsMeObj, runProgram, url, script, random, $;
	$ = jQuery;
	thisIsMeObj = [];
	importantDates = [];
	events = [];
	main = $('#ASPAmain');

	// importantDates.push({date: 'March 2 2013 19:30:00', location: '<a href="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=3508+Cliff+Road+South,+Birmingham,+AL">3508 Cliff Road South</a>', description: 'APSA Potluck'});
	// importantDates.push({date: 'February 13 2013 17:00:00', location: 'Shelby Biomedical Building, room 105', description: 'APSA Monthly Meeting'});
	// importantDates.push({date: 'April 10 2013 17:00:00', location: 'Shelby Biomedical Building, room 105', description: 'APSA Monthly Meeting'});
	// importantDates.push({date: 'April 11 2013 17:00:00', location: 'Shelby Biomedical Building, room 105', description: 'Women In Sceince Panel'});

	//Add people to this is me
	thisIsMeObj.push({name: 'Jennifer Stanley', year: 'MSTP GS2', images: ['JStanley_20130109_1.jpg', 'JStanley_20130109_2.jpg']});
	thisIsMeObj.push({name: 'Alice Weaver', year: 'MSTP MS2', images: ['AWeaver_20130109_1.jpg', 'AWeaver_20130109_2.jpg']});
	thisIsMeObj.push({name: 'Mika Gunzman Karlsson', year: 'MSTP GS2', images: ['MGKarlsson_20130109_1.jpg', 'MGKarlsson_20130109_2.jpg']});
	thisIsMeObj.push({name: 'Meredith Hubbard', year: 'MS1', images: ['MHubbard_20130109_1.jpg', 'MHubbard_20130109_2.jpg']});
	thisIsMeObj.push({name: 'Travis Hull', year: 'MSTP GS2', images: ['THull_20130109_1.jpg', 'THull_20130109_2.jpg']});
	thisIsMeObj.push({name: 'Josh Cohen', year: 'MSTP MS2', images: ['JCohen_20130109_1.jpg', 'JCohen_20130109_2.jpg']});
	thisIsMeObj.push({name: 'Alex Dussaq', year: 'MSTP GS1', images: ['dussaq_alex_20130213_1.jpg', 'dussaq_alex_20130213_2.jpg']});
	thisIsMeObj.push({name: 'Robin Lorenz', year: 'Advisor', images: ['lorenz_robin_20130213_1.jpg', 'lorenz_robin_20130213_2.jpg']});
	thisIsMeObj.push({name: 'Jarrod Meadows', year: 'MSTP GS2', images: ['meadows_jarrod_20130213_1.jpg', 'meadows_jarrod_20130213_2.jpg']});
	thisIsMeObj.push({name: 'Lakisha Moore', year: 'MS1', images: ['moore_lakisha_20130213_1.jpg', 'moore_lakisha_20130213_2.jpg']});

	//create and add pictures to events section
	events.push({image: "wim1.JPG", caption: "<b>Women in Medicine Panel:</b> Our Panel Members and student organizers. From left to right: Dr. Roslyn Mannon, Jennifer Stanley, Dr. Jayne Ness, Dr. Kristin Riley, Dr. Robin Lorenz, Kelsey Patterson (Dr. Jayleen Grams, not pictured)"});
	events.push({image: "wim2.JPG", caption: "<b>Women in Medicine Panel</b>"});


	script = 'https://script.google.com/macros/s/AKfycbyF18goLeKWjSBvZbr-myWuXhCsQnhSYJCE-Ha8dwwQtVsLpaFC/exec';

	//Get important Dates
	getImportantDates = function (x) {
		importantDates = x;
		runProgram();
	};
	$('<script />', {src: script + '?prefix=getImportantDates'}).appendTo(main);

	//Add imporatant links



	//actually start making the page, this section creates the interface
	console.log('Hello from github, source code avaliable at: https://github.com/adussaq/ASPA2');
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

	//Make tabs/set up page
	main = $('#ASPAmain');
	//About us
	$('<div />', {html: '<a href="#" id="tab1">About Us</a><div class= "hide" style="margin-left:10px">' +
						'&nbsp;&nbsp;The MSTP is excited to announce the formation of an American Physician Scientists Association (APSA) chapter at UAB! The goals of our APSA chapter are multifaceted, as we aim to address the unique challenges that face physician-scientists during their training and career. Among other things, we will provide members with opportunities for informal networking with UAB faculty, organize career development and volunteering events, and provide a formal organization through which UAB’s future physician-scientists can have an active voice both nationally and among UAB’s scientific community.' +
						'<br />&nbsp;&nbsp;APSA is a national organization that was formed by MD/PhD students to address the needs and unique challenges faced by physician-scientists during their training. The national APSA chapter is run entirely by MD/PhD students from institutions across the country.  The organization advocates for policy changes essential to the continued success of physician-scientists, and the NCI’s recent establishment of an F30 for MD/PhD students is an example of APSA’s influence and frequent success. The association also sponsors events such as conferences and webinars that are developed specifically for aspiring-physician scientists. For more information, please visit the national chapter’s website (<a href=http://www.physicianscientists.org>http://www.physicianscientists.org</a>), which contains useful resources, including forums to network with established physician-scientists from around the country and to get specialty-specific mentorship.' +
						'<br />&nbsp;&nbsp;The UAB MSTP was interested in forming an APSA chapter because the organization has the potential to strengthen our MSTP, to establish a forum for networking with research-oriented SOM students, and to provide additional resources for career development. Excitingly, our chapter already has over 40 members! Our chapter meets monthly, and meetings consist of research presentations and the planning of future APSA-sponsored events tailored to the needs of our members. Most importantly, our organization is meant to be a resource for our members, so please let us know if you have any ideas for APSA-sponsored events in the future! We believe that our UAB APSA chapter will be an extremely valuable organization for our members and our MSTP, so please consider joining!' +
						'<br /><br /><a href="https://github.com/adussaq/ASPA2/raw/master/APSAConstitution_2013_01_10.pdf">Download Constitution</a><br /><br /></div>'}).appendTo(main);
	//Officers
	$('<div />', {html: '<a href="#" id="tab2">Officers</a><div class= "hide" style="margin-left:10px"><table><tr>' +
						'<td style="text-align:center;width:150px;"><img style="width:140px;" src="https://raw.github.com/adussaq/ASPA2/master/officerImages/Hull_Travis.jpg"></img><br /><b>President</b><br />Travis Hull</td>' +
						'<td style="text-align:center;width:150px;"><img style="width:140px;" src="https://raw.github.com/adussaq/ASPA2/master/officerImages/Stanley_Jennifer.jpg"></img><br /><b>Vice President</b><br />Jennifer Stanley</td>' +
						'<td style="text-align:center;width:150px;"><img style="width:140px;" src="https://raw.github.com/adussaq/ASPA2/master/officerImages/Robert_Stephanie.jpg"></img><br /><b>Secretary</b><br />Stephanie Robert</td>' +
						'<td style="text-align:center;width:150px;"><img style="width:140px;" src="https://raw.github.com/adussaq/ASPA2/master/officerImages/Weaver_Alice.jpg"></img><br /><b>Treasurer</b><br />Alice Weaver</td></tr><tr>' +
						'<td style="text-align:center;width:150px;"><img style="width:140px;" src="https://raw.github.com/adussaq/ASPA2/master/officerImages/Dussaq_Alex.jpg"></img><br /><b>Webmaster</b><br />Alex Dussaq</td>' +
						'<td style="text-align:center;width:150px;"><img style="width:140px;" src="https://github.com/adussaq/ASPA2/raw/master/officerImages/Hubbard_Meredith.png"></img><br /><b>SOM Representative</b><br />Meredith Hubbard</td>' +
						'<td style="text-align:center;width:150px;"><img style="width:140px;" src="https://github.com/adussaq/ASPA2/raw/master/officerImages/Lorenz_Robin.jpg"></img><br /><b>Faculty Advisor</b><br />Dr. Robin Lorenz</td></tr></table></div><br />'}).appendTo(main);

	//Create this is membership section
	$('<div />', {html: '<a href="#" id="tab3">Members</a><div class= "hide" style="margin-left:10px">' +
		'This is not an exhaustive list, instead a list of members who wanted us to know "This is me."<br /><br /><div id=thisIsMe></div><div><br /></div>'}).appendTo(main);

	//Events section
	$('<div />', {html: '<a href="#" id="tab4">Events</a><div class= "hide" style="margin-left:10px">' +
		'In addition to monthly meetings the UAB APSA participates in a number of activities. In spring 2013 we helped teach science labs at Parker High School, held a radiation oncology break away session and a women\'s in medicine and research panel. ' +
		'The coming semester we plan on holding a psychiatry break away session and a panel of the physician scientist husbands of our women\'s panel.<br /><br /><div id=eventPictures></div><div><br /></div>'}).appendTo(main);

	//Important Links
	$('<div />', {html: '<a href="#" id="tab5">Important Links</a><div class= "hide" style="margin-left:10px"><a href="http://www.physicianscientists.org">ASPA National Chapter</a><br />' +
						'Image courtesy of <a href="http://genomicscience.energy.gov">U.S. Department of Energy Genomic Science program</a><br /><br /></div>'}).appendTo(main);
	//Important Dates - create the section
	$('<div />', {html: '<a href="#" id="tab6">Important Dates</a><div id="importantDates" class= "hide" style="margin-left:10px"></div><br />'}).appendTo(main);

	//Contact Us
	$('<div />', {html: '<a href="#" id="tab7">Contact Us</a><div class= "hide" style="margin-left:10px">In development<br /><br /></div>'}).appendTo(main);


	//Add some javascript properties to above tabs
	$('.hide').hide();
	$('#tab1').click(tabClick);
	$('#tab2').click(tabClick);
	$('#tab3').click(tabClick);
	$('#tab4').click(tabClick);
	$('#tab5').click(tabClick);
	$('#tab6').click(tabClick);
	$('#tab7').click(tabClick);

	//Actually add the important dates
	runProgram = function () {
		var fDate, fDate2, i, dates;
		//sort
		importantDates = importantDates.sort(function (a, b) {
			var aDate, bDate;
			aDate = new Date(a);
			bDate = new Date(b);
			if (aDate > bDate) {
				return 1;
			} else {
				return -1;
			}
		});

		//get element
		dates = ('#importantDates');

		//add dates
		for (i = 0; i < importantDates.length; i += 1) {
			fDate = new Date(importantDates[i].date);
			//change compare to 4 hours past the event time
			fDate2 = new Date(importantDates[i].date);
			fDate2.setHours(fDate2.getHours() + 4);
			if (fDate2 > new Date()) {
				$('<div />', {html: "<b>" + fDate.toDateString() +  " " + fDate.toLocaleTimeString().replace(/(:00)+\s/, " ") + "</b> - " + importantDates[i].description + " at " + importantDates[i].location}).appendTo(dates);
			}
		}
	};

	//Add the pictures for the events section
	(function () {
		var eventDiv, scale, slideClick, slideClickLast, j, temp;
		eventDiv = $('#eventPictures');
		scale = 2;
		slideClick = function (evt) {
			evt.preventDefault();
			$(this).hide('slow');
			$("#slide" + ($(this).data('ind')+1)).show('slow');
		};
		slideClickLast = function (evt) {
			evt.preventDefault();
			$(this).hide('slow');
			$('#slide0').show('slow');
		};

		//make the html holder
		$('<div />', {html: '<b>Images</b><div style="border:2px solid black;' + "width:" + 702 / scale + 'px;overflow: hidden;margin-left: auto;margin-right: auto;" id="eventPicHolder"></div>'}).appendTo(eventDiv);


		//Add the images for this person, hiding all but the first one...
		for (j = 0; j < events.length; j += 1) {
			temp = $('<div />', {'class': 'eventIMG', alt: '#', title: 'Click for next slide.', id: 'slide' + j}).click(j === events.length - 1 ? slideClickLast : slideClick).appendTo('#eventPicHolder');
			temp.data('ind', j);
			$('<img />', {src: 'https://raw.github.com/adussaq/ASPA2/master/eventsImages/' + events[j].image, style: "display:block;position:relative;height:" + 540 / scale + 'px;width:' + 702 / scale + "px;"}).appendTo(temp);
			$('<div />', {html: events[j].caption, style: 'text-align: center;'}).appendTo(temp);
		}

		//Initiate slides
		$('.eventIMG').hide();
		$('#slide0').show();

	}());


	//Actually create the this is me section
	(function () {
		var i, j, scale, thisIsMeClick, slideClickLast, slideClick, thisIsMeDiv;

		thisIsMeDiv = $('#thisIsMe');
		slideClick = function (evt) {
			evt.preventDefault();
			$(this).hide('slow');
		};
		slideClickLast = function (evt) {
			evt.preventDefault();
			$('.slideIMG').show('slow');
		};
		thisIsMeClick = function (evt) {
			var text, clicker;
			evt.preventDefault();

			text = $($(this).parent().children('div')[0]);
			if (text.is(":visible")) {
				text.hide('slow');
			} else {
				$('.slide').hide('slow');
				text.show('slow');
			}
		};

		scale = 2;
		//Sort this is me array
		thisIsMeObj = thisIsMeObj.sort(function (a, b) {
			var aSurname, bSurname;
			aSurname = a.name.split(/\s+/).pop();
			bSurname = b.name.split(/\s+/).pop();
			if (aSurname > bSurname) {
				return 1;
			} else if (aSurname < bSurname) {
				return -1;
			} else if (a.name > b.name) {
				return 1;
			} else {
				return -1;
			}
		});
		//Now that it is sorted, add the actual data
		for (i = 0; i < thisIsMeObj.length; i += 1) {
			//make the html
			$('<div />', {html: "<b>" + thisIsMeObj[i].name + "</b>, " + thisIsMeObj[i].year + ' <a href=# id=slides_' + i + '> This is Me</a><div class="slide" style="border:2px solid black;' + "width:" + 702 / scale + "px;height:" + 540 / scale + 'px;overflow: hidden;margin-left: auto;margin-right: auto" id="slideContent' + i + '"></div>'}).appendTo(thisIsMeDiv);

			//give the hide button something to do.
			$('#slides_' + i).click(thisIsMeClick);

			//Add the images for this person, hiding all but the first one...
			for (j = 0; j < thisIsMeObj[i].images.length; j += 1) {
				$('<img />', {'class': 'slideIMG', alt: '#', title: 'Click for next slide.', style: "display:block;position:relative;height:" + 540 / scale + 'px;width:' + 702 / scale + "px;", src: 'https://raw.github.com/adussaq/ASPA2/master/thisIsMeImages/' + thisIsMeObj[i].images[j]}).click(j === thisIsMeObj[i].images.length - 1 ? slideClickLast : slideClick).appendTo('#slideContent' + i);
			}

		}
		//Hide everything that was made...
		$('.slide').hide();
	}());
}());













