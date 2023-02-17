/* Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
Social Science Subjects - Accounting, Commerce, Marketing, Geography
Arts Subjects - Government, Economics, Literature, History
General Subjects - English, Mathematics
*/

let subjects = "";
let course = "";
let student = "artStudent";
if (student === "artStudent") {
  course = "Art Students: ";
  subjects = "English, Mathematics, Government, Economics, Literature, History";
} else if (student === "scienceStudent") {
  course = "Science Students: ";
  subjects =
    "English, Mathematics, Physics, Chemistry, Biology, Technical Drawing";
} else if (student === "socialStudent") {
  course = "Social Science Students: ";
  subjects = "English, Mathematics, Accounting, Commerce, Marketing, Geography";
} else {
  course = "General Students: ";
  subjects = "English, Mathematics";
}
console.log(course, subjects);

let num = 50;;
let pwr = 1;
const arr = [];
while (pwr < num) {
    pwr *= 2;
    if (Math.abs(num - pwr / 2) < Math.abs(num - pwr)) {
    }
    arr.push(pwr);
}

let result;
for (let a = 0; a < arr.length; a++) {
  let firstnum = arr[arr.length - 2];
  let numone = num - firstnum;
  let lastnum = arr[arr.length - 1];
  let numlast = num - lastnum;
  
  if (numone <= Math.abs(numlast)) {
    result = firstnum;
  } else {
    result = lastnum;
  }
}
console.log(`The number ${result} is the power of 2 nearest to ${num}`)

