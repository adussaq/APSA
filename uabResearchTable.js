/*global console, $, jQuery */
var table = (function () {
    'use strict';
    console.log("v0.2.1");
    //variables
    var searchStr, filterMaker, tableRows, updateData, pageText, rightClick, leftClick, cPage, maxPage, getList, dict, options, main, makeTable, makeTableBody, $, div, data, dataArr, startBuilding, wordSearch, order, perPage;

    //variable declaration
    wordSearch = function (evt) {
        var main, search, i, j, searchArr, regex, found = [], keep = {}, removed = [];
        main = function (evt) {
            search = evt.target.value;
            searchArr = search.split(/\s/);
            for (i = 0; i < searchArr.length; i += 1) {
                regex = new RegExp('\s*\S*' + searchArr[i] + '\S*\s*', 'ig');
                found = found.concat(searchStr.match(regex));
            }
            for (i = 0; i < found.length; i += 1) {
                for (j = 0; j < dict[found[i]].length; j += 1) {
                    keep[dict[found[i][j]]] = 1;
                }
            }
            for (i = 0; i < dataArr.length; i += 1) {
                if (!keep.hasOwnProperty(dataArr[i].uuid)) {
                    removed.push(dataArr.splice(i, 1)[0]);
                    i -= 1;
                }
            }
            if (removed.length > 0) {
                wordSearch = function (evt) {
                    var k;
                    for (k = 0; k < removed.length; k += 1) {
                        dataArr.push(removed[k]);
                    }
                    removed = [];
                    main(evt);
                };
            } else {
                wordSearch = main;
            }
            updateData();
        };
        main(evt);
    };
    order = function () {
        console.log('other');
    };
    main = {};
    perPage = 5;
    options = {
        visible: {
            order: [["Audience", "22%", "Audience"], ["RType", "10%", "Research Type"], ["Summary", "43%", "Research Summary"], ["Department", "9%", "Department"], ["Site", "10%", "Research Site"], ["date", "7%", "Date Posted/Edited"]],
            Audience: ["Undergraduate Student - Summer", "Undergraduate Student - Academic Year", "Medical Student - Summer", "Medical Student - Scholarly Activity", "Graduate or MD/PhD Student", "Resident"],
            RType: ["Basic science", "Translational science", "Clinical Research", "Behavioral Research", "Chart Review", "Community-based", "Education", "Public Health/Epidemiology", "Health Outcomes", "Other"],
            Summary: wordSearch,
            Department: ["Anesthesiology", "Biochemistry & Molecular Genetics", "Cell, Developmental, & Integrative Biology", "Dermatology", "Emergency Medicine", "Family & Community Medicine", "Genetics", "Medical Education", "Medicine", "Microbiology", "Neurobiology", "Neurology", "Neurosurgery", "Obstetrics & Gynecology", "Ophthalmology", "Pathology", "Pediatrics", "Pharmacology & Toxicology", "Physical Medicine & Rehabilitation", "Psychiatric & Behavioral Neurobiology", "Radiation Oncology", "Radiology", "Surgery", "Urology", "Other"],
            Site: ["Birmingham Campus", "Huntsville Campus", "Tuscaloosa Campus", "Montgomery Campus", "Children’s of Alabama", "Birmingham VA Medical Center", "Southern Research Institute", "Hudson Alpha", "Other"],
            date: order
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
        var table, i, row1, row2, length;

        //set css
        $('<style type="text/css">.uabR-table{margin:0;padding:0;width:100%;border:1px solid #1e6b52;-moz-border-radius-bottomleft:0;-webkit-border-radius:0;border-radius:0;-moz-border-radius-bottomright:0;-moz-border-radius-topright:0;-moz-border-radius-topleft:0}.uabR-table table{border-collapse:collapse;border-spacing:0;width:100%;height:100%;margin:0;padding:0}.uabR-table tr:last-child td:last-child{-moz-border-radius-bottomright:0;-webkit-border-bottom-right-radius:0;border-bottom-right-radius:0}.uabR-table table tr:first-child td:first-child{-moz-border-radius-topleft:0;-webkit-border-top-left-radius:0;border-top-left-radius:0}.uabR-table table tr:first-child td:last-child{-moz-border-radius-topright:0;-webkit-border-top-right-radius:0;border-top-right-radius:0}.uabR-table tr:last-child td:first-child{-moz-border-radius-bottomleft:0;-webkit-border-bottom-left-radius:0;border-bottom-left-radius:0}.uabR-table tr:nth-child(odd){background-color:#a4d363}.uabR-table tr:nth-child(even){background-color:#fff}.uabR-table td{vertical-align:middle;border:1px solid #1e6b52;border-width:0 1px 1px 0;text-align:left;padding:5px;font-size:14px;font-family:Times New Roman;font-weight:400;color:#000}.uabR-table tr:last-child td{border-width:0 1px 0 0}.uabR-table tr td:last-child{border-width:0 0 1px}.uabR-table tr:last-child td:last-child{border-width:0}.uabR-table tr:first-child td{background:#1e6b52 -webkit-gradient(linear,left top,left bottom,color-stop(0.05,#1e6b52),color-stop(1,#a3d55d));background:#1e6b52 -moz-linear-gradient(center top,#1e6b52 5%,#a3d55d 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#1e6b52", endColorstr="#a3d55d");background:#1e6b52 -o-linear-gradient(top,#1e6b52,a3d55d);border:0 solid #1e6b52;text-align:center;border-width:0 0 1px 1px;font-size:18px;font-family:Times New Roman;font-weight:700;color:#fff}.uabR-table tr:first-child:hover td{background:#1e6b52 -webkit-gradient(linear,left top,left bottom,color-stop(0.05,#1e6b52),color-stop(1,#a3d55d));background:#1e6b52 -moz-linear-gradient(center top,#1e6b52 5%,#a3d55d 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#1e6b52", endColorstr="#a3d55d");background:#1e6b52 -o-linear-gradient(top,#1e6b52,a3d55d)}.uabR-table tr:first-child td:first-child{border-width:0 0 1px}.uabR-table tr:first-child td:last-child{border-width:0 0 1px 1px}</style>').appendTo(div);
        $("<style type='text/css'> .tableButton{-moz-box-shadow:inset 0 1px 0 0 #fff;-webkit-box-shadow:inset 0 1px 0 0 #fff;box-shadow:inset 0 1px 0 0 #fff;background:#ededed -webkit-gradient(linear,left top,left bottom,color-stop(0.05,#ededed),color-stop(1,#dfdfdf));background:#ededed -moz-linear-gradient(center top,#ededed 5%,#dfdfdf 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#dfdfdf');-webkit-border-radius:6px;-moz-border-radius-topleft:6px;border-radius:6px;-moz-border-radius-topright:6px;-moz-border-radius-bottomright:6px;-moz-border-radius-bottomleft:6px;text-indent:0;border:1px solid #dcdcdc;display:inline-block;color:#777;font-family:arial;font-size:15px;font-weight:700;font-style:normal;text-decoration:none;text-align:center;text-shadow:1px 1px 0 #fff}.tableButton:hover{background:#dfdfdf -webkit-gradient(linear,left top,left bottom,color-stop(0.05,#dfdfdf),color-stop(1,#ededed));background:#dfdfdf -moz-linear-gradient(center top,#dfdfdf 5%,#ededed 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#dfdfdf', endColorstr='#ededed')}.tableButton:active{position:relative;top:1px}</style>").appendTo(div);


        length = options.visible.order.length;
        data = JSON.parse(x);
        dict = data.dict;
        dataArr = data.data;
        searchStr = data.str;
        table = $("<table>", {"class": "uabR-table", style: "width:100%"}).appendTo(div);

        //make table header
        row1 = $("<tr>", {style: "width:100%;padding:5px"}).appendTo(table);
        row2 = $("<tr>", {style: "width:100%;padding:5px"}).appendTo(table);
        for (i = 0; i < length; i += 1) {
            $("<td>", {style: "padding:5px;width:" + options.visible.order[i][1], text: options.visible.order[i][2]}).appendTo(row1);
            $("<td>", {style: "padding:5px;width:" + options.visible.order[i][1]}).append(filterMaker(options.visible.order[i][0])).appendTo(row2);
        }
        makeTableBody(table);
    };

    filterMaker = function (cat) {
        var ret, i, changeFunc, mainFunc;

        mainFunc = function (evt) {
            var j, that, removed = [];
            that = evt.target;
            evt.preventDefault();
            if (that.value) {
                for (j = 0; j < dataArr.length; j += 1) {
                    if (!dataArr[j][cat].join(',').match(that.value)) {
                        removed.push(dataArr.splice(j, 1)[0]);
                        j -= 1;
                    }
                }
            }
            if (removed.length > 0) {
                changeFunc = function (evt) {
                    var k;
                    for (k = 0; k < removed.length; k += 1) {
                        dataArr.push(removed[k]);
                    }
                    removed = [];
                    mainFunc(evt);
                };
                ret.change(changeFunc);
            }
            updateData();
        };
        changeFunc = mainFunc;

        if (typeof options.visible[cat] !== 'function') {
            ret = $("<select>", {style: "width:100%"}).append($('<option>', {style: "width:100%;", value: "", text: 'filter'})).change(changeFunc);
            for (i = 0; i < options.visible[cat].length; i += 1) {
                $('<option>', {value: options.visible[cat][i], text: options.visible[cat][i]}).appendTo(ret);
            }
        } else {
            ret = $('<input>').keyup(function (evt) {
                evt.preventDefault();
                options.visible[cat](evt);
            });
        }
        return ret;
    };


    makeTableBody = function (table) {
        var i, j, cat, pager;
        tableRows = [];
        for (i = 0; i < perPage; i += 1) {
            tableRows[i] = {};
            tableRows[i].row = $('<tr>', {style: "padding:5px;width:100%"}).hide().appendTo(table);
            for (j = 0; j < options.visible.order.length; j += 1) {
                cat = options.visible.order[j][0];
                tableRows[i][cat] = $("<td>", {style: "width:" + options.visible.order[j][1]}).appendTo(tableRows[i].row);
            }
        }
        pager = $('<td>', {colspan: 6, style: "text-align: center;padding:5px;width:100%"}).appendTo($('<tr>', {style: "padding:5px;width:100%"}).appendTo(table));
        cPage = 1;
        maxPage = Math.ceil(dataArr.length / perPage);
        pageText = $('<span>', {text: 'Page ' + cPage + ' of ' + maxPage, style: "padding:15px"});
        $('<button>', {style: '-moz-transform: rotate(-180deg);-webkit-transform: rotate(-180deg);transform: rotate(-180deg);filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2)',
                        "class": "tableButton", html: '&#10140;'}).appendTo(pager).click(leftClick);
        pageText.appendTo(pager);
        $('<button>', {"class": "tableButton", html: '&#10140;'}).appendTo(pager).click(rightClick);
        updateData();
        console.log(tableRows);
    };

    getList = function (obj, cat) {
        var ret = "", arr = obj[cat];
        if (typeof arr === 'string' || !arr) {
            ret = arr;
        } else {
            arr.map(function (x) {
                if (x.match(/other/i)) {
                    ret = ret ? ret + ", " + 'Other - ' + obj['Other-' + cat] : 'Other - ' + obj['Other-' + cat];
                } else {
                    ret = ret ? ret + ", " + x : x;
                }
            });
        }
        return ret;
    };

    leftClick = function (evt) {
        evt.preventDefault();
        if (cPage > 1) {
            cPage -= 1;
            updateData();
        }
    };

    rightClick = function (evt) {
        evt.preventDefault();
        if (cPage < maxPage) {
            cPage += 1;
            updateData();
        }
    };

    updateData = function () {
        var i, j, add, cat;
        maxPage = Math.ceil(dataArr.length / perPage);
        if (cPage > maxPage) {
            cPage = maxPage;
        }
        if (maxPage === 0) {
            cPage = 1;
            pageText.text('Page ' + cPage + ' of ' + 1);
        } else {
            pageText.text('Page ' + cPage + ' of ' + maxPage);
        }

        dataArr = data.data.sort(function (a, b) {
            var ret = 1;
            if (new Date(a.date) > new Date(b.date)) {
                ret = -1;
            }
            return ret;
        });

        add = (cPage - 1) * perPage;
        for (i = 0; i < perPage; i += 1) {
            if (i + add < dataArr.length) {
                tableRows[i].row.show();
                for (j = 0; j < options.visible.order.length; j += 1) {
                    cat = options.visible.order[j][0];
                    tableRows[i][cat].text(getList(dataArr[i + add], cat));
                }
            } else {
                tableRows[i].row.hide();
            }
        }
    };

    return main;

}());