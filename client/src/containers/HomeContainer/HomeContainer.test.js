/* eslint-env mocha, jest */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import HomeContainer from '.';

describe('HomeContainer', () => {
  const wrapper = shallow(<HomeContainer />);
  it('should exist', () => {
    expect(wrapper).to.have.lengthOf(1);
  });
  it('should have a div with a className homeContainer', () => {
    expect(wrapper.find('.homeContainer')).to.have.lengthOf(1);
  });
  it('should have a ListView component', () => {
    expect(wrapper.children).to.have.lengthOf(1);
  });
});
