document.addEventListener('DOMContentLoaded', function () {
  // Select both buttons by using querySelectorAll
  const goToFormButtons = document.querySelectorAll('.form-button');

  if (goToFormButtons) {
    // Loop through all the buttons and attach event listeners
    goToFormButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Redirect to the form.html page
        window.location.href = 'form.html';
      });
    });
  }

  const goBackButton = document.querySelector('.go-back-button');

  if (goBackButton) {
    // Attach an event listener to the button
    goBackButton.addEventListener('click', function () {
      // Go back in the browser's history
      window.history.back();
    });
  }

});