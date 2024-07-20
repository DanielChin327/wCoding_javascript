// Write out three different things using functions


// Write out a guess the number game
// Write out a rock paper scissor game


// Guess out the number


let chooseDifficulty = (difficulty) =>{
while(true){
difficulty= prompt("choose a difficulty: (easy/mid/hard)")
if (difficulty !== "easy" && difficulty !== "mid" && difficulty !== "hard") {
    console.log (`Error input. Wrote ${difficulty}. Write easy / mid / hard.`)
}
else {
    return difficulty;
}
}
}
    
let randomNum = () => {
let difficulty = chooseDifficulty();
let randomNum;
switch (difficulty) {
case "easy":
randomNum = (Math.floor(Math.random() * 5) + 1)
break
case "mid":
randomNum = (Math.floor(Math.random() * 20) + 1)
breaks
case "hard":
randomNum = (Math.floor(Math.random() * 100) + 1)
break
default:
console.log("bug in randomNum Function")
break;
}
return randomNum;
}
