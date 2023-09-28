
document.addEventListener("click", function () {
    // Get the form element and error/success message elements
    var submitForm = document.getElementById("submitForm");
    var errorMessage = document.getElementById("errorMessage");
    var successMessage = document.getElementById("successMessage");

    // Add an event listener to the form for form submission
    submitForm.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Retrieve the values entered in the form fields
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();

        // Use JavaScript validation to ensure that all required fields are filled
        if (name === "" || email === "") {
            errorMessage.textContent = "Please fill in all required fields.";
            successMessage.textContent = ""; // Clear success message
        } else {
            // Clear any existing error message
            errorMessage.textContent = "";

            // Display a success message
            successMessage.textContent = "Form submitted successfully!";

            // Reset the form
            submitForm.reset();
        }
    });
});
