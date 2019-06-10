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


function articleSearch() {
    event.preventDefault();

    var url = api + input.val() + apiKey;
    console.log(url);
    $.ajax({
        url: url,
        method: "GET"
    }).then(function(response) {
        // create new row
        var article = $("<article>");

        var title = $("<h3>").text(response.Title);
        var year = $("<h3>").text(response.Year);
        // 
        article.append(title, year, actors, ratings);
        
        $("search-results").append(article);
        console.log(response);
        console.log(response.Ratings[0].Value);

        // $('#m > tbody:last-child').append(tRow);

    });
}
