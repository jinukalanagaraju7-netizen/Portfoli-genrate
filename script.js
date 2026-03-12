function login()
{
let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user=="admin" && pass=="1234")
{
window.location="dashboard.html";
}
else
{
document.getElementById("msg").innerHTML="Invalid Login";
}
}

function predict()
{

let fever=document.getElementById("fever").value;
let cough=document.getElementById("cough").value;
let headache=document.getElementById("headache").value;

let disease="";

if(fever=="Yes" && cough=="Yes")
{
disease="Flu";
}
else if(fever=="Yes" && headache=="Yes")
{
disease="Viral Fever";
}
else if(headache=="Yes")
{
disease="Migraine";
}
else
{
disease="No major disease";
}

document.getElementById("result").innerHTML="Predicted Disease: "+disease;

}
