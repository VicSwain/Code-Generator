// Assignment code here
function generatePassword() {
    var length = prompt("Enter the number of characters preferred(between 8 and 128:)");
  // ensuring the right password length is wored
    while(length<8 || length>128) {
      alert("You number does not meet the requirements");
      length = prompt("Enter the number of characters preferred(between 8 and 128:)");
    }
    // declare variables for user input
   var lowerCase = confirm("Do you want to use lowercase letters?");
   var upperCase = confirm("Do you want to use uppercase letters?");
   var numeral = confirm("Do you want to use numbers?");
   var specialCharc = confirm("Do you want to use special characters?");
  //  ensure that at least one of the character types has been selected
  while(!(lowerCase || upperCase || numeral || specialCharc)) {
    prompt("Please select at least one character type");
    var lowerCase = confirm("Do you want to use lowercase letters?");
    var upperCase = confirm("Do you want to use uppercase letters?");
    var numeral = confirm("Do you want to use numbers?");
    var specialCharc = confirm("Do you want to use special characters?");
  }
  
  var securePassword = generateSecurePassword(length, lowerCase, upperCase, numeral, specialCharc);
  
   
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
  