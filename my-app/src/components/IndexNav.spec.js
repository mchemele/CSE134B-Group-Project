import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import IndexNav from './IndexNav';
import Navbar from './Navbar';

const wrapper = shallow(<IndexNav />);
const navBar = shallow(<Navbar />);
let test1 = shallow(<div id="test">itworks</div>);
const test_a = test1.find('#test');
//const home = shallow(<Student_Home />);
//const messenger = shallow(<Messenger />);

describe('IndexNav Component', () => {
	it('Environment working', () => {
		expect(1).toBe(1);
		expect("mochaWorking").toBe("mochaWorking");
		//expect(test_a.text()).to.be.eql('itworks');
		expect(test_a.text()).toBe('itworks');
	});
	it('container rendered correctly', () => {
		expect(wrapper.find('.container').length).toBe(1);
	});
	it('Nav bar render all 4 items', () => {
		expect(wrapper.find('.nav-item').length).toBe(4);
	});
	it('Testing navbar content', () => {
		expect(navBar.find('#grades').children().text()).toEqual("GRADES");
		expect(navBar.find('#contact').children().text()).toEqual("CONTACT");
		expect(navBar.find('#forum').children().text()).toEqual("FORUM");
		expect(navBar.find('#assignments').children().text()).toBe("ASSIGNMENTS");
		expect(navBar.find('#practice').children().text()).toBe("PRACTICE");
	});	
	it('Testing index login content', () => {
		expect(wrapper.find('#student').children().text()).toEqual(" >>>STUDENT");
		expect(wrapper.find('#parent').children().text()).toEqual(" >>>PARENT");
		expect(wrapper.find('#teacher').children().text()).toEqual(" >>>TEACHER");
	});
	it('Testing username', () => {
		//expect(wrapper.find('.profile-name').children().text()).toEqual("Johnny Depp");
	});
});