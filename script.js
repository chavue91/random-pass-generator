var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var numberChar = "0123456789";
var specialChar = "!#$%&()*+,-./:;<>=?@[]^_`|}{~";
var pass = "";
var randomNum = "";


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generating password
var generatePassword = function() {
  var passLength = window.prompt("Please choose a password length of 8-128 characters.");

// Password length
  if (passLength >= 8 && passLength <= 128) {
    window.alert("You have chosen a password length of " + passLength + ".");
  } 
  else {
    window.alert("Please enter a valid number between 8-128.");
    return;
  }
  
  // Uppercase letters
  var upperCaseChoice = window.confirm("Would you like to include uppercase letters in your password?");

  if (upperCaseChoice) {
    window.alert("You have chosen to include uppercase letters in your password.");
    pass = upperCaseChar += pass;
  } 
  else {
    window.alert("You have chosen to not add upper case letters.");
  }

  //Lowercase letters
  var lowerCaseChoice = window.confirm("Would you like to include lowercase letters in your password?");

  if (lowerCaseChoice) {
    window.alert("You have chosen to include lowercase letters in your password.");
    pass = lowerCaseChar += pass;
  } 
  else {
    window.alert("You have chosen to not include lower case letters.");
  }

  // Numeric
  var numChoice = window.confirm("Would you like to include numbers in your password?");

  if (numChoice) {
    window.alert("You have chosen to include numbers in your password.");
    pass = numberChar += pass;
  } 
  else {
    window.alert("You have chosen to not include numbers.");
  }

  // Special characters
  var specialCharChoice = window.confirm("Would you like to include special characters in your password?");
  
  if (specialCharChoice) {
    window.alert("You have chosen to include special characters in your password.");
    pass = specialChar += pass;
  } 
  else {
    window.alert("You have chosen to not include special characters.");
  }

  //Choice confirmation
  if (pass) {
  window.alert("Generating your password...");
  } 
  else {
    window.alert("Please select at least one of the 4 character options.");
    return;
  }

  //Generate characters for password
var generate = new Array();

for (i = 0; i < passLength; i++) {
  randomNum = Math.floor(Math.random() * pass.length);
  arrayNum = pass[randomNum];
  generate.push(arrayNum);
}

//Generate password
password = generate.join( " " );
return password; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
