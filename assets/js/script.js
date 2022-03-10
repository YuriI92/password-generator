// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Listens for a click on generateBtn
generateBtn.addEventListener("click", function(){
  // generate random password by requesting user for a criteria
  var generatePassword = function() {
    // get minimum length
    var getMinLength = function() {
      var minLength = prompt("How much is the minimum character length?");

      // if user enter invalid value, let user try again
      if (minLength === "" || minLength === null || isNaN(minLength) === true) {
        alert("The answer is not valid. Try again.");
        getMinLength();
      } else {
        // change to numeric type
        minLength = Number(minLength);
        return minLength;
      }
    };
      
    var minLength = getMinLength();
    
    // get maximum length
    var getMaxLength = function() {
      var maxLength = prompt("How much is the maximum character length?");
    
      // if user enter invalid value, let user try again
      if (maxLength === "" || maxLength === null || isNaN(maxLength) === true) {
        alert("The answer is not valid. Try again.");
        getMaxLength();
      // if maxLength was below minLength, let user try again
      } else if (maxLength < minLength) {
        alert("Please enter a number larger than the minimum character length. Try again.");
        getMaxLength();
      } else {
        maxLength = Number(maxLength);
        return maxLength;
      }
    };

    // define each characters
    var lowCase = "lower case letters";
    var upCase = "upper case letters";
    var numChar = "numbers";
    var specChar = "special characters";
    
    // make characters to a set so that confChar function repeat until the end of character types
    var charType = [lowCase, upCase, numChar, specChar];
    
    // get which character types user want to use
    var confChar = function(i) {
      var storeConf = confirm("Do you want to include " + charType[i] + "?");
    
      if (storeConf) {
        return "yes";
      } else {
        return "no";
      }
    }
    
    var maxLength = getMaxLength();

    // password criteria
    var pswCrit = [
      {
        min: minLength,
        max: maxLength
      },
      {
        lowCase: confChar(0),
        upCase: confChar(1),
        numChar: confChar(2),
        specChar: confChar(3),
      },
    ];
    
    // print pswCrit details on console
    console.dir(pswCrit);
    
    // create random characters
    var result = '';

    // create random length between minLength and maxLength
    var randomLength = function(min, max) {
      var value = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(value);
      return value;
    }

    // create random password
    var randomPassword = function () {
      // define each character types
      var letters = 'abcdefghijklmnopqrstuvwxyz';
      var numbers = '0123456789';
      var special = '!#$%&()=-?+,._'
      
      // create random password
      var randomForm = function() {
        // define password length using randomLength function
        var pswLength = randomLength(minLength, maxLength);
        // set random characters until it reaches pswLength
        for (var i = 0; i < pswLength; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
      }

      // check which type user requested to use for password and merge the characters into a single variable
      if (pswCrit[1].lowCase === "yes") { // with lowcase
        if (pswCrit[1].upCase === "yes") { //with upcase
          if (pswCrit[1].numChar === "yes") { // with num
            if (pswCrit[1].specChar === "yes") { // with spec
              var characters = letters + letters.toUpperCase() + numbers + special;
              randomForm();
              console.log(result);
              return result;
            } else { // w/o spec
              var characters = letters + letters.toUpperCase() + numbers;
              randomForm();
              console.log(result);
              return result;
            }
          } else { // lowcase, upcase, w/o num
            if (pswCrit[1].specChar === "yes") { // with spec
              var characters = letters + letters.toUpperCase() + special;
              randomForm();
              console.log(result);
              return result;
            } else { // w/o spec
              var characters = letters + letters.toUpperCase();
              randomForm();
              console.log(result);
              return result;
            }
          }
        } else { // lowcase, w/o upcase
          if (pswCrit[1].numChar === "yes") { // with num
            if (pswCrit[1].specChar === "yes") { // with spec
              var characters = letters + numbers + special;
              randomForm();
              console.log(result);
              return result;
            } else { // no spec
              var characters = letters + numbers;
              randomForm();
              console.log(result);
              return result;
            }
          } else { // lowcase, w/o upcase and num
            if (pswCrit[1].specChar === "yes") { // with spec
              var characters = letters + special;
              randomForm();
              console.log(result);
              return result;
            } else { // w/o spec
              var characters = letters;
              randomForm();
              console.log(result);
              return result;
            }
          }
        }
      } else { // w/o lowcase
        if (pswCrit[1].upCase === "yes") { // with upcase
          if (pswCrit[1].numChar === "yes") { // with num
            if (pswCrit[1].specChar === "yes") { // with spec
              var characters = letters.toUpperCase() + numbers + special;
              randomForm();
              console.log(result);
              return result;
            } else { // w/o spec
              var characters = letters.toUpperCase() + numbers;
              randomForm();
              console.log(result);
              return result;
            }
          } else { // w/o lowcase, with upcase, w/o num
            if (pswCrit[1].specChar === "yes") { // with spec
              var characters = letters.toUpperCase() + special;
              randomForm();
              console.log(result);
              return result;
            } else { // w/o spec
              var characters = letters.toUpperCase();
              randomForm();
              console.log(result);
              return result;
            }
          }
        } else { // w/o lowcase and upcase
          if (pswCrit[1].numChar === "yes") { // with num
            if (pswCrit[1].specChar === "yes") { // with spec
              var characters = numbers + special;
              randomForm();
              console.log(result);
              return result;
            } else { // w/o spec
              var characters = numbers;
              randomForm();
              console.log(result);
              return result;
            }
          } else { // w/o lowcase and upcase and num, only spec
            var characters = special;
            randomForm();
            console.log(result);
            return result;
          }
        }
      }
    }
    return randomPassword();
  }

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  writePassword();
})
