//number 1
function InstagramPost(
  authorHandle,
  content,
  imageLink,
  viewNumber,
  likeNumber
) {
  this.authorHandle = authorHandle;
  this.content = content;
  this.imageLink = imageLink;
  this.viewNumber = viewNumber;
  this.likeNumber = likeNumber;
  this.all = function () {
    return `Hello, my handle is ${this.authorHandle} and this is my post content "${this.content}". You can view this image ${this.imageLink}. This content has ${this.viewNumber} views and ${this.likeNumber} likes.`;
  };
}

//number 2
const postOne = new InstagramPost(
  "@helen",
  "All about me",
  "https://image.png",
  200,
  100
);
const postTwo = new InstagramPost(
  "@Vivian",
  "Let's talk",
  "https://image.jpeg",
  700,
  80
);

console.log(postOne.all())
console.log(postTwo.all())

//number 3a
function createPerson(name, age, location) {
  return {
    name,
    age,
    location
  };
}
const person = createPerson("Musa Dawodu", 19, "Lekki,Lagos State");


//number 3b
function createJambScores(eng, govt, lit, crk) {
  return {
    ENG: eng,
    GOVT: govt,
    LIT: lit,
    CRK: crk,
  };
}
const jambScore = createJambScores(70, 85, 82, 94);

person.jambScore = jambScore;
console.log(person);

//number 4
//a) using Object.assign
const people = Object.assign({},person);
people.ego="hello"
console.log(people);

//b) using spread method
const peopleAll = {...people};
console.log(peopleAll);

//c) using the for in loop
let mass ={};
for (let details in person){
    mass[details] = person[details]
}
console.log(mass);

//d) using for of loop with Object.keys
let many={};
for (let all of Object.keys(people)){
    many[all]=people[all];
}
console.log(many);

//number 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 
 for (let candidate in presidentialCandidates){
    console.log(presidentialCandidates[candidate] + " is the presidential candidate of "+ candidate);
 }

