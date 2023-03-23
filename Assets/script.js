// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var char = "abcdefghijklmnopqrstuvwxyz";
  var charNum = "1234567890"
  var charSpec = "!@#$%^&*()";
  var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var password = "";    //generatePassword();
  var passwordText = document.querySelector("#password");
  
  // prompts the user for various options about their password
  
  var x = prompt("Would you like special characters in your password? Please type yes or no.");
  
  //forces the user to answer with either yes or no if a random word is given code will not proceed.
  
  while (x != "yes" && x!="no") x = prompt("Please type yes or no");
  
  var y = prompt("Would you like capitals in your password? Please type yes or no.");

  //forces the user to answer with either yes or no if a random word is given code will not proceed.
  
  while (y != "yes" && y !="no") y = prompt("Please type yes or no");
   
  var z = prompt("Would you like numerical characters in your pasword? Please type yes or no.");
   
  //forces the user to answer with either yes or no if a random word is given code will not proceed.
   
  while (z != "yes" && z!="no") x = prompt("Please type yes or no");
   
  //prompts the user to input their desired password length

  var passLen = prompt("Please type a password length between 8 and 128.");

  //forces the user to pick a password within the desired character count

  while (passLen < 8 || passLen > 128) {

    passLen = prompt("Please choose a length between 8 and 128");

  }

  // if user wants special characters special characters are added to the char string
  if (x == "yes") char += charSpec;
  // if user wants uppercase characters uppercase characters are added to the char string
  if (y == "yes") char += charUpper;
  // if user wants numerical characters, numerical characters are added to the char string
  if (z == "yes") char += charNum;

  for (var i = 0; i < passLen; i++){

    //generates a random number that is greater than 0 and equal to or less than the length of the char string. Then rounds to the nearest whole number.
    var aNum = Math.floor(Math.random()*char.length);

    //takes the character between 2 random consecutive indices within the char string then adds the chosen character to the password.
    password += char.substring(aNum, aNum + 1);
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
