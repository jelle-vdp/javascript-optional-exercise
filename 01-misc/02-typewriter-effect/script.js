/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const target = document.getElementById("target");

    const text = target.innerText;
    target.innerText = "";
    const textArr = text.split("");
    textArr.forEach((ch, i) => {
        setTimeout(() => {
            target.innerHTML = target.innerHTML + ch;
        }, 500 * (i + 1));
    });

})();
