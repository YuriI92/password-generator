// Assignment code here

// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

var getMinLength = function() {
  var minLength = prompt("How much is the minimum character length?");

  if (minLength === "" || minLength === null) {
    alert("The answer is not valid. Try again.");
    getMinLength();
  } else {
    console.log(minLength);
    return minLength;
  }
};

var getMaxLength = function() {
  var maxLength = prompt("How much is the maximum character length?");

  if (maxLength === "" || maxLength === null) {
    alert("The answer is not valid. Try again.");
  } else {
    console.log(maxLength);
    return maxLength;
  }
};

getMinLength();
getMaxLength();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
