import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import { shallowWithState } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import { mountWithState } from 'enzyme-redux';
import { mountWithStore } from 'enzyme-redux';
import {combineReducers} from 'redux';

describe('Reducers Unit test', () => {
	it('Check Enzyme Redux shallow with store', () => {
		
	const ReactComponent = () => (<div>dummy component</div>);
		  const expectedState = 'expectedState';
		  const mapStateToProps = (state) => ({
			state,
		  });
		  const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
		  const component = shallowWithStore(<ConnectedComponent />, createMockStore(expectedState));
		  expect(component.props().state).toBe(expectedState);

	});

	const ReactComponent = () => (<div>dummy component</div>);
	it('Check enzyme shallow with state redux', () => {
		const expectedState = 'expectedState';
		const mapStateToProps = (state) => ({
		  state,
		});
		const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
		const component = shallowWithState(<ConnectedComponent />, expectedState);
		expect(component.props().state).toBe(expectedState);
  	});

	it('check enzyme redux shallow with dispatch', () => {
      const action = {
        type: 'type',
      };
      const mapDispatchToProps = (dispatch) => ({
        dispatchProp() {
          dispatch(action);
        },
      });
      const store = createMockStore();
 
      const ConnectedComponent = connect(undefined, mapDispatchToProps)(ReactComponent);
      const component = shallowWithStore(<ConnectedComponent />, store);
      component.props().dispatchProp();
      expect(store.isActionDispatched(action)).toBe(true);
    });

	const tasksReducer = (state=[], action) => {
	  switch(action.type) {
	    case 'ADD_TASK':
	      state = 1;
	      break;
	    case 'DELETE_TASK':
	      state = 2;
	      break;
	  }
	  return state;
	},
	reducers = combineReducers({
	  tasks:tasksReducer
	});
	
	it('check our tasks reducer function', () => {
		expect(tasksReducer(1, "ADD_TASK")).toBe(1);
		expect(tasksReducer(2, "DELETE_TASK")).toBe(2);
	});

});