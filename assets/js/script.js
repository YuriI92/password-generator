// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function(){
  var getMinLength = function() {
    var minLength = prompt("How much is the minimum character length?");
    var toNum = Number(minLength);
  
    if (toNum === "" || toNum === null) {
      alert("The answer is not valid. Try again.");
      getMinLength();
    } else {
      console.log(toNum);
      return toNum;
    }
  };
  
  var minLength = getMinLength();
  
  var getMaxLength = function() {
    var maxLength = prompt("How much is the maximum character length?");
    var toNum = Number(maxLength);
  
    if (toNum === "" || toNum === null) {
      alert("The answer is not valid. Try again.");
      getMaxLength();
    } else if (toNum < minLength) {
      alert("Please enter a number larger than the minimum character length. Try again.");
      getMaxLength();
    } else {
      console.log(toNum);
      return toNum;
    }
  };
  
  var maxLength = getMaxLength();
  
  var lowCase = "lower case letters";
  var upCase = "upper case letters";
  var numChar = "numbers";
  var specChar = "special characters";
  
  var charType = [lowCase, upCase, numChar, specChar];
  
  var confChar = function(i) {
    var storeConf = confirm("Do you want to include " + charType[i] + "?");
  
    if (storeConf) {
      return "yes";
    } else {
      return "no";
    }
  }
  
  var passwordCriteria = {
    minLength: minLength,
    maxLength: maxLength,
    lowCase: confChar(0),
    upCase: confChar(1),
    numChar: confChar(2),
    specChar: confChar(3),
  }
  
  console.dir(passwordCriteria);
});

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
