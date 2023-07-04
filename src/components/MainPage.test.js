import { shallow, mount } from 'enzyme';
import MainPage from './MainPage';

let mainWrapper;
beforeEach(() => {
    const mockProps = {
        searchValue: '',
        setSearchValue: jest.fn(),
        robots: [],
        isPending: false,
        setRobots: jest.fn()
    };

    mainWrapper = shallow(<MainPage {...mockProps} />);
});

it('test main wrapper is succesfull rendering or not.', () => {
    expect(mainWrapper).toMatchSnapshot();
});

it('test filtered robots', () => {
    const mockProps2 = {
        searchValue: 'a',
        setSearchValue: jest.fn(),
        robots: [
            {
                id: 1,
                name: 'steven',
                email: 'yeomandeveloper@gmail.com'
            }
        ],
        isPending: false,
        setRobots: jest.fn()
    };

    const mainWrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(mainWrapper2.instance().filteredRobots()).toEqual([]);
});

it('test pending result main wrapper', () => {
    const mockProps3 = {
        searchValue: 'a',
        setSearchValue: jest.fn(),
        robots: [],
        isPending: true,
        setRobots: jest.fn()
    };

    const mainWrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(mainWrapper3.instance().props.isPending).toBe(true);
});