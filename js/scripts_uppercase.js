$(document).ready(function() {

  $("#blanks form").submit(function(event) {
  var somethingInput = $("input#something").val();

  $(".something").text(somethingInput.toUpperCase());
  // $("p").toLocalUpperCase(somethingInput);

  //somethingInput.toUpperCase();
  event.preventDefault();
  });

});
