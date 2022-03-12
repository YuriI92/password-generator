// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Listens for a click on generateBtn
generateBtn.addEventListener("click", function(){
  // generate random password by requesting user for a criteria
  var generatePassword = function() {

    var length = prompt("Enter the length of a password between 8 and 128.");

    if (!(length >= 8 && length <= 128)) {
      alert("The answer is not valid. Please enter the number between 8 and 128.");
      return "";
    }
    
    // define each characters
    var lowerCase = "lower case letters";
    var upperCase = "upper case letters";
    var numbers = "numbers";
    var special = "special characters";
    
    // make characters to a set so that confChar function repeat until the end of character types
    var charType = [lowerCase, upperCase, numbers, special];
    
    // get which character types user want to use
    var confChar = function(i) {
      var storeConf = confirm("Do you want to include " + charType[i] + "?");
    
      if (storeConf) {
        return "yes";
      } else {
        return "no";
      }
    }
    
    // password criteria
    var pswCrit = [
      {
        length: length,
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

    // create random password
    var randomPassword = function () {
      // define each character types
      var letters = 'abcdefghijklmnopqrstuvwxyz';
      var numbers = '0123456789';
      var special = '!#$%&()=-?+,._'
      
      console.log(length);

      // create random password
      var randomForm = function() {
        // define password length using randomLength function
        // var pswLength = randomLength(minLength, maxLength);
        // set random characters until it reaches pswLength
        for (var i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
      }

      // check which type user requested to use for password and merge the characters into a single variable
      if (pswCrit[1].lowCase === "yes") { // with lowCase
        if (pswCrit[1].upCase === "yes") { //with upCase
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
          } else { // lowCase, upCase, w/o num
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
        } else { // lowCase, w/o upCase
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
          } else { // lowCase, w/o upCase and num
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
      } else { // w/o lowCase
        if (pswCrit[1].upCase === "yes") { // with upCase
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
          } else { // w/o lowCase, with upCase, w/o num
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
        } else { // w/o lowCase and upCase
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
          } else { // w/o lowCase and upCase and num, only spec
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
