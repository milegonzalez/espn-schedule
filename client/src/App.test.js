/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import axios from 'axios';
import App from './App';

jest.mock('./components/Schedule', () => 'schedule');

describe('App component', () => {
  it('should render App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Should call renderView', () => {
    const spy = jest.spyOn(App.prototype, 'renderView');
    const wrapper = mount(<App />);
    wrapper.instance().renderView();
    expect(spy).toHaveBeenCalled();
  });
});

describe('Schedule component', () => {
  it('should render Schedule component', () => {
    const tree = mount(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});

describe('API calls to database', () => {
  it('Should call componentDidMount', () => {
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
  it('Should fetch /espn/schedules', () => {
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    wrapper.instance().componentDidMount(axios.get('espn/schedules'));
    expect(spy).toHaveBeenCalled();
  });
});
// it("should render Schedule component", () => {
//   const tree = renderer.create(<Schedule/>).toJSON()
//   expect(tree).toMatchSnapshot();
// })