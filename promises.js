
// LINK: https://www.youtube.com/watch?v=_8gHHBlbziw
// to run this code simply do: node promises.js

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve code is never reached since it appears code is returned after reject statement.
        reject("my name is don"); 
        // if resolve was used before reject, then reject would never be reached.
        resolve("my name is anothony gonzalves");

        // reject triggers "catch" the same way as resolve triggers "then"
    }, 2000)
});

function foo() {
    // then and catch get executed 'once' result is objected from backend server.
    promise.then(a => console.log(a)).catch(b => console.log(b));
    // hello is printed before either of the console.log's in the then or catch.
    // in other words, the next line after promise gets executed before backend server responds.
    console.log("hello");

    setTimeout(() => {
        // both then and catch return promises.
        var x = promise.then(a => console.log(a)).catch(b => 10);
        // x is a promise, not '10'.
        // this is the foundation of another concept called "promise chaining"
        console.log(x)
    }, 2500);
}

foo();