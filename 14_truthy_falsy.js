// truthy value
// "0", "false", " ", [], {}, function


// falsy value
// 0, false, "", null, undefined, NAN, -0, BIGINT 0n


// nullish operators
// to handle null and undefined value It will print the next value
let val1 = null ?? 10
//console.log(val1)

let val2 = undefined ?? 10 ?? 20
//console.log(val2)

// ternary operator
let score = 195
let min_criteria = 100
let phase = 1

let result1 = score >= min_criteria ? "Pass the exam.." : "Sorry, Please try again"
//console.log(result1);

let x = 10;
let y = 20;

let result2 = (x > y) ? "x is greater than y" : (x < y) ? "x is less than y" : "x is equal to y";

//console.log(result2);

let result3 = (score >= min_criteria && phase == 1) ? "Congratulations, you've passed the exam." : "Sorry, Please try again"
console.log(result3)
