var appId = '01667dfc025df274558f94f00ab27ca7'
var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&q=Saratoga Springs&appid=' + appId;

$(document).ready(function () {
    console.log("ready!");

    $('#city-name').text('this is city name');
    $('#current-temp').text('this is current temp');

    console.log('1) this is first');

    var storeData = 'Nothing';

    $('.show-me-weather').click(function () {
        $.getJSON(weatherApiUrl, function (cityTempData) {
            // cityTempData is the json object
            console.log('2) output the api data here', cityTempData);
            $('#city-name').text(cityTempData.name);
            console.log('show me main object', cityTempData.main);
            $('#current-temp').text(cityTempData.main.temp);
        });
    });

    console.log('3) this should load last');
});