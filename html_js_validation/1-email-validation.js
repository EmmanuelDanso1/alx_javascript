
document.addEventListener("click", function () {
    // Getting the form element by its ID
    const emailForm = document.getElementById("emailForm");

    // Add a submit event listener to the form
    emailForm.addEventListener("submit", function (event) {
        // Getting the email input element and error message element
        const emailInput = document.getElementById("email");
        const errorElement = document.getElementById("error");

        // Getting the value of the email input
        const email = emailInput.value;

        // Calling the validateEmail function to check the email format
        if (validateEmail(email)) {
            // Email format is valid, clear the error message
            errorElement.textContent = "";
        } else {
            // Email format is invalid, display an error message
            errorElement.textContent = "Please enter a valid email address.";
            // Prevent the default form submission behavior
            event.preventDefault();
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        // Ensure email is treated as a string
        email = String(email); 
        // Checking if the email contains the "@" symbol
        if (email.includes('@')) {
            // Splitting the email into local part and domain part
            const checkEmail = email.split('@');

            if (checkEmail.length === 2) {
                const localPart = checkEmail[0];
                const domainPart = checkEmail[1];

                // Checking if the local part contains at least one character
                if (localPart.length > 0) {
                    // Checking if the domain part contains at least one period (.)
                    if (domainPart.includes('.')) {
                        return true;
                    }
                }
            }
        }
        
        return false;
    }
});
