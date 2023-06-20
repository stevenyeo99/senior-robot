import { Component } from 'react';

import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from '../components/Scroll';

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
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchValue.toLowerCase());
        });

        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>;
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchValue={this.state.searchValue} searchHandler={this.searchHandler} />
                    <Scroll>
                        <CardList items={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
};

export default App;