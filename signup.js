document.querySelector(".custom-button").addEventListener("click", function () {
  var form = document.getElementById("jwForm");

  if (form.checkValidity()) {
    // Form is valid, submit it
    form.submit();
  } else {
    // Form is invalid, trigger HTML5 validation messages
    form.reportValidity();
  }
});
