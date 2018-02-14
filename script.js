$(document).ready(function() {

   // var Anchors = document.getElementsByTagName("jap");
    
//	Anchors[i].addEventListener("mouseover")


    $("#japtest").mouseover(function(e) {
	e.preventDefault();
	console.log("got here")
	var value = "ようこそ";
	var myurl = "https://glosbe.com/gapi/from=jap&dest=eng&format=json&phrase="+ value + "&pretty=true"
	$.ajax({
	    url: myurl,
	    dataType : "json" ,
	    success : function(json) {
		console.log(json);
	    }
	});
    });


/*	var myurl= "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=7d5fb4bb368d2b54bfed69befcae4541";
	$.ajax({
	    url : myurl,
	    dataType : "json",
	    success : function(json) {
		console.log(json);
	    }
	});

		var results = "";
		results += '<h2>Weather in ' + json.name + "</h2>";
		for (var i=0; i<json.weather.length; i++) {
		    results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
		}
		results += '<h2>' + json.main.temp + " &deg;F</h2>"
		results += "<p>"
		for (var i=0; i<json.weather.length; i++) {
		    results += json.weather[i].description
		    if (i !== json.weather.length - 1)
			results += ", "
		}
		results += "</p>";
    $("#weatherResults").html(results);*/

    });
