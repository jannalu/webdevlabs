var x, y, z;
var A, B, C;

x = 5;
y = 7;
z = x + y;

console.log(z);

A = "Hello";
B = " world!";
C = A + B;
console.log(C);

function SumNPrint(x1, x2){

    let x3 = x1 + x2;
    console.log(x3);


}
 

// SumNPrint(x, y);
// SumNPrint(A, B);

if (C.length > z){
    console.log(C);
} else if (C.length < z){
    console.log(z);
} else{
    console.log("good job!");
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(x){

    for (let i = 0; i < x.length; i++){
        if (x[i] == "Banana"){
            alert("found the banana in " + i);
        }
    }
    
}
// findTheBanana(L1);
// findTheBanana(L2);

L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana2(array, name){
    array.forEach(function(item){
        if (item == "Banana"){
            alert("We found a banana in the " + name + " array");
        }
    });

}

// findTheBanana2(L1, "first");
// findTheBanana2(L2, "second");

function greetingFunc(){

    let d = new Date();
    let h = d.getHours();

    let greeting = "";

    if (h < 12 && h >= 5){
        greeting = "Good morning";
    } else if (h >= 12 && h < 18){
        greeting = "Good afternoon";
    } else if (h >= 20 && h < 24){
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }
    
    let E = document.getElementById("greeting");
    E.innerHTML = greeting;

}

greetingFunc();

function addYear(){
    let d = new Date();
    let y = d.getFullYear();

    let E = document.getElementById("copyYear");
    E.innerHTML = y;
}

function showList(){
    const button = document.getElementById("showButton");
    const list = document.getElementById("funList");

    list.style.display = "block";
    button.style.display = "none";

}

$(document).ready(function() {
    $("#readMore").click(function() {
        $("#longBio").slideDown();  
        $("#readMore").hide();   
        $("#readLess").show();     
    });

    $("#readLess").click(function() {
        $("#longBio").slideUp();      
        $("#readMore").show();     
        $("#readLess").hide();     
    });
});

  
function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const com = document.getElementById("comBox");
    const demo = document.getElementById("demo");
  
    demo.innerHTML = "";
    demo.className = "";
  

    if (!name.value) {
      name.setCustomValidity("please fill out the form correctly!");
    } else {
      name.setCustomValidity(""); 
    }
  

    if (!email.value) {
      email.setCustomValidity("please fill out the form correctly!");
    } else {
      email.setCustomValidity("");
    }

    if (!com.value) {
        com.setCustomValidity("please fill out the form correctly!");
    } else {
        com.setCustomValidity("");
    }
  
    
    if (!name.checkValidity()) {
      demo.innerHTML = name.validationMessage;
      return false;
    }
  
    if (!email.checkValidity()) {
      demo.innerHTML = email.validationMessage;
      return false;
    }

    if (!com.checkValidity()) {
      demo.innerHTML = com.validationMessage;
      return false;
    }
  
    demo.innerHTML = "Form submitted successfully!";
    demo.className = "success";
    return false; // just to prevent real form submission for demo
}


function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {

    const currentPath = window.location.pathname;


    const navLinks = document.querySelectorAll(".nav-links a");

    
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active"); 
        }
    });
});