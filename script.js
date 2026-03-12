function login(){

var user = document.getElementById("username").value;
var pass = document.getElementById("password").value;

if(user=="admin" && pass=="1234"){
window.location="dashboard.html";
}
else{
document.getElementById("error").innerHTML="Wrong Username or Password";
}

}

function predict(symptom){

var disease="";

if(symptom=="fever"){
disease="Possible Disease: Viral Fever";
}

if(symptom=="cough"){
disease="Possible Disease: Cold / Flu";
}

if(symptom=="headache"){
disease="Possible Disease: Migraine";
}

if(symptom=="stomach"){
disease="Possible Disease: Food Poisoning";
}

document.getElementById("output").innerHTML=disease;

}
