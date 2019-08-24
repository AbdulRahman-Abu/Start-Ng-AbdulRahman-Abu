// Arrow function

function add(a, b) {
    return a + b;
}
// 
add(5,6);
const add2 = (a,b) => a + b;
add(6,9);

console.log(`${name} nfdhdfhhxjjx  `)

//ADVANCED FUNCTION
//CLOSURES
const first = () => {
    const greet = 'Hi';
    const second =() => {
        alert(greet);
    }
    return second;
}
const newFunc = first();
newFunc();
const newFunc = second()  

// CURRYING
const multiply = (a, b) => {
    return a + b;
}





























// //windows scope
// function isUserValid() {
//     return Boolean;
// }
// var answer = isUserValid(true) ? "You may enter" : "Access Denied";

// var auotomatedAnswer = 
// "Your account # is " + (isUserValid(false) ? "1234" : "not available");


// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
//     body.style.background = 
//     "linear-gradient(to right, "
//     + color1.value
//     + ", "
//     + color2.value
//     + ")";

//     css.textContent = body.style.background + ";";

// }
// color1.addEventListener("input", setGradient);
// color2.addEventListener("input", setGradient);



// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// button.addEventListener("click", function() {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode("testing"));
//     ul.appendChild(li);
// })




// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function() {
//     console.log("CLICKS!!!!");
// }) 



// var userNamePrompt = prompt("What is your username?");
// var passwordPrompt = prompt("What is your password?");

// var database = [
//     {
//         username: "raybaba",
//         password: "123456"
//     },
//     {
//         username: "ocheli",
//         password: "123456"
//     },
//     {
//         username: "henry",
//         password: "123456"
//     }
// ];

// var newsfeed = [
//     {
//         username: "sally",
//         timeline: "Javascript is cool"
//     },
//     {
//         username: "ejike",
//         timeline: "learning linux"
//     }
// ];

// function isUserValid(username, password) {
//     for (var i = 0; i < database.length; i++) {
//         if (database[i].username === username &&
//             database[i].password === password) {
//                 return true;
//              }
// } return false
// }

// function signIn(username, password) {
//     if (isUserValid(username, password)) {
//                 console.log(newsfeed);
//              } else {
//                      alert("Sorry, wrong username and password");
//                     }
//       }
// signIn(userNamePrompt, passwordPrompt); 