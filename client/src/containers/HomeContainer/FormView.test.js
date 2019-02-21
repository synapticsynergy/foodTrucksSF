/* eslint-env mocha, jest */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import FormView from './FormView';

describe('FormView', () => {
  const wrapper = shallow(<FormView />);
  it('should exist', () => {
    expect(wrapper).to.have.lengthOf(1);
  });
  it('should have a chid component', () => {
    expect(wrapper.children).to.have.lengthOf(1);
  });
});
