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

    var indexS = 0;

    const makeWaves = () => { 
    
        document.querySelectorAll("#target span").forEach((span, i) => {

            if (i < 4){
                indexS = indexS++;
                setTimeout(() => {
                    console.log(indexS);
                    span.className = `font-${indexS}`
                }, 1000 * (i + 1));
            } else if (i < 8){
                indexS = indexS--;
                setTimeout(() => {    
                    console.log(indexS);            
                    span.className = `font-${indexS}`
                }, 1000 * (i + 1));
            } else if (i < 12){
                indexS = indexS++; 
                setTimeout(() => {    
                    console.log(indexS);            
                    span.className = `font-${indexS}`
                }, 1000 * (i + 1));
            };
        });
    }

    makeWaves();

})();
