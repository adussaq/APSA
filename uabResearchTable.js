/*global console, $, jQuery */
var table = (function () {
    'use strict';
    //variables
    var options, main, makeTable, makeTableBody, $, div, data, startBuilding, wordSearch, order;

    //variable declaration
    wordSearch = function () {};
    order = function () {};
    main = {};
    options = {
        visible: {
            order: [["Audience", "15%"], ["RType", "15%"], ["ProjectSummary", "30%"], ["Department", "15%"], ["Site", "15%"], ["PostDate", "10%"]],
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
        if (typeof jQuery !== "function") {
            console.error('jQuery must be defined to continue.');
        } else {
            $ = jQuery;
            div = $('#' + divID);
            div.text("");
            if (div.length < 1) {
                console.error('Could not find div that was indicated, make sure one exists with id=[divID].');
            } else {
                jQuery.get('https://3fb447c8ea45275c3e71dc49d678c53d6b103efb.googledrive.com/host/0BwdB5oEiQBYWZFk2ZkRNM1d3ZXc/research.json', startBuilding);
            }
        }
    };

    startBuilding = function (x) {
        //variable
        var table, i, row, length;

        length = options.visible.order.length;
        data = JSON.parse(x);
        table = $("<table>", {style: "width:100%"}).appendTo(div);

        //make table header
        row = $("<tr>", {style: "width:100%"}).appendTo(table);

        for (i = 0; i < length; i += 1) {
            $("<td>", {style: "width:" + options.visible.order[i][1], text: options.visible.order[i][0]}).appendTo(row);
        }
        makeTableBody(table);
    };


    makeTableBody = function (table) {
        var dataArr, tableRows = [], i, j;
        for (i = 0; i < 10; i += 1) {
            tableRows[i].row = $('<tr>', {style: "width:100%"}).appendTo(table);
            for (j = 0; j < options.visible.order.length; j += 1) {
                tableRows[i][options.visible.order[i][0]] = $("<td>", {style: "width:" + options.visible.order[i][1], text: i + " / " + j}).appendTo(tableRows[i].row);
            }
        }
        console.log(tableRows);
    };

    return main;

}());