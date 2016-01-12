$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var fullNameInput = $("input#fullName").val();
    var streetAddressInput = $("input#streetAddress").val();
    var cityStateZipInput= $("input#cityStateZip").val();
    var emailInput = $("input#email").val();

    $(".fullName").text(person1Input);
    $(".streetAddress").text(person2Input);
    $(".cityStateZip").text(animalInput);
    $(".email").text(exclamationInput);

    $("#receipt").show();

    event.preventDefault();
  });

  $('#submitBtn').click(function() {
       /* when the button in the form, display the entered values in the modal */
       $('#name').html($('#fullName').val());
       $('#address').html($('#streetAddress').val());
       $('#cityState').html($('#cityStateZip').val());


  });

  $('#submit').click(function(){
       /* when the submit button in the modal is clicked, submit the form */
      alert('submitting');
      $('#formfield').submit();
  });
});
