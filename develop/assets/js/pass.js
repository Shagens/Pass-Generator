// Assignment code here
function generatePassword() {

    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}[]=<>/,.|~?";
    retVal = "";
  
  var length =parseInt( prompt("How long would you like your password? Between 8 and 128."))
  
  var lowercase = confirm("Do you want to use lowercase?")
  var uppercase = confirm("Do you want to use uppercase?")
  var number = confirm("Do you want to use a number?")
  var symbol = confirm("Do you want to use a symbol?")
  for (var i = 0; i < length; i++) {
  if(length === retVal.length) {
    break
  } else {
    if(lowercase) {
      retVal += charset.substring(0, 27)[Math.floor(Math.random() * 26)]
    }
  }
  if(length === retVal.length) {
    break
  } else {
    if(uppercase) {
      retVal += charset.substring(27, 53)[Math.floor(Math.random() * 26)]
    }
  }
    if(length === retVal.length) {
      break
    } else {
      if(number) {
        retVal += charset.substring(52, 63)[Math.floor(Math.random() * 10)]
      }
    }
      if(length === retVal.length) {
        break
      } else {
        if(symbol) {
    retVal += charset.substring(62, 87)[Math.floor(Math.random() * 24)]
  }
  }
  }
  
  
  return retVal;
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  // const randomFunc = { upper: getRandomUpperCase, 
  //  lower: getRandomLowerCase, number: getRandomNumber, symbol: getRandomSymbol 
  //};
  
  
  
  function getRandomFunc() {
  return randomFunc[Math.floor( Math.random() * Object.keys(randomFunc).length)];
  }
  
  // Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  }
  
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword());
  