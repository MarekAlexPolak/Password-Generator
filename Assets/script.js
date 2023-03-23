// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
  var minLength = 8;
  var maxLength = 128;
  var passLen = 9;
  var password = "";    //generatePassword();
  var passwordText = document.querySelector("#password");

  var x = prompt("Would you like special characters in your pass word? Please type yes or no.");
  while (x != "yes" && x!="no") x = prompt("Please type yes or no")
  var y = prompt("Would you like capitals in your password? Please type Yes or No.");
  while (y != "yes" && y !="no") y = prompt("Please type yes or no")
  var passLen = prompt("Please type a password length between 8 and 128.")
  var passLenNum = parseInt(passLen, 10);
  console.log(typeof(passLenNum));
  console.log(passLenNum);
  while (passLen < 8 || passLen > 128) {
    passLen = prompt("Please choose a length between 8 and 128");
    passLenNum = parseInt(passLen, 10);
  }

  console.log(x);
  for (var i = 0; i <= passLen; i++){

    //generates a random number that is greater than 0 and equal to or less than the length of the char string. Then rounds to the nearest whole number.
    var aNum = Math.floor(Math.random()*char.length);

    //.substring is used to avoid having to use an array. takes the character between 2 indices within a string then adds the chose character to the password.
    password += char.substring(aNum, aNum + 1);
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword);