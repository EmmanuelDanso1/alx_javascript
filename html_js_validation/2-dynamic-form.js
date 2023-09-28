
document.addEventListener("click", function () {
    // Get the form element and input container
    var dynamicForm = document.getElementById("dynamicForm");
    var inputContainer = document.getElementById("inputContainer");

    // Add an event listener to the form for when the number of fields is selected
    dynamicForm.addEventListener("change", function () {
        // Call generateInputFields with the selected value from the dropdown
        var numFields = parseInt(dynamicForm.numFields.value, 10);
        generateInputFields(numFields);
    });

    // Add an event listener to the form for form submission
    dynamicForm.addEventListener("submit", function (event) {
        // Call validateForm to validate the form before submission
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    // Function to generate the specified number of text input fields dynamically
    function generateInputFields(numFields) {
        // Clear any existing input fields
        inputContainer.innerHTML = "";

        for (var i = 1; i <= numFields; i++) {
            // Create a new text input field
            var inputField = document.createElement("input");
            inputField.type = "text";
            inputField.name = "field" + i;
            inputField.placeholder = "Field " + i;

            // Append the input field to the input container
            inputContainer.appendChild(inputField);
        }
    }

    // Function to validate the form before submission
    function validateForm() {
        var inputFields = inputContainer.querySelectorAll("input");

        for (var i = 0; i < inputFields.length; i++) {
            var fieldValue = inputFields[i].value.trim();
            if (fieldValue === "") {
                alert("Please fill in all fields.");
                return false; // Prevent form submission if any field is empty
            }
        }

        return true; // Form is valid, allow submission
    }

    // Initially generate input fields based on the default selected value
    generateInputFields(parseInt(dynamicForm.numFields.value, 10));
});
