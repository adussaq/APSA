/*global console, $, jQuery */
var table = (function () {
    'use strict';
    console.log("v0.0.2");
    //variables
    var getList, dict, options, main, makeTable, makeTableBody, $, div, data, startBuilding, wordSearch, order;

    //variable declaration
    wordSearch = function () {};
    order = function () {};
    main = {};
    options = {
        visible: {
            order: [["Audience", "15%"], ["RType", "15%"], ["Summary", "30%"], ["Department", "15%"], ["Site", "15%"], ["PostDate", "10%"]],
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
        dict = data.dict;
        data = data.data;
        table = $("<table>", {"class": "CSSTableGenerator", style: "width:100%"}).appendTo(div);

        //set css
        $("<style type='text/css'>.CSSTableGenerator{margin:0;padding:0;width:100%;box-shadow:10px 10px 5px #888;border:1px solid #1e6b52;-moz-border-radius-bottomleft:0;-webkit-border-radius:0;border-radius:0;-moz-border-radius-bottomright:0;-moz-border-radius-topright:0;-moz-border-radius-topleft:0}.CSSTableGenerator table{border-collapse:collapse;border-spacing:0;width:100%;height:100%;margin:0;padding:0}.CSSTableGenerator tr:last-child td:last-child{-moz-border-radius-bottomright:0;-webkit-border-bottom-right-radius:0;border-bottom-right-radius:0}.CSSTableGenerator table tr:first-child td:first-child{-moz-border-radius-topleft:0;-webkit-border-top-left-radius:0;border-top-left-radius:0}.CSSTableGenerator table tr:first-child td:last-child{-moz-border-radius-topright:0;-webkit-border-top-right-radius:0;border-top-right-radius:0}.CSSTableGenerator tr:last-child td:first-child{-moz-border-radius-bottomleft:0;-webkit-border-bottom-left-radius:0;border-bottom-left-radius:0}.CSSTableGenerator tr:nth-child(odd){background-color:#d4ffaa}.CSSTableGenerator tr:nth-child(even){background-color:#fff}.CSSTableGenerator td{vertical-align:middle;border:1px solid #1e6b52;border-width:0 1px 1px 0;text-align:left;padding:5px;font-size:10px;font-family:Arial;font-weight:400;color:#000}.CSSTableGenerator tr:last-child td{border-width:0 1px 0 0}.CSSTableGenerator tr td:last-child{border-width:0 0 1px}.CSSTableGenerator tr:last-child td:last-child{border-width:0}.CSSTableGenerator tr:first-child td{background:#1e6b52 -webkit-gradient(linear,left top,left bottom,color-stop(0.05,#1e6b52),color-stop(1,#a3d55d));background:#1e6b52 -moz-linear-gradient(center top,#1e6b52 5%,#a3d55d 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#1e6b52', endColorstr='#a3d55d');background:#1e6b52 -o-linear-gradient(top,#1e6b52,a3d55d);border:0 solid #1e6b52;text-align:center;border-width:0 0 1px 1px;font-size:14px;font-family:Arial;font-weight:700;color:#fff}.CSSTableGenerator tr:first-child:hover td{background:#1e6b52 -webkit-gradient(linear,left top,left bottom,color-stop(0.05,#1e6b52),color-stop(1,#a3d55d));background:#1e6b52 -moz-linear-gradient(center top,#1e6b52 5%,#a3d55d 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#1e6b52', endColorstr='#a3d55d');background:#1e6b52 -o-linear-gradient(top,#1e6b52,a3d55d)}.CSSTableGenerator tr:first-child td:first-child{border-width:0 0 1px}.CSSTableGenerator tr:first-child td:last-child{border-width:0 0 1px 1px}</style>").appendTo(div);

        //make table header
        row = $("<tr>", {style: "width:100%;padding:5px"}).appendTo(table);

        for (i = 0; i < length; i += 1) {
            $("<td>", {style: "padding:5px;width:" + options.visible.order[i][1], text: options.visible.order[i][0]}).appendTo(row);
        }
        makeTableBody(table);
    };


    makeTableBody = function (table) {
        var tableRows = [], i, j, cat;
        for (i = 0; i < 10; i += 1) {
            tableRows[i] = {};
            tableRows[i].row = $('<tr>', {style: "padding:5px;width:100%"}).appendTo(table);
            for (j = 0; j < options.visible.order.length; j += 1) {
                cat = options.visible.order[j][0];
                tableRows[i][cat] = $("<td>", {style: "width:" + options.visible.order[j][1], text: getList(data[i][cat])}).appendTo(tableRows[i].row);
            }
        }
        console.log(tableRows);
    };

    getList = function (arr) {
        var ret = "";
        if (typeof arr === 'string' || !arr) {
            ret = arr;
        } else {
            arr.map(function (x) {ret = ret ? ret + ", " + x : x; });
        }
        return ret;
    };

    return main;

}());