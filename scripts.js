document.addEventListener('DOMContentLoaded', function () {
  // Select both buttons by using querySelectorAll
  const goToFormButtons = document.querySelectorAll('.form-button');

  // Loop through all the buttons and attach event listeners
  goToFormButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Redirect to the form.html page
      window.location.href = 'form.html';
    });
  });
});