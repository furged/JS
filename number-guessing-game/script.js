const answer = Math.floor(Math.random() * 10) + 1;
let guesses = 0;

document.getElementById("submitButton").onclick = function() {
    let guess = document.getElementById("guessField").value;
    guesses++;

    if (guess == answer) {
        alert("Congratulations! You guessed the number in " + guesses + " tries.");
        // alert gives the little pop up box 
    } else if (guess < answer) {
        alert("Too low! Try again.");
    } else {
        alert("Too high! Try again.");
    }

}