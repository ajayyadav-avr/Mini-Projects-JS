const secret = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guess;

do {
    const input = prompt("Guess a number between 1 and 100:");
    
    // 1. Handle Cancel button or empty input gracefully
    if (input === null || input.trim() === "") {
        alert("Game exited. Refresh to play again!");
        break; 
    }
    
    guess = Number(input);
    attempts++;

    // 2. Validate that the input is actually a valid number
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        continue;
    }

    // 3. Give feedback via alert so the user can see it instantly
    if (guess > secret) {
        alert("📉 Too high!");
    } else if (guess < secret) {
        alert("📈 Too low!");
    } else {
        alert(`🎉 You got it in ${attempts} attempts!`);
    }

} while (guess !== secret);