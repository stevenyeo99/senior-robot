import { connect } from 'react-redux';

import { setSearchField, fetchRobots } from '../actions';

import MainPage from '../components/MainPage';

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

    return (
        <MainPage {...props} />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);