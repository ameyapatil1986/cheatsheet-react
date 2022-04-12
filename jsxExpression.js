
// A JSX expression can be assigned to a variable,
// returned from a function
// passed to a function
// think of it as a first class citizen.
formatCount() {
    const count = 0;
    const x = <h1>Zero</h1>;
    return count == 0 ? x : count;
}

class Counter extends React.Component {
    
    state = {
        count: 0,
        tags: []
    };

    renderTags() {
        if (this.state.tags == 0) return <p>how let dogs out</p>
        return <p> who who who</p>
    }

    render() { 
        return 
            <div>
                {this.renderTags()}
            </div>
    }
}
 
export default Counter;