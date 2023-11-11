const input = document.querySelector("input"),
      guess = document.querySelector(".guess"),
      congratulations = document.querySelector(".congratulations"),
      congratulationsContainer = document.querySelector(".congratulations-container"),
      checkButton = document.querySelector("button"),
      remainChances = document.querySelector(".chances");

input.focus();

let randomNum = Math.floor(Math.random() * 100),
    chance = 10;

checkButton.addEventListener("click", () => {
    chance--;

    let inputValue = parseInt(input.value);

    if (inputValue === randomNum) {
        congratulations.textContent = "Congratulations!"; // Show congratulations message
        guess.textContent = ""; // Clear the guess message
        input.disabled = true;
        checkButton.textContent = "Replay";
        congratulations.style.color = "#333"; // Set style for congratulations message
    } else if (inputValue > randomNum && inputValue < 100) {
        guess.textContent = "Your guess is high";
        remainChances.textContent = chance;
        congratulations.textContent = ""; // Clear the congratulations message
        guess.style.color = "#333";
    } else if (inputValue < randomNum && inputValue > 0) {
        guess.textContent = "Your guess is low";
        remainChances.textContent = chance;
        congratulations.textContent = ""; // Clear the congratulations message
        guess.style.color = "#333";
    } else {
        guess.textContent = "Your number is invalid";
        remainChances.textContent = chance;
        congratulations.textContent = ""; // Clear the congratulations message
        guess.style.color = "#De0011";
    }

    if (chance < 0) {
        window.location.reload();
    }
});
