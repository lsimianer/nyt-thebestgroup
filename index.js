// when search btn clicked > fx to trun that stores the following inputs into variables
// inputs needed = search term, number of records, start year, end year

$(document).ready(function () {
    console.log("ready!");
});

var api = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + apiKey "&q=" + input + "&begin_date";
// var TITLE = "the terminator";
var apiKey = "rZvfCJAmSYG6Xug69Ga2vYrYsjsHo18G";

var apiYearStart = $('#start-year' + '0101');

var apiYearEnd = $('#end-year' + '0101');

var recordNum = $('#record-num');

var input = $('#search-input');

$('#submit').on('click', articleSearch);

console.log($("#submit"))

function articleSearch() {
    event.preventDefault();

    var url = api + input.val() + apiKey;
    console.log(url);
    $.ajax({
        url: url,
        method: "GET"
    }).then(function (response) {

    });

