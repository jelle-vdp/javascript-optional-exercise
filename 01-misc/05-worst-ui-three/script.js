/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const target = document.getElementById("target");
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input, index) => {

        let maxVal = +input.dataset.max;
        let minVal = +input.dataset.min;

        let outputId = `fix-${input.id}`;

        let fieldVal = +input.value;

        const count = () => {
            fieldVal = (fieldVal + 1);
            input.value = fieldVal.toLocaleString('en-US', {
                minimumIntegerDigits: 2
            });
            if (fieldVal > (maxVal - 1)){
                clearInterval(countInterval);
            }
        };

        const countInterval = setInterval(count, 200);

        document.getElementById(outputId).addEventListener("click", () => {
            clearInterval(countInterval);
            let stringArr = target.innerText.split("");
            if (index === 0){
                stringArr.splice(index + 1, 3, fieldVal);
            } else {
                stringArr.splice((index * 2) + 2, 2, fieldVal);
            }
            target.innerText = stringArr.join("");
            fieldVal = 0;
        });

    });

})();
