/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    if(localStorage.getItem('incrementValue')){
        document.getElementById("target").innerText = localStorage.getItem('incrementValue');
    }

    document.getElementById("increment").addEventListener("click", () => {
        let currentVal = +document.getElementById("target").innerText;
        currentVal++;
        localStorage.setItem('incrementValue', currentVal);
        document.getElementById("target").innerText = currentVal.toString();
    })

})();
