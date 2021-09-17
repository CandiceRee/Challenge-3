//User input variables:
var enter;
var uppercase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbols= ["!","@","#","$","%","^","&","*","(",")","_","+","~","`","-","=","{","}","|","[","]",":",";","'","<",">","?",",",".","/"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
//Space for the uppercase conversion
var space=[];
//Choices declared
 var choices;
//converts letters to uppercase
var toUpper=function(x){
return x.toUpperCase();
};
//creates a variable for uppercase conversion
var get=document.querySelector("#generate");
get.addEventListener("click",function(){
    ps=generatePasword();
    document.getElementById("password").ariaPlaceholder=ps;
});

//Start function to generate password
function generatePasword(){
//Asks for user input
enter=parseInt(prompt("How many characters would yuou like the password to contain? Must be between 8 to 128 characters!"));
//If Statement
if (!enter){
    alert("This needs a value");
}else if (enter<8||enter>128){
//Validates user input and starts user imput prompts
enter=parseInt(prompt("You must choose between 8 to 128 characters!"))
}else{

uppercaseConfirmed=window.confirm ("Any uppercase letters?");
lowercaseConfirmed=window.confirm("Any lowercase letters?");
numbersConfirmed=window.confirm("Any numbers?");
symbolsConfirmed=window.confirm("Any special characters?");    
};
//Else if for four negative options
if (!uppercaseConfirmed && !numbersConfirmed && !symbolsConfirmed && !lowercaseConfirmed){
    choices=alert("You must choose a criteria!");
}

//If statement that uses user's input prompts to determine choices
//Else if for four positive options
else if (!uppercaseConfirmed && !numbersConfirmed && !symbolsConfirmed && !lowercaseConfirmed){
choices=symbols.concat(uppercase,numbers,lowercase);

}
//Else if for three positive options
else if (uppercaseConfirmed && numbersConfirmed && symbolsConfirmed){
    choices=symbols.concat(numbers,uppercase);
}else if (LowercaseConfirmed && numbersConfirmed && symbolsConfirmed){
choices=symbols.concat(numbers,lowercase);
}else if (symbolsConfirmed&&lowercaseConfirmed&&uppercaseConfirmed){
    choices=symbols.concat(lowercase,uppercase);
}else if(numbersConfirmed,lowercaseConfirmed,uppercaseConfirmed){
    choices=number.concat(lowercase,uppercase);
}
//Else if for two positive options
else if(symbolsConfirmed && numbersConfirmed){
    choices=symbols.concat(numbers);
}else if(symbolsConfirmed && lowercaseConfirmed){
    choices=symbols.concat(lowercase);
}else if (symbolsConfirmed && uppercaseConfirmed){
choices=symbols.concat(uppercase);
}else if (lowercaseConfirmed&&numbersConfirmed){
    choices=lowercase.concat(numbers);
}else if (lowercaseConfirmed&&uppercaseConfirmed){
choices=lowercase.concat(uppercase);
}else if (numbersConfirmed&&uppercaseConfirmed){
choices=numbers.concat(uppercase);
}
//Else if for one positive option
else if (symbolsConfirmed){
    choices=symbol;
}else if (numbersConfirmed){
    choices=numbers;
}else if(lowercaseConfirmed){
    choices=lowercase;
}
//Create space variable to fill uppercase conversion
else if (uppercaseConfirmed){
    choices=space.concat(uppercase);
};
//password variable is an array placholder for usr generated amount of length
var password =[];
//Start random selection variables:
//Random selection for all variables:
for (var i=0;i<enter;i++){
    var pickChoices= choices[Math.floor(Math.random()*choices.length)];
password.push(pickChoices);
}
//Joins the password array and converts it to a string
var ps=password.join("");
UserInput(ps);
return ps;
}
//Puts the password value into the textbox: changing function input to use textcontent
function UserInput (ps){
    document.getElementById("password").textContent=ps;
}
var copy=document.querySelector("#generate");
copy.addEventListener("click",function(){
copyPassword();
});

function copyPassword(){
    document.getElementById("password").ariaSelected();
    alert("Password copied to clipboard!");
}


