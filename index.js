//1 What are the differences between mutating array methods and non-mutation array methods in JavaScript. 
// List 5 array methods that fall under each of them

// answer 1
// Mutating array methods changes the items in the array itself while 
//     array.push();
//     array.pop();
//     array.splice();
//     array.reverse();
//     array.unshift();
// // Non-mutating array methods returns a new array with the changes.
//     array.map();
//     array.slice();
//     array.concat();
//     array.join();
//     array.indexOf();

//2 Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
// Add ‘Kotlin’ to the end of the array
// Add ‘Java’ after ‘Ruby’
// Remove the first item in the array
// Add ’Scala’ and ‘Swift’ to the beginning of the array
// Replace ‘PHP’ with ‘Go’ and ‘Rust’

// answer 2
// 2a
const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
languages.push("Kotlin");
//2b
languages.splice(3,0,"Java");
// 2c
languages.shift();
// 2d
languages.unshift("Scala", "Swift"); 
// 2e
languages.splice(5,1,"Go","Rust")
console.log(languages);


//3 What will be the value of fruit after calling the function changeFruit?
// let fruit = ['apple', 'mango', 'banana'];
// 		function changeFruit( fruit ) {
//     			fruit[2] = "orange";
//     			return fruit;
// 		}

// answer 3
['apple','mango','orange']

//4 Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
// e.g., max([4, 5, 10, -2]) // maximum value is 10

// answer 4
function maxValue(num){
    let high = 0;
    for (let a = 0; a < num.length; a++){
        if(num[a]> high)high=num[a];
    }
    return 'Maximum value is '+ high;
}
console.log(maxValue([2,6,-8,22,4,10]));

//5 Write a function called valTimesIndex which accepts an array of numbers and returns 
// a new array with each value multiplied by the index it is at in the array:
// e.g.,
//  valTimesIndex([1,2,3]) // [0,2,6]
// 		valTimesIndex([5,10,15]) // [0,10,30]

// answer 5 
// using for of loop
function valTimesIndex(arr){
    const arr2 = [];
    for (let each of arr){
      let sum=  each * arr.indexOf(each);
      arr2.push(sum);
    }
    return arr2
}
console.log(valTimesIndex([3,6,7]));

//using map
function val(arr){
    const sum = arr.map((a,id)=>a*id);
    return sum;
}
console.log(val([3,8,9]));
