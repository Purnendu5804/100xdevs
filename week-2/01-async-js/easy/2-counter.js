
// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let counter = 0;

function incrementCounter () {
    console.log("Current Value :" , counter);
    counter ++;


    if (counter <= 10) {
        setTimeout(incrementCounter,1000);
    }
}

incrementCounter();








































































// (Hint: setTimeout)