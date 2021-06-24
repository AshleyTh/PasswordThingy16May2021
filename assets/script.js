// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var alphabet = "abcdefghijklmnopqrstuvwxyz"

var chosenChars = []
var lowerCase = alphabet.split('')
var upperCase = alphabet.toUpperCase().split('')
var numbers = "0,1,2,3,4,5,6,7,8,9"
var symbols = "`,~.!,=,+,/,?,.,>,',"
console.log(lowerCase)
console.log(upperCase)
console.log(numbers)
console.log(symbols)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var length = Number(prompt("How many characters would you like your password to be?"));
  var uppers = confirm("Would you like to use uppercase letters?");
  var lowers = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var symbols = confirm("Would you like to use special characters?");


  var newPassword = ''
  if (uppers) {
    newPassword = ""
  }
  if (lowers) {
    //dosomething
  }
  // else{

  // }
  if (numbers) {
    //dosomething
  }
  if (symbols) {
    //dosomething
  }


  return (newPassword)

}