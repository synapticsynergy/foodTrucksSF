/* eslint-env mocha, jest */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import HomeContainer from '.';

describe('HomeContainer', () => {
  const wrapper = shallow(<HomeContainer />);
  it('should have a lenght of 1', () => {
    expect(wrapper).to.have.lengthOf(1);
  });
});
