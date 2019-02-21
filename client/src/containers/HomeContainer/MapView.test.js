/* eslint-env mocha, jest */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import MapView from './MapView';

describe('MapView', () => {
  const wrapper = shallow(<MapView />);
  it('should exist', () => {
    expect(wrapper).to.have.lengthOf(1);
  });
});
