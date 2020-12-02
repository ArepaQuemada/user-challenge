import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import FilterButton from "../FilterButton";


describe('FilterButton test', () => {
  test('render with name props', () => {
    const wrapper = shallow(<FilterButton filterName="name"/>);
    expect(wrapper.find('#filter-name').text()).toContain('name');
  });
});