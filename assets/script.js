// Assignment code here
function generatePassword() {
  var length = prompt("Enter the number of characters preferred(between 8 and 128:)");
// ensuring the right password length
  while(length<8 || length>128 || isNaN(length)) {
    alert("You number does not meet the requirements");
    length = prompt("Enter the number of characters preferred(between 8 and 128:)");
  }
  // declare variables for user input
 var lowerCase = confirm("Do you want to use lowercase letters? Cancel is No.");
 var upperCase = confirm("Do you want to use uppercase letters? Cancel is No.");
 var numeral = confirm("Do you want to use numbers? Cancel is No");
 var specialCharc = confirm("Do you want to use special characters? Cancel is No.");
//  ensure that at least one of the character types has been selected
while(!(lowerCase || upperCase || numeral || specialCharc)) {
  alert("Please select at least one character type");
   lowerCase = confirm("Do you want to use lowercase letters?");
   upperCase = confirm("Do you want to use uppercase letters?");
   numeral = confirm("Do you want to use numbers?");
   specialCharc = confirm("Do you want to use special characters?");
  }

// let box = ''

// // Variable to hold lowercase, uppercase, special charc, numeral

// if (lowerCase == true) {
//   box += "abcdefghijklmnopqrstuvwxyz";
// }

// if (upperCase == true) {
//   box += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// }
// WRITE if'S FOR NUMERAL AND SPECIALCHARC


// FOR LOOP HOW YOU BUILD PASSWORD, WILL NEED VAIABLE OUT OF THE LENGTH
// MATH.RANDOM







}

// Call the function to generate a password
generatePassword();



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
