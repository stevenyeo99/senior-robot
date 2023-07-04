import { shallow } from 'enzyme';

import CardList from './CardList';

it('test card list component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'Steven',
            email: 'yeomandeveloper@gmail.com'
        }
    ]

    expect(shallow(<CardList items={mockRobots} />)).toMatchSnapshot();
});