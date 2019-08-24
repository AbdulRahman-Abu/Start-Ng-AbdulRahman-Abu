/* ADVANCED ARRAY */

//Say we want to multiply every no in the ARRAY

const array = [1, 2, 10, 16];

const newArray = array.forEach((num) => { //means for each num in the array
    num * 2;
})
console.log(newArray);

//Running the above will give "Undefined" because that is not how forEach works.
//We are randomly multiplying and looping through the array but not storing it anyway.
//So let's rework it.

const double = [];
const array = [1, 2, 10, 16];
const newArray = array.forEach((num) => {
    double.push(num * 2); // so we are pushing on to the array as we loop tru it, num * 2
})
console.log(double);

// ANSWER 
// (4) [2, 4, 20, 32]

// MOST IMPORTANT METHODS FOR DAILY WORK IN ARRAYS AND LOOPING
//map, filter, reduce
// You don't have to use forEach after knowing these

const mapArray = array.map((num) => {
    return num * 2;
});
console.log(mapArray);

// ANSWER:
// 4) [2, 4, 20, 32]
// for map,you always need to return something. map can return a new array unlike forEach.
// Remember we created the below new array to store forEach items. For map, we dont have to create this but return a new array

//when having a single parameter(num), we can remove the bracket and do shorthand below
const mapArray = array.map(num => num * 2);

// FILTER
const filterArray = array.filter(num => { //It says filter the array then check if num in array is > 5.
    return num > 5; // if num > 5, then put that num in filterArray. So it starts filtering from 1 to 16
})
// ANSWER:
console.log(filterArray);
// VM3604:1 (2) [10, 16]

//REDUCE ARRAY
const reduceArray = array.reduce((accumulator, num) => {//reduce takes an acculumator(acc or any name) and num as parameters
    return accumulator + num; // acc ie 0 + 1,,,then store the value. for next iteration, the acc remembers the value ie 1 + 2
}, 0); // we have to initialise accumulator with a starting figure, here is 0, zero

// CLOSURES
// What closure does is that the child scope always have access to the parents
// Means: a fn ran, the fn executed. It's never going to run again. But its going
// to remember there are ref to those vars so the child scope has access to the parent scope
const first = () => {
    const greet = 'Hi';
    const second =() => {
        alert(greet);
    }
    return second;
}
const newFunc = first();
newFunc();
// first will only run once and never again but second(child) will store those ref to first

//CURRYING....NOT UNDERSTOOD