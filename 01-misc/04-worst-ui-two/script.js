/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   const target = document.getElementById("target");
   const buttons = document.querySelectorAll("button");

   console.log(buttons);

   buttons.forEach(btn => {
       let maxVal = +btn.dataset.max;
       let minVal = +btn.dataset.min;

       btn.addEventListener("click", () => {
           let randomNum = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
           console.log(randomNum);
           let ogNum = +target.innerText.substring(1);
           target.innerText = `+${ogNum + randomNum}`
       });

    });

})();
