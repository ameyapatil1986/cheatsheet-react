
// filter.
const jobs = [
    { id:1, isActive: true},
    {id: 2, isActive: false}
];

const activeJobs = jobs.filter(job => job.isActive);

// map.
const colors = ['red', 'green', 'blue'];
const items = colors.map(color =>  `<li>${color}</li>`)

// rendering it inside a component
<ul>
    { this.state.myArray.map(item => <li key={item}>{item}<li>) }
</ul>    