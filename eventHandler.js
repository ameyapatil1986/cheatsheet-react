class EventHandler extends React.Component {
    
    // when a method is passed as a callback, this is rebinded from calling object to window object.
    // arrow function will not rebind this to a window object.
    handleIncrement = () => {
        console.log(this);
    }
    
    handleIncrementWithArgument = product => {
        console.log(product)
        this.setState({count : this.state.count + 1});
    }
    
    render() { 
        return 
            (<div>
                <button onClick={this.handleIncrement()}></button>
                <button onClick={() => this.handleIncrement(product)}></button>
            </div>);
    }
}
 
export default EventHandler;