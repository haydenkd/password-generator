// Assignment code here
function generatePassword(){

  // Prompt user for the length of the password within the parameters
  while (true) {
    passLength = parseInt(window.prompt("Enter the length for your password between 8 and 128 characters:"));
    // If password meets parameters, break from the loop
    if (passLength >= 8 && passLength <= 128) {
      break;
    } else {
      window.alert("Password length does not meet criteria, please try again.");
    }
  }

  // Ask user what characters to include in password
  while (true) {
    var lower = window.confirm("Include lowercase letters?");
    var upper = window.confirm("Include uppercase letters?");
    var num = window.confirm("Include numeric characters?");
    var spec = window.confirm("Include special letters? (!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~)");

    // Check to see at least one type of character is selected
    // if not, re-loops.
    if (lower || upper || num || spec) {
      break;
    } else {
      window.alert("Please choose at least one type of character to include.");
    }
  }

  // Establish characters that can be put into the password
  var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
  var alphabetUpper = alphabetLower.toUpperCase();
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  
  // Generates the password of the required length
  // Loop runs until desired password length is reached
  passGen = "";
  while (passLength != passGen.length) {
    // Randomly chooses one of the categories of characters to be added as the next character of the string
    randomNum = Math.floor(Math.random() * 4) + 1;

    // Each 'if' statement checks to see if the user has allowed that type of character
    // If so, randomly choose one character from the specified category
    // Otherwise, continue the loop and try again
    if (randomNum === 1 && lower) {
      passGen += alphabetLower.charAt(Math.floor(Math.random() * 26 ));
    }
    
    if (randomNum === 2 && upper) {
      passGen += alphabetUpper.charAt(Math.floor(Math.random() * 26 ));
    }

    if (randomNum === 3 && num) {
      passGen += Math.floor(Math.random() * 10);
    }

    if (randomNum === 4 && spec) {
      passGen += specialChars.charAt(Math.floor(Math.random() * 32));
    }
  }
  
  // Return the generated password
  return passGen;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
