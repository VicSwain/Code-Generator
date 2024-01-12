// Assignment code here
function generatePassword() {
    var length = prompt("Enter the number of characters preferred(between 8 and 128:)");
  // ensuring the right password length is wored
    while(length<8 || length>128 || isNaN(length)) {
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
  // Formulate secure password based on user input
    var securePassword = generateSecurePassword(length, lowerCase, upperCase, numeral, specialCharc); 

     alert("Your secure password is: " += securePassword);
 
   function generateSecurePassword(length, lowerCase, upperCase, numeral, specialCharc) { 
   var charSet = ''
   var lowerCharSet = "abcdefghijklmnopqrstuvwxyz";
   var upperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var numeralCharset = "0123456789";
   var specialCharset = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?";

  //  if to build characters based on selected options
   if (lowerCase) {
    charSet += lowerCharSet;
   }
   if (upperCase) {
    charSet += upperCharset;
   }
   if (numeral) {
    charSet += numeralCharset;
   }
   if (specialCharc) {
    charSet += specialCharset;
   }

   var password = '';

   for (var i = 0; i < length; i++) {
    var randomSelect = Math.floor(Math.random() * charSet.length);
    password += charSet[randomSelect];
   }
   return password;
  }
}
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
// }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
