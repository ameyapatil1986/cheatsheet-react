
class Counter extends React.Component {
    
    state = {
        count: 0,
        tags: []
    };

    // an "if else" should be in its own function.
    // a simple "if without else" can be inside a render.
    renderTags() {
        if (this.state.tags == 0) return <p>how let dogs out</p>
        return <p> who who who</p>
    }

    render() { 
        return 
            <div>
                // an "if else" should be in its own function.
                // a simple "if without else" can be inside a render.
                {this.state.tags == 0 && "Hey I am empty"}
                {this.renderTags()}
            </div>
    }
}
 
export default Counter;