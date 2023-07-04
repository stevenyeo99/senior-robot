import { shallow } from 'enzyme';

import CounterButton from './CounterButton';

it('test counter button component', () => {
    expect(shallow(<CounterButton color='red' />)).toMatchSnapshot();
});

it('test counter button handler', () => {
    const button = shallow(<CounterButton color='green' />);
    button.find('#button').simulate('click');
    button.find('#button').simulate('click');
    expect(button.state()).toEqual({count: 2});
    console.log(button.props());
});