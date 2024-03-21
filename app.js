const student = {
    name: "Sudhansu",
    age: 25,
    isPass: true,
    cgpa: 9.8,
    objective (){
        console.log("I love my India, my name is " + this.name);
    }
}

student["age"] = student["age"] + 1;
student.name = "Rahul Sharma";

console.log(typeof student["isPass"]);

function calculation (){
    function sum(a, b){
        a = 1;
        b =3;
        let sum = a + b;

        return sum;
    }

    function diff (a, b){
        let diff = a -b;

        return diff;
    }

    return {
        sum,
        diff,
    }
}



//let num = document.getElementById("num");

 

// num % 5 === 0 ? console.log(num," is multiple of 5") : console.log(num ," is not a multiple of 5");
// let sum = 0;
// for(let i=1; i<=5; i++){ 
//     sum = sum + i; 
// }

// console.log(sum);

// let n = prompt("Enter your num");
// n = parseInt(n);
// console.log("sum of first n numbers is " , (n * (n+1)) / 2 );


// while loop

let n = 1;
let sum = 0;

while(n <= 5){
    sum = sum + n;
    n++;
}


let i = 20;

do {
    console.log("Sudhansu Sekhar Pradhan")
    i++;
}while(i <= 10);

//for of loop

let str = "Sudhansu Sekhar Pradhan";
let size = 0;
for(let i of str){
    //console.log(i);
    size++;
}

//for in loop

let objStud = {
    name: "Sudhansu",
    age: 23,
    cgpa: 9.8,
    DOB: "24/06/1998",
}

let o = 0;
for(let key in objStud){
    console.log(objStud[key]);
   
}

for(let i =1; i<=100; i++){
    i%2 !== 0 ? console.log(i): console.log();  
}

let guessed = prompt("guess the number");
guessed = parseInt(guessed);
let numb = 0; 

while(guessed != numb){
    guessed = prompt("guess the number");
}

console.log("Correct");