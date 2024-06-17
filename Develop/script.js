// Assignment code here

// Function to generate password based on criteria
function generatePassword() {
  // Prompt user for password length
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");
  length = parseInt(length);

  // Validate password length
  if (isNaN(length) || length < 8 || length > 128) {
      alert("Invalid length. Please enter a number between 8 and 128.");
      return "";
  }

  // Prompt user for character types
  var includeLower = confirm("Include lowercase characters?");
  var includeUpper = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!includeLower && !includeUpper && !includeNumbers && !includeSpecial) {
      alert("At least one character type must be selected.");
      return "";
  }

  // Character sets
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_+[]{}|;:',.<>?/`~";

  var allChars = "";
  if (includeLower) allChars += lowerChars;
  if (includeUpper) allChars += upperChars;
  if (includeNumbers) allChars += numberChars;
  if (includeSpecial) allChars += specialChars;

  // Generate password
  var password = "";
  for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
  }

  return password;
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
