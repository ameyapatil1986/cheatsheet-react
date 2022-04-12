
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