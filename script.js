// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){ 
  // Password Generation
  // Set Avaliable Character Arrays
  let numSet = [ "0","1","2","3","4","5","6","7","8","9"];
  let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let symSet = ["!","@","#","$","%","^","&","*","(",")","_","+"];
  let avaliableChar = [];

  // Set Veriables
  var userPassLength = Number(prompt(" Please Select Password Size (Must be between 8 -128 characters)"));
    if (userPassLength < 8 || userPassLength > 128){
    return "You Don't Listen! \n Password Length Must Be 8 - 128 \n Please Try Again"
    };
  var userInputNum = confirm("Do you want to include Numbers");
  var userInputUpper = confirm("Do you want to include UPPER CASE LETTERS");
  var userInputLower = confirm("Do you want to include lower case letters");
  var userInputSym = confirm("Do you want to include Symbols");
  var i = 0;
  var passGen = '';

  // Setup avaliable character array based on user input
  if (userInputNum){
    avaliableChar = avaliableChar.concat(numSet);
  };
  if (userInputUpper){
    avaliableChar = avaliableChar.concat(upperCase);
  };
  if (userInputLower){
    avaliableChar = avaliableChar.concat(lowerCase);
  }
  if (userInputSym){
    avaliableChar = avaliableChar.concat(symSet);
  };

  // Checks for min 1 selected character set
  if (avaliableChar.length == 0){    
    return "No Password For You! \n Please Try Again \n Minimum 1 Character Set Required";
  };


  // For loop to iterate through avaliable characters based on desired password length
  for ( var i = 0; i<userPassLength; i++){
   if (i == 0){
      passGen = avaliableChar[Math.floor(Math.random()*avaliableChar.length)];
    }
    else{
      passGen = passGen + avaliableChar[Math.floor(Math.random()*avaliableChar.length)];
    };
  };

  // Display Password
    return passGen;

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
