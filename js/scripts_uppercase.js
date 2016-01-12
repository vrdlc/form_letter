$(document).ready(function() {

  $("#blanks form").submit(function(event) {
  var somethingInput = $("input#something").val();

  $(".something").text(somethingInput);

  event.preventDefault();
  });

});
