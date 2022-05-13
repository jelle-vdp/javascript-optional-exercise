/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let randomNum = Math.floor(Math.random() * 101);
    let amountGuesses = 0;

    const madeGuess = () => {
        document.getElementById("guess").value = "";
        amountGuesses++;
        console.log(amountGuesses);
    }

    document.getElementById("run").addEventListener("click", () => {

            let guess = document.getElementById("guess").value;

            console.log(randomNum);

        if (guess.length === 0 || +guess < 0 || +guess > 100 || isNaN(+guess)){
            window.alert("Please fill in a number between 0 and 100");
            madeGuess();
        } else if (+guess > randomNum){
            window.alert(`${guess} is higher than the number you have to guess`);
            madeGuess();
        } else if (+guess < randomNum){
            window.alert(`${guess} is lower than the number you have to guess`);
            madeGuess();
        } else if (+guess === randomNum){
            madeGuess();
            window.alert(`Correct! ${randomNum} was the number you had to guess. You had to guess ${amountGuesses} times.`);
        };
    });

})();
