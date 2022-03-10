// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
  generateBtn.addEventListener("click", function(){
    var getMinLength = function() {
      var minLength = prompt("How much is the minimum character length?");
      var toNum = Number(minLength);
    
      if (toNum === "" || toNum === null) {
        alert("The answer is not valid. Try again.");
        getMinLength();
      } else {
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
        return toNum;
      }
    };
    
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
    
    var maxLength = getMaxLength();
  
    var lengthCrit = [
      {
        minLength: minLength
      },
      {
        maxLength: maxLength
      },
    ];

    var typeCrit = [
      {
        lowCase: confChar(0)
      },
      {
        upCase: confChar(1)
      },
      {
        numChar: confChar(2)
      },
      {
        specChar: confChar(3)
      },
    ];
    
    console.dir(lengthCrit);
    console.dir(typeCrit);

    var randomValue = function(min, max) {
      var result = '';
      
      var letters = 'abcdefghijklmnopqrstuvwxyz';
      var numbers = '0123456789';
      var special = '!#$%&()=-?+,._'

      var randomForm = function() {
        for (var i = 0; i > min || i < max; i++) {
          result += String.charAt(Math.floor(Math.random() * characters.length));
          console.log(result);
        }
      }

      if (typeCrit[0] = "yes") { //low case
        if (typeCrit[1] = "yes") { //upcase
          if (typeCrit[2] = "yes") { // num
            if (typeCrit[3] = "yes") { // spec
              var characters = letters + letters.toUpperCase() + numbers + special;
              randomForm();
              console.log(result);
              return result;
            } else {
              var characters = letters + letters.toUpperCase() + numbers;
              randomForm();
              return result;
            }
          } else {
            if (typeCrit[3] = "yes") {
              var characters = letters + letters.toUpperCase() + special;
              randomForm();
              return result;
            } else {
              var characters = letters + letters.toUpperCase();
              randomForm();
              return result;
            }
          }
        } else {
          if (typeCrit[2] = "yes") {
            if (typeCrit[3] = "yes") {
              var characters = letters + numbers + special;
              randomForm();
              return result;
            } else {
              var characters = letters + numbers;
              randomForm();
              return result;
            }
          } else {
            if (typeCrit[3] = "yes") {
              var characters = letters + special;
              randomForm();
              return result;
            } else {
              var characters = letters;
              randomForm();
              return result;
            }
          }
        }
      } else {
        if (typeCrit[1] = "yes") {
          if (typeCrit[2] = "yes") {
            if (typeCrit[3] = "yes") {
              var characters = letters.toUpperCase() + numbers + special;
              randomForm();
              return result;
            } else {
              var characters = letters.toUpperCase() + numbers;
              randomForm();
              return result;
            }
          } else {
            if (typeCrit[3] = "yes") {
              var characters = letters.toUpperCase() + special;
              randomForm();
              return result;
            } else {
              var characters = letters.toUpperCase();
              randomForm();
              return result;
            }
          }
        } else {
          if (typeCrit[2] = "yes") {
            if (typeCrit[3] = "yes") {
              var characters = numbers + special;
              randomForm();
              return result;
            } else {
              var characters = numbers;
              randomForm();
              return result;
            }
          } else {
            var characters = special;
            randomForm();
            return result;
          }
        }
      }
    }
    randomValue();
  });
}

generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
