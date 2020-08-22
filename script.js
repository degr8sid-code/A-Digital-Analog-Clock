const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


//date object gets current date from system
var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);


//for hour, we've divided into 12 components, this also moves on the basis of minutes
//for seconds, we've divided into 60 components
//for minutes, we've divided into 60 components, and for every full minute, it moves, so second increment is also further divided by 60

//math logic variables

let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;


//a function to rerun every second
function runTheClock() {

//to prevent second hand from moving back again to zero, we'll have to math logic variables outside the function 
//it was happening because second hand would set to zero after reaching top

//now we get dates relying on the browser

    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;

//convert into degrees
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

//the function is called every second

var interval = setInterval(runTheClock, 1000);
