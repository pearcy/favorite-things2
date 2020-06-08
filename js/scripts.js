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

    favorites.forEach(function(fav) {
      // console.log(fav);
      $("#output").append('<ul>'  + fav + '</ul>');
    });

    // console.log(favorites);

    // $(".favorites").text(favorites);

    $('#output').show();


    // $(".color").text(color);
    // $(".band").text(band);
    // $(".movie").text(movie);
    // $(".flavor").text(flavor);
    // $(".planet").text(planet);


  });
});