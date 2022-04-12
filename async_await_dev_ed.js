
// Link:                https://www.youtube.com/watch?v=_8gHHBlbziw
// To run this code:    node async_await_dev_ed.js

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("my name is promise-1");
    }, 2000)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("my name is promise-2");
    }, 2000)
});

// without async we get a run-time error.
async function foo() {
    var x = await promise1;
    let y;
    try {
        y = await promise2;
    } catch(e) {
        console.log("handling exception is blocking")
    }
    console.log("hurray")
    console.log(x);
    console.log(y)
}

foo();
// hip hip gets printed before hurray.
console.log("hip hip")