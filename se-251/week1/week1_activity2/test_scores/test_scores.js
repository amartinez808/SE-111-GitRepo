//Antonio Martinez
//Student test scores
//Activity 2B
//SE251


"use strict";
//initialize
let total = 0;
let tTestScore = "";
//get input
tTestScore = prompt("Enter test score #1");
const score1 = parseInt(tTestScore);

tTestScore = prompt("Enter test score #2");
const score2 = parseInt(tTestScore);


tTestScore = prompt("Enter test score #3");
const score3 = parseInt(tTestScore);

//get & store total sum
total = score1 + score2 + score3;

//figure out avg.
const average = parseFloat(total / 3);

//display input/answer
const display = `<p>Score 1 = ${score1}</p>
              <p>Score 2 = ${score2}</p>
              <p>Score 3 = ${score3}</p>
              <p>Average Score = ${average}</p>`

document.write(display);