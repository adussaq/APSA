/*global console, $, jQuery */
var table = (function () {
    'use strict';
    //variables
    var options, main, makeTable, $, div, data, startBuilding, wordSearch, order;

    //variable declaration
    wordSearch = function () {};
    order = function () {};
    main = {};
    options = {
        visible: {
            order: ["Audience", "RType", "ProjectSummary", "Department", "Site", "PostDate"],
            Audience: ["Undergraduate Student - Summer", "Undergraduate Student - Academic Year", "Medical Student - Summer", "Medical Student - Scholarly Activity", "Graduate or MD/PhD Student", "Resident"],
            RType: ["Basic science", "Translational science", "Clinical Research", "Behavioral Research", "Chart Review", "Community-based", "Education", "Public Health/Epidemiology", "Health Outcomes", "Other"],
            Summary: wordSearch,
            Department: ["Anesthesiology", "Biochemistry & Molecular Genetics", "Cell, Developmental, & Integrative Biology", "Dermatology", "Emergency Medicine", "Family & Community Medicine", "Genetics", "Medical Education", "Medicine", "Microbiology", "Neurobiology", "Neurology", "Neurosurgery", "Obstetrics & Gynecology", "Ophthalmology", "Pathology", "Pediatrics", "Pharmacology & Toxicology", "Physical Medicine & Rehabilitation", "Psychiatric & Behavioral Neurobiology", "Radiation Oncology", "Radiology", "Surgery", "Urology", "Other"],
            Site: ["Birmingham Campus", "Huntsville Campus", "Tuscaloosa Campus", "Montgomery Campus", "Children’s of Alabama", "Birmingham VA Medical Center", "Southern Research Institute", "Hudson Alpha", "Other"],
            PostDate: order
        },
        invisible: ["Stipend", "description", "cPN", "cEmail", "cName", "PI", "file", "urlToAddRes"]
    };

    //Global functions
    //Actual table maker
    main.makeTable = function(divID) {
        //These functions require jQuery and a div id to
        //be pointed to, all other functionality is built in
        return makeTable(divID);
    };

    //Local functions
    makeTable = function (divID) {
        //variables

        //variable declarations

        //check input
        if (typeof jQuery !== "object") {
            console.error('jQuery must be defined to continue.');
        } else {
            $ = jQuery;
            div = $('#' + divID);
            if (div.length < 1) {
                console.error('Could not find div that was indicated, make sure one exists with id=[divID].');
            } else {
                jQuery.get('https://3fb447c8ea45275c3e71dc49d678c53d6b103efb.googledrive.com/host/0BwdB5oEiQBYWZFk2ZkRNM1d3ZXc/research.json', startBuilding);
            }
        }
    };

    startBuilding = function (x) {
        //variable
        var object, table, i, row, cat;

        data = JSON.parse(x);
        table = $("<table>").appendTo(div);

        //make table header
        row = $("<tr>").appendTo(div);

        for (i = 0; i < options.visible.order.length; i += 1) {
            $("<td>", {text: options.visible.order[i]}).appendTo(row);
        }

    };

    return main;

}());