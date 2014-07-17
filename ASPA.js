/*global console, $, jQuery */
var updateChanges;
console.log("v2.0.18");
//Tracking
///*
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-48393146-1', 'uab-apsa.googlecode.com');
  ga('send', 'pageview');
//*/
var getImportantDates, importantDates;
(function () {
    'use strict';
    var events, main, tabClick, thisIsMeObj, $;
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
    thisIsMeObj.push({name: 'Jennifer Stanley', year: 'MSTP GS3', images: ['JStanley_20130109_1.jpg', 'JStanley_20130109_2.jpg']});
    thisIsMeObj.push({name: 'Alice Weaver', year: 'MSTP GS1', images: ['AWeaver_20130109_1.jpg', 'AWeaver_20130109_2.jpg']});
    thisIsMeObj.push({name: 'Mika Gunzman Karlsson', year: 'MSTP GS3', images: ['MGKarlsson_20130109_1.jpg', 'MGKarlsson_20130109_2.jpg']});
    thisIsMeObj.push({name: 'Meredith Hubbard', year: 'MS2', images: ['MHubbard_20130109_1.jpg', 'MHubbard_20130109_2.jpg']});
    thisIsMeObj.push({name: 'Travis Hull', year: 'MSTP GS3', images: ['THull_20130109_1.jpg', 'THull_20130109_2.jpg']});
    thisIsMeObj.push({name: 'Josh Cohen', year: 'MSTP GS1', images: ['JCohen_20130109_1.jpg', 'JCohen_20130109_2.jpg']});
    thisIsMeObj.push({name: 'Alex Dussaq', year: 'MSTP MS2', images: ['dussaq_alex_20130213_1.jpg', 'dussaq_alex_20130213_2.jpg']});
    thisIsMeObj.push({name: 'Robin Lorenz', year: 'Advisor', images: ['lorenz_robin_20130213_1.jpg', 'lorenz_robin_20130213_2.jpg']});
    thisIsMeObj.push({name: 'Jarrod Meadows', year: 'MSTP GS3', images: ['meadows_jarrod_20130213_1.jpg', 'meadows_jarrod_20130213_2.jpg']});
    thisIsMeObj.push({name: 'Lakisha Moore', year: 'MS2', images: ['moore_lakisha_20130213_1.jpg', 'moore_lakisha_20130213_2.jpg']});
    thisIsMeObj.push({name: 'Quinn Dunlap', year: 'MS3', images: ['Quinn_Dunlap_1.jpg', 'Quinn_Dunlap_2.jpg', 'Quinn_Dunlap_3.jpg']});
    thisIsMeObj.push({name: 'Stephanie Robert', year: 'MSTP GS3', images: ['Stephanie_Robert_1.jpg', 'Stephanie_Robert_2.jpg']});
    thisIsMeObj.push({name: 'Kelsey Patterson', year: 'MSTP MS2', images: ['Kelsey_Paternson.jpg']});
    thisIsMeObj.push({name: 'Stephan Gragg', year: 'MSTP MS1', images: ['Gragg_Stephan_1.jpg', 'Gragg_Stephan_2.jpg']});
    thisIsMeObj.push({name: 'Muhan Hu', year: 'MSTP MS1', images: ['Hu_muhan_1.jpg', 'Hu_muhan_2.jpg']});
    thisIsMeObj.push({name: 'Tim Kennell', year: 'MSTP MS1', images: ['Kennel_tim_2.jpg', 'Kennell_tim_1.jpg']});
    thisIsMeObj.push({name: 'Jeremie Lever', year: 'MSTP MS1', images: ['Lever_Jeremie_1.jpg', 'Lever_Jeremie_2.jpg']});
    thisIsMeObj.push({name: 'Tyler McCaw', year: 'MSTP MS1', images: ['McCaw_tyler_1.jpg', 'McCaw_tyler_2.jpg']});
    thisIsMeObj.push({name: 'Mark Pepsin', year: 'MSTP MS1', images: ['Pepsin_Mark_1.jpg', 'Pepsin_Mark_2.jpg']});


    //create and add pictures to events section
    events.push({image: "wim1.JPG", caption: "<b>Women in Medicine Panel:</b> Our Panel Members and student organizers. From left to right: Dr. Roslyn Mannon, Jennifer Stanley, Dr. Jayne Ness, Dr. Kristin Riley, Dr. Robin Lorenz, Kelsey Patterson (Dr. Jayleen Grams, not pictured)"});
    events.push({image: "wim2.JPG", caption: "<b>Women in Medicine Panel</b>"});
    events.push({image: "mm1.JPG", caption: "<b>Monthly Meeting 6/18/2013</b> Jennifer Stanley presents her research."});
    events.push({image: "mm2.JPG", caption: "<b>Monthly Meeting 6/18/2013</b> Jennifer Stanley presents her research."});

    //Add imporatant links



    //actually start making the page, this section creates the interface
    console.log('Hello from googlecode, source code avaliable at: https://code.google.com/p/uab-apsa/');
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
                        '&nbsp;&nbsp;At the national level, APSA works to furthering the training and success of physician scientists by providing resources and opportunities for networking, mentorship, career development, and policy change. For more information, please visit the national organization’s website (http://www.physicianscientists.org) and consider becoming an APSA member.' +
                        '<br />&nbsp;&nbsp;The UAB APSA local chapter was established in Spring 2013 to promote networking within the physician scientist community at UAB, to organize career development events for physician scientists in training, to expand the role of physician scientists into the Birmingham community through outreach events, and to provide a formal platform through which UAB’s future physician-scientists can have an active voice both locally and nationally.  Since then, we have expanded our roster to include over 60 members from the MD, MD/PhD, and MD/MPH programs.  We have sponsored over 50 events ranging from presentations to local high school students on the real-world applications of basic science principles to a roundtable discussion with the CEO of the American Medical Association to workshops on successful grant writing. Each event we sponsor is proposed, planned, and organized by committees composed of APSA members; last year we had over 30 members who served in an active role on these committees.' +
                        '<br />&nbsp;&nbsp;The UAB APSA chapter has been recognized by locally and nationally for our dedication to physician scientist training.  We have received multiple nominations for the outstanding UAB student group of the year and have a strong history of support from both the UAB School of Medicine and the UAB Medical Scientist Training Program.  We have received several grants from the national APSA office including an institutional travel award to the 2014 APSA Annual Meeting, which was attended by 9 of our members.  We were also recognized at the 2014 Annual Meeting as a local chapter of excellence and had the opportunity to speak at the APSA business meeting on our success as a student group.  In addition, we currently have 7 local members serving on national APSA planning committees, including 3 committee vice-Chairs, making UAB the most well-represented institution in the country within the national APSA organization.' +
                        '<br />&nbsp;&nbsp;As our chapter evolves, we continue to increase our involvement in physician scientist development, both locally and nationally.  Anyone interested in joining UAB APSA is welcome to contact us at UAB.APSA@gmail.com or to attend one of our monthly membership meetings.  Thanks, and we encourage you to get involved!' +
                        '<br /><br /><a href="https://uab-apsa.googlecode.com/git/APSAConstitution_2013_01_10.pdf">Download Constitution</a><br /><br /></div>'}).appendTo(main);
    //Officers
    $('<div />', {html: '<a href="#" id="tab2">Officers</a><div class= "hide" style="margin-left:10px"><table><tr>' +
                        '<td style="text-align:center;width:150px;"><img style="width:140px;" src="https://uab-apsa.googlecode.com/git/officerImages/Weaver_Alice.jpg"></img><br /><b>President</b><br />Alice Weaver</td>' +
                        '<td style="text-align:center;width:150px;"><img style="width:140px;" src="https://uab-apsa.googlecode.com/git/officerImages/     "></img><br /><b>Vice President</b><br />Tyler McCaw</td>' +
                        '<td style="text-align:center;width:150px;"><img style="width:140px;" src="https://uab-apsa.googlecode.com/git/officerImages/     "></img><br /><b>Secretary</b><br />Muhan Hu</td>' +
                        '<td style="text-align:center;width:150px;"><img style="width:140px;" src="https://uab-apsa.googlecode.com/git/officerImages/     "></img><br /><b>Treasurer</b><br />Nick Eustace</td>' +
                        '</tr><tr>' +
                        '<td style="text-align:center;width:150px;"><img style="width:140px;" src="https://uab-apsa.googlecode.com/git/officerImages/Dussaq_Alex.jpg"></img><br /><b>Webmaster</b><br />Alex Dussaq</td>' +
                        '<td style="text-align:center;width:150px;"><img style="width:140px;" src="https://uab-apsa.googlecode.com/git/officerImages/      "></img><br /><b>SOM Representative MS1/2</b><br />Andrew Headrick</td>' +
                        '<td style="text-align:center;width:150px;"><img style="width:140px;" src="https://uab-apsa.googlecode.com/git/officerImages/      "></img><br /><b>SOM Representative MS3/4</b><br />Quinn Dunlap</td>' +
                        '<td style="text-align:center;width:150px;"><img style="width:140px;" src="https://uab-apsa.googlecode.com/git/officerImages/Lorenz_Robin.jpg"></img><br /><b>Faculty Advisor</b><br />Dr. Robin Lorenz</td>' +
                        '</tr><tr>' +
                        '<td style="text-align:center;width:150px;"><img style="width:140px;" src="https://uab-apsa.googlecode.com/git/officerImages/Redmond_Nicole.jpg"></img><br /><b>Faculty Advisor</b><br />Dr. Nicole Redmond</td>' +
                        '</tr>' +
                        '</table></div><br />'}).appendTo(main);

    //Create this is membership section
    $('<div />', {html: '<a href="#" id="tab3">Members</a><div class= "hide" style="margin-left:10px">' +
        'This is not an exhaustive list, instead a list of members who wanted us to know "This is me."<br /><br /><div id=thisIsMe></div><div><br /></div>'}).appendTo(main);

    //Important Dates - create the section
    $('<div />', {html: '<a href="#" id="tab6">Important Dates</a><div id="importantDates" class= "hide" style="margin-left:10px"></div><br />'}).appendTo(main);

    //Research Opportunities -create the section
    $('<div />', {html: '<a href="#" id="tab8">Research Opportunities</a><div id="researchOps" class= "hide" style="margin-left:10px"></div><br />'}).appendTo(main);

    //Events section
    $('<div />', {html: '<a href="#" id="tab4">Past Events</a><div id=pastEvents class= "hide" style="margin-left:10px">' +
        'In addition to monthly meetings the UAB APSA participates in a number of activities. In spring 2013 we helped teach science labs at Parker High School, held a radiation oncology break away session and a women\'s in medicine and research panel. ' +
        'The coming semester we plan on holding a psychiatry break away session and a panel of the physician scientist husbands of our women\'s panel.<br /><br /><div id=eventPictures></div><div><br /></div>'}).appendTo(main);

    //Contact Us
    $('<div />', {html: '<a href="#" id="tab7">Contact Us</a><div class= "hide" style="margin-left:10px"><a  href="mailto:UAB.APSA@gmail.com">UAB.APSA@gmail.com</a><br /><br /></div>'}).appendTo(main);

    //Important Links
    $('<div />', {html: '<a href="#" id="tab5">Important Links</a><div class= "hide" style="margin-left:10px"><a href="http://www.physicianscientists.org">ASPA National Chapter</a><br />' +
                        'Image courtesy of <a href="http://genomicscience.energy.gov">U.S. Department of Energy Genomic Science program</a><br />' +
                        '<a href = "https://docs.google.com/spreadsheet/ccc?key=0AgdB5oEiQBYWdGhFeDBZY0NvTEpPUk9fR01GTEVQREE">Google Doc for Parker High School Outreach</a><br />' +
                        '<br /></div>'}).appendTo(main);

    //Add some javascript properties to above tabs
    $('.hide').hide();
    $('#tab1').click(tabClick);
    $('#tab2').click(tabClick);
    $('#tab3').click(tabClick);
    $('#tab4').click(tabClick);
    $('#tab5').click(tabClick);
    $('#tab6').click(tabClick);
    $('#tab7').click(tabClick);
    $('#tab8').click(tabClick);


    //Update with new data
    updateChanges = function () {
        var webData = {}, editAllSections, updateRoster, sortByLastName, semesterClick, getThisIsMeImages, url, thisIsMeClick, slideClick, slideClickLast,
            updateDates, updatePastEvents, getEventImages;
        url = 'https://3fb447c8ea45275c3e71dc49d678c53d6b103efb.googledrive.com/host/0BwdB5oEiQBYWZFk2ZkRNM1d3ZXc/';
        jQuery.get(url + '?' + (Math.random()).toString().replace('0.', ''), function (x) {
            eval("webData = " + x);
            editAllSections();
        });
        editAllSections = function () {
            console.log(webData);

            //update Roster
            updateRoster(webData.roster);

            //update important dates
            updateDates(webData.importantDates);

            //update past events
            updatePastEvents(webData.pastEvents);

            //update research at uab table

            //Hide all divs
            $('.hide').hide();

        };

        updateRoster = function (rost) {
            var div, i, table, trow, indText;

            //sort roster
            rost = rost.sort(sortByLastName);

            //Populate the div
            div = $('#thisIsMe');
            div.html("");
            table = $('<table>', {style: "width:100%"}).appendTo(div);
            for (i = 0; i < rost.length; i += 1) {
                if (!(i % 2)) {
                    trow = $('<tr>', {style: "padding:5px;width:100%;"}).appendTo(table);
                }
                indText = $('<span>', {html: "<b>" + rost[i].name + "</b> " + rost[i].program});
                if (rost[i].hasOwnProperty("office")) {
                    indText.html(indText.html() + ", " + rost[i].office);
                }
                if (rost[i].hasOwnProperty('thisIsMe')) {
                    indText.append(getThisIsMeImages(rost[i].name, rost[i].thisIsMe));
                }
                $('<td>', {style: "width:50%;padding:5px;", html: indText}).appendTo(trow);
            }
            //Hide everything
            $('.slide').hide();
        };

        updateDates = function (dates) {
            //variables
            var div, i;

            //sort dates
            dates = dates.sort(function (a, b) {
                if (new Date(a.date) >= new Date(b.date)) {
                    return 1;
                }
                return -1;
            });

            //update actual elements
            div = $('#importantDates');
            div.text("");
            div = $('<table>').appendTo(div);

            for (i = 0; i < dates.length; i += 1) {
                $('<tr>').append(
                    new Date(dates[i].endTime) - new Date(dates[i].date) > 60 * 60 * 1000 ?
                            $('<td>', {style: "width:25%;padding:5px;", text: (new Date(dates[i].date)).toLocaleString() + " - " + (new Date(dates[i].endTime)).toLocaleString() })
                        :
                                $('<td>', {style: "width:25%;padding:5px;", text: (new Date(dates[i].date)).toLocaleString()})
                ).append(
                    $('<td>', {style: "padding:5px;", html: "<b>" + dates[i].name + '</b><br />' + dates[i].location + (dates[i].description ? "<br />" + dates[i].description : "") })
                ).appendTo(div);
            }
        };

        updatePastEvents = function (events) {
            //Sort by date
            var semester, i, semStr = "", div, evData, imgHolder;
            events = events.sort(function (a, b) {
                if (new Date(a.date) >= new Date(b.date)) {
                    return 1;
                }
                return -1;
            });
            div = $('#pastEvents');
            div.text("");
            //Start creating list of events, tab
            for (i = 0; i < events.length; i += 1) {
                if (events[i].semester !== semStr) {
                    semStr = events[i].semester;
                    //<a href="#" id="tab5">Important Links</a><div class= "hide" style="margin-left:10px">
                    semester = $('<table>').appendTo(
                        $('<div>', {'class': 'semester', style: 'margin-left:10px'}).appendTo(
                            $('<div>').append(
                                $('<a>', {text: semStr, href: '#'}).click(semesterClick)
                            ).appendTo(div)
                        )
                    );
                }
                evData = '<b>' + events[i].name + '</b>';
                if (events[i].type) {
                    evData += "<br />This event focused on " + events[i].type + "."
                }
                if (events[i].leaders) {
                    evData += "<br />This event was led by " + events[i].leaders + "."
                }
                evData = $('<td>', {style: "width:75%;padding:5px;", html: evData})
                if (events[i].images) {
                    imgHolder = getEventImages(events[i].images);
                    evData.append(
                        $('<div>').append(
                            $('<a>', {href: '#', text: 'Images'})
                        ).append(imgHolder)
                    );
                }

                //Now that the semester is build add events, ignore pictures for now
                $('<tr>', {style: "width:100%;padding:5px;"}).append(
                    $('<td>', {style: "width:25%;padding:5px;", text: (new Date(events[i].date)).toDateString()})
                ).append(evData).appendTo(semester);
            }


            $('.slide').hide();
            $('.semester').hide();
        };



        //Sub functions
        getThisIsMeImages = function (name, number) {
            var i, ret, div, scale, imageBase = url + "thisIsMeImages" + "/" + encodeURIComponent(name) + "/Slide";
            scale = 2;
            ret = $('<span>', {text: ', '});
            $('<a>', {href: "#", text: "This is me"}).click(thisIsMeClick).appendTo(ret);
            div = $('<div>', {'class': "slide", style: "border:2px solid black;width:" + 702 / scale + "px;height:" + 540 / scale + 'px;overflow: hidden;margin-left: auto;margin-right: auto', id: 'slideContent'}).appendTo(ret);
            for (i = 1; i <= number; i += 1) {
                $('<img>', {'class': 'slideIMG', alt: '#', title: 'Click for next slide.', style: "display:block;position:relative;height:" + 540 / scale + 'px;width:' + 702 / scale + "px;", src: imageBase + i + '.jpg'}).click(i === number ? slideClickLast : slideClick).appendTo(div);
            }
            return ret;
        };

        getEventImages = function (images) {
            var i, ret, div, scale, imageBase = url + "images" + "/";
            scale = 2;
            var imageArr = images.split(';');
            if (!imageArr.length) {imageArr[0] = images}
            imageArr = imageArr.map(function(x){return x.replace(/^\s*|\s*$/g, "")});
            ret = $('<span>', {text: '<br />'});
            $('<a>', {href: "#", text: "Event Images"}).click(thisIsMeClick).appendTo(ret);
            div = $('<div>', {'class': "slide", style: "border:2px solid black;" + "height:" + 540 / scale + 'px;overflow: hidden;margin-left: auto;margin-right: auto;display: inline-block;', id: 'slideContent'}).appendTo(ret);
            for (i = 0; i < imageArr.length; i += 1) {
                console.log(imageBase + imageArr[i]);
                $('<img>', {'class': 'slideIMG', alt: '#', title: 'Click for next slide.', style: "display:block;position:relative;height:" + 504 / scale + 'px;', src: imageBase + encodeURIComponent(imageArr[i])}).click(i === imageArr.length - 1 ? slideClickLast : slideClick).appendTo(div);
            }
            return ret;
        };

        thisIsMeClick = function (evt) {
            var text;
            evt.preventDefault();

            text = $($(this).parent().children('div')[0]);
            if (text.is(":visible")) {
                text.hide('slow');
            } else {
                $('.slide').hide('slow');
                text.show('slow');
            }
        };

        slideClick = function (evt) {
            evt.preventDefault();
            $(this).hide('slow');
        };
        slideClickLast = function (evt) {
            evt.preventDefault();
            $('.slideIMG').show('slow');
        };

        sortByLastName = function (a, b) {
            var aSurname, bSurname;
            aSurname = a.name.split(/\s+/).pop();
            bSurname = b.name.split(/\s+/).pop();
            if (aSurname > bSurname) {
                return 1;
            }
            if (aSurname < bSurname) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return -1;
        };

        semesterClick = function (evt) {
            var text;
            evt.preventDefault();
            text = $($(this).parent().children('div')[0]);
            if (text.is(":visible")) {
                text.hide('slow');
            } else {
                $('.semester').hide('slow');
                text.show('slow');
            }
        };
    };




    //Actually add the important dates
    (function () {
        jQuery.getJSON('https://www.googleapis.com/calendar/v3/calendars/0t6p55ncjk6k3gaaghjbdf5ft4%40group.calendar.google.com/events?key=AIzaSyC4e7o6-EOQFe9FXdVLHRk__DAaz_MBooU', function (result) {
            var fDate, fDate2, i, dates, importantDates, j;
            importantDates = [];
            for (j = 0; j < result.items.length; j += 1) {
                importantDates.push({date: result.items[j].start.dateTime, description: result.items[j].summary, location: result.items[j].location !== undefined ? result.items[j].location : 'TBA' });
            }
            //sort
            importantDates = importantDates.sort(function (a, b) {
                var aDate, bDate;
                aDate = new Date(a);
                bDate = new Date(b);
                if (aDate > bDate) {
                    return 1;
                }
                return -1;
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
        });
    }());

    //Add the pictures for the events section
    (function () {
        var eventDiv, scale, slideClick, slideClickLast, j, temp;
        eventDiv = $('#eventPictures');
        scale = 2;
        slideClick = function (evt) {
            evt.preventDefault();
            $(this).hide('slow');
            $("#slide" + ($(this).data('ind') + 1)).show('slow');
        };
        slideClickLast = function (evt) {
            evt.preventDefault();
            $(this).hide('slow');
            $('#slide0').show('slow');
        };

        //make the html holder
        $('<div />', {html: '<div style="text-align: center;"><b>Images</b><br />Click for next image. </div><div style="border:2px solid black;' + "width:" + 702 / scale + 'px;overflow: hidden;margin-left: auto;margin-right: auto;" id="eventPicHolder"></div>'}).appendTo(eventDiv);


        //Add the images for this person, hiding all but the first one...
        for (j = 0; j < events.length; j += 1) {
            temp = $('<div />', {'class': 'eventIMG', alt: '#', title: 'Click for next slide.', id: 'slide' + j}).click(j === events.length - 1 ? slideClickLast : slideClick).appendTo('#eventPicHolder');
            temp.data('ind', j);
            $('<img />', {src: 'https://uab-apsa.googlecode.com/git/eventsImages/' + events[j].image, style: "display:block;position:relative;height:" + 540 / scale + 'px;width:' + 702 / scale + "px;"}).appendTo(temp);
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
            var text;
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
            }
            if (aSurname < bSurname) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return -1;
        });
        //Now that it is sorted, add the actual data
        for (i = 0; i < thisIsMeObj.length; i += 1) {
            //make the html
            $('<div />', {html: "<b>" + thisIsMeObj[i].name + "</b>, " + thisIsMeObj[i].year + ' <a href=# id=slides_' + i + '> This is Me</a><div class="slide" style="border:2px solid black;' + "width:" + 702 / scale + "px;height:" + 540 / scale + 'px;overflow: hidden;margin-left: auto;margin-right: auto" id="slideContent' + i + '"></div>'}).appendTo(thisIsMeDiv);

            //give the hide button something to do.
            $('#slides_' + i).click(thisIsMeClick);

            //Add the images for this person, hiding all but the first one...
            for (j = 0; j < thisIsMeObj[i].images.length; j += 1) {
                $('<img />', {'class': 'slideIMG',
                                alt: '#', title: 'Click for next slide.',
                                style: "display:block;position:relative;height:" + 540 / scale + 'px;width:' + 702 / scale + "px;",
                                src: 'https://uab-apsa.googlecode.com/git/thisIsMeImages/' + thisIsMeObj[i].images[j]}).click(j === thisIsMeObj[i].images.length - 1 ? slideClickLast : slideClick).appendTo('#slideContent' + i);
            }

        }
        //Hide everything that was made...
        $('.slide').hide();
    }());
}());













