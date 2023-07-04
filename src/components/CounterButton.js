import { Component } from "react";

class CounterButton extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    updateCount = () => {
        console.log('updateCount');
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        console.log('CounterButton Render', this.state.count);
        return (
            <button id='button' color={this.props.color} onClick={this.updateCount}>Count: {this.state.count}</button>
        )
    }
}

export default CounterButton;