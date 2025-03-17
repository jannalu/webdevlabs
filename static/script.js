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
 

SumNPrint(x, y);
SumNPrint(A, B);

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
findTheBanana(L1);
findTheBanana(L2);

L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana2(array, name){
    array.forEach(function(item){
        if (item == "Banana"){
            alert("We found a banana in the " + name + " array");
        }
    });

}

findTheBanana2(L1, "first");
findTheBanana2(L2, "second");

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
