/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let ogString = document.getElementById("target").innerText;
    let ogStringArr = ogString.split(" ");
    let ogStringArrSpans = ogStringArr.map((string, i) => {
        return `<span>${string}</span>`
    });

    document.getElementById("target").innerHTML = ogStringArrSpans.join(" ");

    var fontClassNum = 0;

    const makeWaves = () => { 
    
        document.querySelectorAll("#target span").forEach((span, i, arr) => {

            const addClassName = () => {
                span.className = `font-${fontClassNum}`;
                console.log("fontClassNum is = ", fontClassNum);
                console.log("index is = ", i);
            };


            if (i < 5){
                fontClassNum = fontClassNum + 1;
                setTimeout(addClassName, 3000 * i);
            } else if (i < 9){
                fontClassNum = fontClassNum - 1;
                setTimeout(addClassName, 3000 * i);
            } else if (i < 15){
                fontClassNum = fontClassNum + 1;
                setTimeout(addClassName, 3000 * i);
            };

            if (i + 1 === arr.length){
                console.log("STOP");
            }
        });
    }

    makeWaves();

})();
