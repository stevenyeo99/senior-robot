import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField } from '../actions';

import './App.css';

const mapStateToProps = (state) => {
    return {
        searchValue: state.searchValue
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchValue: (event) => {
            dispatch(setSearchField(event.target.value));
        }
    }
};

const App = (props) => {

    const {searchValue, setSearchValue} = props;
    const [robots, setRobots] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(results => {
                setRobots(results);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    return (!robots.length) ?
        <h1>Loading</h1>
        :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchValue={searchValue} searchHandler={setSearchValue} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList items={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);