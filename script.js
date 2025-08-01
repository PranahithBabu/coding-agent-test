python
'use strict';

//  Function to validate the form
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  if (name === "" || email === "" || mobile === "") {
    alert("Please fill all the fields!");
    return false;
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
    return false;
  }

  // Basic mobile validation (You may want to adjust this based on your requirements)
  if (mobile.length != 10) {
    alert("Please enter a 10-digit mobile number!");
    return false;
  }

  // Form is valid, proceed with submission
  alert("Form submitted successfully!");
  // You'll typically send the data to a server here
  return true;
}

// Attach the validation function to the form submit event
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission
  if (validateForm()) {
    // Additional actions, like sending data to a server
  }
});'
