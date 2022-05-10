
// for array.
const first = [1, 2, 3];
const second = [3, 4, 5];
const combined = [...first, 'a', ...second, 'b']

// for object.
const first = { name: 'Mosh' };
const second = { job: 'Instructor' };
const combined = {...first, ...second, location: 'Australia'}
console.log(combined); // {name: 'Mosh', job: 'Instructor', location: 'Australia' }

// clone an object.
const clone = { ...first };

// Composing components -> CHAPTER: 10

state = {
    counters : [
        { id: 1, value: 4},
        { id: 2, value: 5},
        { id: 3, value: 6},
        { id: 4, value: 7},
    ]
}
// a spread operater clones an object and array.
// but, its a shallow clone.
// if an array contains objects then cloning array does not clone the objects at its indexes.
// thus we need to clone those too.
handleIncrement = counter => {
    // clone the array (a shallow copy )
    const counters = [...this.state.counters];
    // clone the counter.
    const index = counters.indexOf(counter);
    counters[index] = {...counters[index]};
    counters[index].value++;

    this.setState ({counters})
}

// there are alternate way to code this:
handleIncrement = counter => {
    // clone the array (a shallow copy )
    const clonedCounters = [...this.state.counters];
    // clone the counter.
    const clonedCounter = {...counters[index]};
    clonedCounter.value++;

    clonedCounters[counters.indexOf(counter)] = clonedCounter;    

    this.setState ({clonedCounters})
}


