

class Counter extends React.Component {
    
    styles = {
        fontSize: 50,
        fontWeight: "bold"
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count == 0 ? "warning" : "primary";
        return classes;
    }

    render() { 
        return <div>
            <span style={this.styles} ></span>
            <span style={ {fontSize: 30} }></span>
            <span className={this.getBadgeClasses()}></span>
        </div>;
    }

   


}
 
export default Counter;