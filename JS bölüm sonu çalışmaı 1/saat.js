let myName = prompt("İsminizi Giriniz");
document.getElementById("myName").innerHTML = myName;
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("today").innerHTML = today;