$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    let color = $("input#color").val();
    let band = $("input#band").val();
    let movie = $("input#movie").val();
    let flavor = $("input#flavor").val();
    let planet = $("input#planet").val();

    // I am missing the value in the html form so there is no console.log output

    console.log(color);
    console.log(band);
    console.log(movie);
    console.log(flavor);
    console.log(planet);


    $(".color").text(color);
    $(".band").text(band);
    $(".movie").text(movie);
    $(".flavor").text(flavor);
    $(".planet").text(planet);

   


    $('#output').show();




  });
});