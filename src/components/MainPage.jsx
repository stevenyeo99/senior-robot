import { Component } from 'react';

import SearchBox from "./SearchBox";
import CardList from "./CardList";
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import Header from './Header';

import './MainPage.css';

class MainPage extends Component {

    componentDidMount() {
        this.props.setRobots();
    }

    filteredRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchValue.toLowerCase());
        });
    }

    render() {
        return (this.props.isPending) ?
        <h1>Loading</h1>
        :
        (
            <div className='tc'>
                <Header />
                <SearchBox searchValue={this.props.searchValue} searchHandler={this.props.setSearchValue} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList items={this.filteredRobots()} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
};

export default MainPage;