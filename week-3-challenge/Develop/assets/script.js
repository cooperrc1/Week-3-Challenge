// Assignment code here
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var lengthChar = Number(window.prompt("How long do you want the password to be? 8-128"));
  if(!Number.isInteger(lengthChar) || lengthChar <=7 || lengthChar >=129){
    window.alert ("This amount isn't between 8 and 128!")
    return;
  }
  var numBool = window.confirm("Do you want numbers?");
  var upBool = window.confirm("Do you want uppercase letters?");
  var lowBool = window.confirm("Do you want lowercase letters?");
  var symbBool = window.confirm ("Do you want symbols?");

  
  var password = generatePassword(lengthChar,numBool,upBool,lowBool,symbBool);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

function generatePassword(lengthChar,numBool,upBool,lowBool,symbBool) { 
  var usedList = "";
  var numberList = "0123456789";
  var upperList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerList = "abcdefghijklmnopqrstuvwxyz";
  var symbolList = "!@#$%^&*(){}[]<,>?/.~`|"
  
  if(numBool&&upBool&&lowBool&&symbBool){
    usedList = numberList + upperList + lowerList + symbolList;
    }else if(numBool&&upBool&&lowBool){
      usedList = numberList + upperList + lowerList;
    }else if(numBool&&upBool){
      usedList = numberList + upperList;
    }else if(numBool&&lowBool){
      usedList = numberList + lowerList;
    }else if (numBool&&symbBool){
      usedList = numberList + symbolList;
    }else if (numBool){
      usedList = numberList;
    }else if (upBool&&lowBool&&symbBool){
      usedList = upperList + lowerList + symbolList;
    }else if (upBool&&lowBool){
      usedList = upperList + lowerList;
    }else if (lowBool&& symbBool){
      usedList = lowerList + symbolList;
    }else if (upBool){
      usedList = upperList;
    }
    else if (lowBool){
      usedList = lowerList;
    }else if (symbBool){
      usedList = symbolList
    }
  var generated = ""; 
 for(var i=0; i <= lengthChar; i++){
    var rand=Math.floor(Math.random()*usedList.length);
    generated += usedList.charAt(rand,rand+1);
    console.log(generated);
  }
  return generated; 
} 

                    

// Get references to the #generate element


// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
