// Assignment code here
var numbers =[0,1,2,3,4,5,6,7,8,9];
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var specialChar = "!@#$%^&*(".split("");

function passwordCrit() {
  var passwordLength = window.prompt("How many characters?");
  parseInt(passwordLength);
  
  if (passwordLength < 8  || passwordLength > 128 || isNaN(passwordLength)) {
      window.alert ("Please enter a number 8-128!");
      return; 
  } 

  var useNumbers = window.confirm ("Do you want to use numbers?");

  var useUpper = window.confirm ("Do you want to use upper case letters?");

  var useLower = window.confirm ("Do yo want to use lower case letters?");

  var useSpecialChar = window.confirm ("Do you want to use special characters?"); 

  if (useNumbers === false && !useUpper && !useLower && !useSpecialChar) {
    window.alert ("Please select at least one modifier!");
    return;
  } 

var passwordOpt = {
  length: passwordLength,
  yesNums: useNumbers,
  yesUpper: useUpper,
  yesLower: useLower,
  yesSpecChar: useSpecialChar, 
}

return passwordOpt;
}

function generatePassword() {

  var options = passwordCrit (); 

  var results = [];
  var possibleChar = [];

  if (options.yesNums) {
    possibleChar = possibleChar.concat(numbers);
  }

  if (options.yesUpper) {
    possibleChar = possibleChar.concat(upperCase);
  }

  if (options.yesLower) {
    possibleChar = possibleChar.concat(lowerCase);
  }

  if (options.yesSpecChar) {
    possibleChar = possibleChar.concat(specialChar);
  }

var newPassword = ""
  for (i = 0; i< options.length; i++) {
  var randomChar = possibleChar[Math.floor(Math.random()*possibleChar.length)];
    newPassword += randomChar};

    return newPassword;  
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
