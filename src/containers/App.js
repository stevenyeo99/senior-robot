import { useEffect } from 'react';
import { connect } from 'react-redux';

import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField, fetchRobots } from '../actions';

import './App.css';

const mapStateToProps = (state) => {
    return {
        searchValue: state.robotReducers.searchValue,
        robots: state.fetchRobotReducers.robots,
        isPending: state.fetchRobotReducers.isPending,
        error: state.fetchRobotReducers.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchValue: (event) => {
            dispatch(setSearchField(event.target.value));
        },
        setRobots: () => dispatch(fetchRobots())
    }
};

const App = (props) => {

    const {searchValue, setSearchValue, robots, isPending, setRobots } = props;

    useEffect(() => {
        setRobots();
        console.log('Effect');
    }, [setRobots]);

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    return (isPending) ?
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