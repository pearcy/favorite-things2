$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    let color = $("input#color").val();
    let band = $("input#band").val();
    let movie = $("input#movie").val();
    let flavor = $("input#flavor").val();
    let planet = $("input#planet").val();


    // console.log(color);
    // console.log(band);
    // console.log(movie);
    // console.log(flavor);
    // console.log(planet);

    let favorites =[color, band, movie, flavor, planet];
    let fav2 = [];

    favorites.forEach(function(fav) {
      // console.log(fav);
      // $("#output").append('<ul>'  + fav + '</ul>');
      fav2.push(fav);
     

    });

    // console.log(favorites);
      console.log(fav2);

    // $(".favorites").text(favorites);
    
    // $('#output').show();
    $("#output").append('<ul>'  + fav2 + '</ul>');


    // $(".color").text(color);
    // $(".band").text(band);
    // $(".movie").text(movie);
    // $(".flavor").text(flavor);
    // $(".planet").text(planet);


  });
});