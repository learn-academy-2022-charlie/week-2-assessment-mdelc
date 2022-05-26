// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
console.log(cohort.split(""))

// a) Your answer: - "B", "r", "a", "o", " ", "2", "0", "2", "2"
// b) Verify and explain:  .split("") is a built-in method that splits the string into individiual character strings.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: This will return Hello, LEARN Student!
// b) Verify and explain: Since this is a function, it needs a return otherwise it returns undefined. Once there is a return for the function (before the "Hello"), then it will log to the console Hello, LEARN Student!


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: This will return an array [8, 10, 12, 14, 16]
// b) Verify and explain: The .map iterates over each value in the array and multiplies that value by 2.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: The .filter essentially filters through the array's values and the values with a modulo that does not equal 0 will be filtered out as they are the odd values.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript" wil be logged.
// b) Verify and explain: This will access the 0 index of the myCodingSkills key: languages. Since the values within this key is an array that consists of strings, each string has an index value (0 - "JavaScript" and 1 - "Ruby"). Thus the zeroth index of the array languages would be "JavaScript."


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:
{
  "George",
  "Bravo",
  2022
}
// b) Verify and explain: It ended up logging:
Learn {student: 'George', cohort: 'Bravo', year: 2022}
// The learnStudent variable uses the Learn class to create the new variable and populate the keys student, cohort, and year. The only input that learnStudent specifies is the name parameter ("George") because the cohort and year are already set within the class to those specific values whereas the this.student uses whatever was input in the name parameter.
