$(document).ready(function() {

$("#searchButton").click(function(e){
  var value = $("#searchFood").val();
  e.preventDefault();
  var myurl= "../word?w=";
  myurl += value;
  console.log(myurl);
  $.ajax({
    url : myurl,
    dataType : "json",
    success : function(parsed_json) {
      console.log(parsed_json);
     everything = "<ul>";
    $.each(parsed_json, function(i,item) {
    //everything += "<li>"+parsed_json[i]['defenition']+"</li>";
    //   everything +="</li>";
    // });
    // everything +="</ul>";
    // $("#searchResults").html(everything);
    //   // var location = parsed_json['location']['city'];
    //   // var temp_string = parsed_json['current_observation']['temperature_string'];
    //   // var current_weather = parsed_json['current_observation']['weather'];
    //   // everything = "<ul>";
    //   // everything += "<li>Location: "+location;
    //   // everything += "<li>Temperature: "+temp_string;
    //   // everything += "<li>Weather: "+current_weather;
    //   // everything += "</ul>";
    //   // $("#weather").html(everything);
  });
    everything += "</ul>";
    $("#searchResults").html(everything);
  }  
});
});
});