$(document).ready(function() {
    $("#testJap").click(function(e) {
        e.preventDefault();
        recommendations = [1,2167,5114,5680,9756,10162,10800,10087,17265,17549,23298,25385,30276,31376,32281,32902,849,1189,2251,1575,2966,4224,6547,6802,9253,9289,11061,16918,21185,23273,24765,24833,25013,28223,28297,28735,31043,32182,34280,34599,34745,35557,35839,7674,13601,20031,20507,21405,22789,28621,28999,30014,31964,32615,33489,34561,35062,13333,19365,27775,30015,9941,12189,35079,10357,16498,23251,28851,167,15809,20583,32093,31798,11843,457,33352,7647,2025,32607,19703]
        
        
        idx = Math.floor(Math.random() * recommendations.length);  
        var myurl="https://api.jikan.me/anime/" + recommendations[idx];
        
        $.ajax({
            url : myurl,
            dataType : "json",
            success : function(json) {
                console.log(json);
                var results = "<table>";
                results += '<th colspan = "2">' + json.title; + '</th>';
                results += '<tr><td colspan = "2" style="text-align: center;">' + json.episodes + ' episodes, ' + json.duration + '</td></tr>';
                results += '<tr><td><img src =' + json.image_url + '></td>';
                results += '<td style="padding:10px">' + json.synopsis + '</td></td></table>';
                $("#rec").html(results);
            }
        }); 

    });
});