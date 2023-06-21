import { Component } from 'react';

class ErrorBoundry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        });
    }

    render() {
        const { hasError } = this.state;

        if (hasError) {
            return <h1>Error Card List...</h1>;
        }

        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

export default ErrorBoundry;