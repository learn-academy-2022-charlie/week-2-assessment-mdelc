// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.
// Expected output: "15 is divisible by three"
// Expected output: "0 is divisible by three"
// Expected output: "-7 is not divisible by three"
describe("divBy3", () => {
  it("returns a string that says number is divisible by three or number is not divisible by three",() => {
    const num1 = 15
    const num2 = 0
    const num3 = -7
    expect(divBy3(num1)).toEqual(`${num1} is divisible by three`)
    expect(divBy3(num2)).toEqual(`${num2} is divisible by three`)
    expect(divBy3(num3)).toEqual(`${num3} is not divisible by three`)
  })
})
// //     ReferenceError: divBy3 is not defined

// b) Create the function that makes the test pass.

// Create a function named divBy3.
// Input is a number, create a conditional statement to determine if the number is divisible by 3. Using built-in method .isInteger, use number/3 as argument and determine if true or false.
// If true, return the number input in string interpolation "is divisible by 3."
// Else (false) return the number input in string interpolation "is not divisible by 3."

const divBy3 = (num) => {
  if (Number.isInteger(num/3) === true) {
    return `${num} is divisible by three`
  } else {
    return `${num} is not divisible by three`
  }
}

// const num1 = 15
// const num2 = 0
// const num3 = -7
// var test1 = divBy3(num1)
// var test2 = divBy3(num2)
// var test3 = divBy3(num3)

// // PASS  ./code-challenges.test.js
// //  divBy3
// //    ✓ returns a string that says number is divisible by three or number is not divisible by three (6 ms)
// //
// // Test Suites: 1 passed, 1 total
// // Tests:       1 passed, 1 total
// // Snapshots:   0 total
// // Time:        0.423 s

// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
//
// // a) Create a test with expect statements for each of the variables provided.
//
describe("capArray", () => {
  const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
  const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
  it("returns an array with all words capitalized",() => {
    expect(capArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

// // ● capitalizedArray › returns an array with all words capitalized
// //
// //    ReferenceError: capArray is not defined
//
// // b) Create the function that makes the test pass.

// Create a function called capArray that takes an array as input parameter.
// Return the array using .map() method that takes the index value 0 (first letter capitalized) and adds it starting from 1st index using substring method.


const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]

const capArray = (array) => {
  return array.map (value =>
  value[0].toUpperCase() + value.substring(1))
}



// console.log(capArray(randomNouns1))
// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstIndexVowel", () => {
  it("takes in a string and logs the index of first vowel", () => {
    const vowelTester1 = "learn"
    const vowelTester2 = "academy"
    const vowelTester3 = "challenges"
    expect(firstIndexVowel(vowelTester1)).toEqual(1) // Expected output: 1
    expect(firstIndexVowel(vowelTester2)).toEqual(0) // Expected output: 0
    expect(firstIndexVowel(vowelTester3)).toEqual(2) // Expected output: 2
  })
})

//ReferenceError: firstIndexVowel is not defined


// b) Create the function that makes the test pass.


// Create a function called firstIndexVowel that takes in a string as a parameter.
// Run a for loop starting at 0 index of the string and iterates through.
// Create conditional statement that if the index of the string === a, e, i, o, u, or y, it returns the index of the string.

// const vowelTester1 = "learn"
// const vowelTester2 = "academy"
// const vowelTester3 = "challenges"
//
const firstIndexVowel = (string) => {
  for(let i = 0; i < string.length; i++) {
if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u" || string[i] === "y") {
  return i
} }
}
