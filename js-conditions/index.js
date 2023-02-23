let score = 4;
if(isCorrect)
score = score + 1
console.log(score++);
console.log(++score);

if (isCorrect) {
    ++score;
} else {
    --score;
}

cost winner = score > 4;

if(winner){
    console.log ("Well Done")
}
else
{
    console.log ("You Lost!")
}


const time = 10;

if (time> 6 && time < 12)
{ console.log ("Good Morning!");
}
else if (time>12 && time <18)
{
    console.log("Good afternoon!")
}
else if (time===12);
console.log ("Guten Appetite!")