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

var comfLowCase = confirm("Do you want to include lower case letters?");
var comfUpCase = confirm("Do you want to include upper case letters?");
var comfNumChar = confirm("Do you want to include numbers?");
var comfSpecChar = confirm("Do you want to include special characters?");

var passwordCriteria = {
  minLength: getMinLength(),
  maxLength: getMaxLength(),
  lowCase: comfLowCase,
  upCase: comfUpCase,
  numChar: comfNumChar,
  specChar: comfSpecChar,
}

console.dir(passwordCriteria);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
