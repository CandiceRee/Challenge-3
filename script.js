var password =window.prompt("How many characters will your password contain?");
var password1=window.confirm("Any uppercase letters?");
var password2=window.confirm("Any lowercase letters?");
var password3=window.confirm("Any numbers?");
var password4=window.confirm("Any special characters?");

var characters2=("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`-={}|[]:;'<>?,./");
var lowercase2= ("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`-={}|[]:;'<>?,./");
var uppercase2=("abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`-={}|[]:;'<>?,./");
var numbers2= ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~`-={}|[]:;'<>?,./");
var symbols2 = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");

for (var i=0; i<=7; i++){
  var randomnumber = Math.floor(Math.random()*characters2.length);
  var randomnumber1 = Math.floor(Math.random()*lowercase2.length);
  var randomnumber2 = Math.floor(Math.random()*uppercase2.length);
  var randomnumber3 = Math.floor(Math.random()*numbers2.length);
  var randomnumber4 = Math.floor(Math.random()*symbols2.length);
  password += characters2.substring(randomnumber,randomnumber+1);
  password1 += lowercase2.substring(randomnumber1,randomnumber1+1);
  password2 += uppercase2.substring(randomnumber2,randomnumber2+1);
  password3 += numbers2.substring(randomnumber3, randomnumber3+1);
  password4 += symbols2.substring(randomnumber3,randomnumber4+1);
}
document.getElementById("password").value=password,password1,password2,password3,password4;

