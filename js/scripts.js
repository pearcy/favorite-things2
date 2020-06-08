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

    console.log(favorites);

    $(".favorites").text(favorites);


    // $(".color").text(color);
    // $(".band").text(band);
    // $(".movie").text(movie);
    // $(".flavor").text(flavor);
    // $(".planet").text(planet);

   


    $('#output').show();




  });
});