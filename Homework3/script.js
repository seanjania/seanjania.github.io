// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//All possible password options
const passwordStrings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

//Generate password from a character set with user selected options
function generatePassword() {
  var passwordCharOptions = "";

  var length = null;
  while (!Number.isInteger(length) || length < 8 || length > 128) {
    length = Number.parseInt(window.prompt("Enter a number from 8 to 128 for password length."));
  }

  var lowercase = window.confirm("Would you like to use lowercase letters?");
  if (lowercase) {
    passwordCharOptions += passwordStrings.lowercase;
  };

  var uppercase = window.confirm("Would you like to use uppercase letters?");
  if (uppercase) {
    passwordCharOptions += passwordStrings.uppercase;
  };

  var symbols = window.confirm("Would you like to use symbols?");
  if (symbols) {
    passwordCharOptions += passwordStrings.symbol;
  };

  var numbers = window.confirm("Would you like to use numbers?");
  if (numbers) {
    passwordCharOptions += passwordStrings.number;
  };
  
  for (let i = 0; i < length; i++) {
    password += passwordCharOptions[Math.floor(Math.random() * passwordCharOptions.length)]
  }
  return password;
}








