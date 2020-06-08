$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const color = $("input#color").val();
    const band = $("input#band").val();
    const movie = $("input#movie").val();
    const flavor = $("input#flavor").val();
    const planet = $("input#planet").val();

    console.log(color);
    console.log(band);
    console.log(movie);
    console.log(flavor);
    console.log(planet);


    $('#output').show();




  });
});