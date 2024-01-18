// Assignment code here
function generatePassword() {
  var length = prompt("Enter the number of characters preferred(between 8 and 128:)");
  // while loop to ensure the length entered by the user meets requirements
    while(length<8 || length>128 || isNaN(length)) {
      alert("You number does not meet the requirements");
      length = prompt("Enter the number of characters preferred(between 8 and 128:)");
    }
    // variables declared to store user selection
  var lowerCase = confirm("Do you want to use lowercase letters? Cancel is No");
  var upperCase = confirm("Do you want to use uppercase letters? Cancel is No");
  var numeral = confirm("Do you want to use numbers? Cancel is No");
  var specialCharc = confirm("Do you want to use special characters? Cancel is No");
  //  while loop to ensure the user selects at least one of the four character types
  while(!(lowerCase || upperCase || numeral || specialCharc)) {
    prompt("Please select at least one character type, OK to continue");
    var lowerCase = confirm("Do you want to use lowercase letters? Cancel is No");
    var upperCase = confirm("Do you want to use uppercase letters? Cancel is No");
    var numeral = confirm("Do you want to use numbers? Cancel is No");
    var specialCharc = confirm("Do you want to use special characters? Cancel is No");
  }
  // variable declared to store the result of the function with list of parameters
  var securePassword = generateSecurePassword(length, lowerCase, upperCase, numeral, specialCharc); 
// Pop to screen to show user's secure password
  alert("Your secure password is: " + securePassword);
//  function to generate user secure password
  function generateSecurePassword(length, lowerCase, upperCase, numeral, specialCharc) { 
    var charSet = ''
    // list of variable to store character options
    var lowerCharSet = "abcdefghijklmnopqrstuvwxyz";
    var upperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeralCharset = "0123456789";
    var specialCharset = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?";

  //  series of if statements to add characters based on user selection
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
// null variable declared to store password after generation
    var password = '';
// for loop to iterate the length of of user password and input characters based on criteria selection
    for (var i = 0; i < length; i++) {
      var randomSelect = Math.floor(Math.random() * charSet.length);
      password += charSet[randomSelect];
   }
    return password;
  }
  // return password to sercure password to be able to write to the the box on the screen
  return securePassword;
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
