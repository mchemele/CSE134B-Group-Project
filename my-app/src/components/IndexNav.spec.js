import React from 'react';
import expect from 'jest-cli';
import { shallow, mount } from 'enzyme';
import IndexNav from './IndexNav';


const wrapper = shallow(<IndexNav />);


describe('IndexNav Component', () => {
  it('renders h1', () => {
    expect(wrapper.find('h1').text()).toEqual('Hello World')
  })
  it('renders p', () => {
    expect(wrapper.find('p').text()).toEqual('Welcome to my world')
  })
});