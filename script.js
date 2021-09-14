var generatebtn=document.getElementById("#generate");

var uppercase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbols= ["!","@","#","$","%","^","&","*","(",")","_","+","~","`","-","=","{","}","|","[","]",":",";","'","<",">","?",",",".","/"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var randomuppercase = uppercase[Math.floor(Math.random()*uppercase.length)];
 var randomlowercase = lowercase[Math.floor(Math.random()*lowercase.length)];
 var randomnumber = numbers[Math.floor(Math.random()*numbers.length)];
var randomsymbol = symbols[Math.floor(Math.random()*symbols.length)];
console.log(randomuppercase);
console.log(randomlowercase);
console.log(randomnumber);
console.log(randomsymbol);

var password =window.prompt("How many characters will your password contain?");
var uppercaseConfirmed=window.confirm("Any uppercase letters?");
var lowecaseConfirmed=window.confirm("Any lowercase letters?");
var numbersConfirmed=window.confirm("Any numbers?");
var symbolsConfirmed=window.confirm("Any special characters?");

function generatepassword(){
//Array that holds user input (at least one)
var defaultC = [];
var remainingC=[];
if(uppercaseConfirmed){
  defaultC.push(randomuppercase);
remainingC=remainingC.concat(uppercase);
}else if(lowecaseConfirmed){
  defaultC.push(randomlowercase);
  remainingC=remainingC.concat(lowercase);
}else if(numbersConfirmed){
  defaultC.push(randomnumber);
  remainingC=remainingC.concat(numbers);
}else if(symbolsConfirmed){
defaultC.push(randomsymbol);
remainingC=remainingC.concat(symbols);
}
}


for (var i=0; i<=password; i++){
  
  lowecaseConfirmed += lowercase.substring(randomlowercase);
  uppercaseConfirmed += uppercase.substring(randomuppercase);
  numbersConfirmed += numbers.substring(randomnumber);
  symbolsConfirmed += symbols.substring(randomsymbol);
}
generatebtn.addEventListener("click", generatepassword)

