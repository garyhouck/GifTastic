// Create an array of tv show names
let topics = ["Silicon Valley","The Simpsons","The Office","The League","Freaks and Geeks","Stranger Things"];

// API URL information variable
// let show = $(this).attr("data-name");
// let url = "api.giphy.com/v1/gifs/search?api_key:=moRqXiQi1hZXI4dLnCQYWn4Qk7obtOIZ&q:" + show + "&limit:10&rating:gpg";

$(document).ready(function() {

// Create a loop to cycle through the topics array
for (var i = 0; i < topics.length; i++) {
    // Generate buttons for each movie
    let gif = $("<button>");
    gif.attr("data-name" , topics[i]);
    gif.attr("data-state")
    gif.text(topics[i]);
    gif.addClass("tvShow");
    $("#buttons").append(gif);
}

// Click function to grab images 
$("button").on("click", function() {
  var show = $(this).text();
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    show + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(show);

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        console.log(results);

        for (var i = 0; i < results.length; i++) {
          
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var personImage = $("<img>");
          personImage.attr("src", results[i].images.original_still.url,);
          personImage.attr("data-state", "still");
          personImage.prepend(p);
          $("#gifs").prepend(personImage);         
        }  
       
      });
    
  });

   // click event to animate gif

  $(personImage).on("click",function() {
   let state = $(this).find("img").attr("data-state");
   if (state == "still") {
     console.log("yay");
     $("#gifs").find("img").attr("src" , images.original.url,);
    
   }
  });
  

// End code here
});