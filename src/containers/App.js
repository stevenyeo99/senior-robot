import { Component } from 'react';

import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            searchValue: '',
            robots: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(results => {
                this.setState({
                    robots: results
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    searchHandler = (event) => {
        this.setState({
            searchValue: event.target.value
        });
    };

    render() {
        const { robots, searchValue } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchValue.toLowerCase());
        });

        return (!robots.length) ?
            <h1>Loading</h1>
            :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchValue={this.state.searchValue} searchHandler={this.searchHandler} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList items={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
};

export default App;