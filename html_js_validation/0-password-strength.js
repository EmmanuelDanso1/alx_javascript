document.addEventListener('click', ()=>{
    //getting the form ID
    const  passwordForm = document.getElementById("passwordForm");
    // clickable submit button and an event to prevent auto submission
    passwordForm.addEventListener('submit',(event)=>{
        event.preventDefault();

        // getting the document element
        const passwordInput = document.getElementById('password');
        const errorOutput = document.getElementById('error')

        // getting the password value by user
        const password = passwordInput.value;
        
        // initial initialization of characters
        let hasUpperCase = false;
        let hasLowerCase = false;
        let hasDigit = false;
        let hasSpecialCharacter = false;

        // default special character
        let hasASpecialCharacter = "!@#$%^&*";

        // looping through the password to check for requirement
        for(let i = 0; i < password.length; i++){
            let characterSet = password.charAt(i);

            if(characterSet >= "A" && characterSet <= "Z"){
                hasUpperCase = "true";
            }
            else if(characterSet >= "a" && characterSet <= "z"){
                hasLowerCase = "true";
            }
            else if(characterSet >= "0" && characterSet <= "9"){
                hasDigit = "true";
            }
            else if(hasASpecialCharacter.indexOf(characterSet) !== -1){
                hasSpecialCharacter = "true";
            }


        }
        // checking if passoword meets all criteria
        if(password.length >= 8
            && hasUpperCase && hasLowerCase 
            && hasDigit && hasSpecialCharacter
            )
        {
          errorOutput.textContent = "";
          passwordForm.submit();  
        }else{
            error.textContent = ("Password must be at least 8 characters long and contain at least one uppercase letter,one lowercase letter, one numeric digit, and one special character.");
        }


    })
})