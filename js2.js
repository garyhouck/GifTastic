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
    gif.addClass("TVShow");
    $("#buttons").append(gif);
};
// create button from user input
$("#find-show").on("click", function() {
  let tv = $("#tv-input").val();
  let newButton = $("<button>");
  newButton.text(tv);
  newButton.addClass("TVShow");
  $("#buttons").prepend(newButton);
  
});

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
          animateGif.addClass("tvShowAnimate");          
          stillGif.append(p);
          $("#gifs").prepend(stillGif);
          $("#gifs").prepend(animateGif);
          
                   
          console.log(animateGif.attr("src"));
          console.log(stillGif.attr("src"));     
        
        // end of loop         
        }
        //
       
       //end of ajax request
      });
      //
   //end of  function
  });
//
   // click event to animate gif
  // change state of gif
  $(".tvShow").on("click",function() {
    let clickGif = $(this); 
    console.log("this is " + (this));           
    let state = clickGif.attr("data-state");
    if (state === "still") {
      console.log("yay");
      clickGif.attr("src", animateGif);
      clickGif.attr("data-state", "animate");                        
      console.log(animateGif.attr("src"));
   }
    else if (state === "animate") {
     clickGif.attr("src", stillGif);
     clickGif.attr("data-state", "still");
     console.log(state);
   }
   });  
  
  

// End code here
});