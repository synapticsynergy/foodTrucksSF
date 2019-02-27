/* eslint-env mocha, jest */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ListView from '.';

describe('ListView', () => {
  const wrapper = shallow(<ListView />);
  it('should exist', () => {
    expect(wrapper).to.have.lengthOf(1);
  });
  it('should have a truckList state', () => {
    wrapper.setState({ truckList: [] });
    expect('truckList' in wrapper.state()).to.equal(true);
  });
  it('should have a ListView component', () => {
    expect(wrapper.children).to.have.lengthOf(1);
  });
});
