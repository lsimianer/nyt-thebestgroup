// when search btn clicked > fx to trun that stores the following inputs into variables
// inputs needed = search term, number of records, start year, end year

 $( document ).ready(function() {
    console.log( "ready!" );
});

var api = "https://www.omdbapi.com/?t=";
// var TITLE = "the terminator";
var apiKey = "&apikey=a5c61811";

var apiYearStart = $('#mtitle');

var apiYearEnd = $('#mtitle');

var recordNum = $('#mtitle');

var input = $('#mtitle');

$('#submit').on('click',articleSearch);

console.log($("#submit"))


function movieSearch() {
    event.preventDefault();

var url = api + input.val() + apiKey;
console.log(url);
$.ajax({
    url: url,
    method: "GET"
}).then(function(response) {
    // create new row
    var tRow = $("<tr>");

    var titleTd = $("<td>").text(response.Title);
    var yearTd = $("<td>").text(response.Year);
    var actorsTd = $("<td>").text(response.Actors);
    var ratingsTd = $("<td>").text(response.Ratings[0].Value);

    tRow.append(titleTd, yearTd, actorsTd, ratingsTd);
    
    $("tbody").append(tRow);
    console.log(response);
    console.log(response.Ratings[0].Value);

    // $('#m > tbody:last-child').append(tRow);

});

