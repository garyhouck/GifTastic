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
  let show = $(this).text();
  let queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    show + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(show);

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        let results = response.data;
        console.log(results);

        for (var i = 0; i < results.length; i++) {
          
          let rating = results[i].rating;
          let p = $("<p>").text("Rating: " + rating);
          let stillGif = $("<img>");
          let animateGif = $("<img>");
          stillGif.attr("src", results[i].images.original_still.url,);
          stillGif.attr("data-state", "still");
          stillGif.addClass("tvShow");
          animateGif.attr("src", results[i].images.original.url,);
          animateGif.attr("data-state", "animate");
          animateGif.addClass("tvShow");
          stillGif.prepend(p);
          $("#gifs").prepend(stillGif); 

          $(".tvShow").on("click",function() {
            let clickGif = $(this);
            let state = clickGif.attr("data-state");
            if (state == "still") {
              console.log("yay");
              clickGif.attr("src", animateGif);
              clickGif.attr("data-state", "animate");
              
             
            }
           });  
                  
        }
        
       
       
      });
    
  });

   // click event to animate gif

  
  

// End code here
});