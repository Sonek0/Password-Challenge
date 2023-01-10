// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercasechar = 'abcdefghijklmnopqrstuvwxyz';
var uppercasechar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberchar = '1234567890';
var specialchar = '!@#$%^&*()_+{}"?><';
var pwlengh;
var uppercasecharCheck;
var lowercasecharCheck;
var specialcharCheck;
// Write password to the #password input
function lengthofpass(){
  passwordLength= prompt("")
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// derteming length of password as well as set up for password
function determineLength(){
  passwordLength = prompt ("Select the number of characters needed. (Password could be 8-128 characters");

  if (passwordLength<8){
    alert("Password should be a minimum of 8 or a max of 128 characters ");
    determineLength();
  }else if (passwordLength>128){
    alert("Password should be a minimum of 8 or a max of 128 characters");
  }else if (isNaN(passwordLength)){
    alert("Password should be a minimum of 8 or a max of 128 characters");
    determineLength();
  }else{
  alert("Next three will be yes or no responses to determine your password for special characters and numbers as well as uppercase (if you select no for all then the following password shall be in lowercase letters).") ;
  }  
  return passwordLength;

}

//Function will determine if the individual wants uppercase lettering
function determineUppercase(){
  uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Y or N)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please answer Yes or No for upper case characters");
      determineUppercase();

    }else if (uppercaseCheck === "Yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "No" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
}

// Determines if user wants a special char
function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? \n(Y or N)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Yes or No");
      determineSpecial();

    }else if (specialCheck === "Yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "No" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineSpecial();
    }
    return specialCheck;
}
// functions checks off for numbers
function determineNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? \n(Y or N)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumbers();

    }else if (numberCheck === "Yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "No" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
}
function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

var characters = lowercasechar;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters += uppercasechar + numberchar + specialchar;

}else if (uppercaseCheck && numberCheck){
  characters += uppercaseChar + numberChar;

}else if (numberCheck && specialCheck){
  characters += numberchar + specialChar;

}else if (uppercaseCheck && specialCheck){
  characters += uppercasechar + specialchar;

}else if (uppercaseCheck){
  characters += uppercaseChar;

}else if(numberCheck){
  characters += numberchar;

}else if (specialCheck){
  characters += specialchar;

}else{
  characters === lowercasechar;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
