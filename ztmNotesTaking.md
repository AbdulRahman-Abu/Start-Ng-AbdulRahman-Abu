/* ADVANCED ARRAY */

Say we want to multiply every no in the ARRAY

const array = [1, 2, 10, 16];

const newArray = array.forEach((num) => { //means for each num in the array
    num * 2;
})
console.log(newArray);

//Running the above will give "Undefined" because that is not how forEach works.
We are randoming multiplying and looping through the array but not storing it anyway.
So let's rework it

