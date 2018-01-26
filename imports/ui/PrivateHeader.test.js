import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { PrivateHeader } from './PrivateHeader';

Enzyme.configure({ adapter: new Adapter() })

if (Meteor.isClient) {
  describe('PrivateHeader', function() {
    it('should set button text to logout', function() {
      const wrapper = mount(<PrivateHeader title='Test Title' handleLogout={() => {}}/>);
      const buttonText = wrapper.find('button').text();

      expect(buttonText).toBe('Logout');
    });

    it('shoud use title prop as h1 text', function() {
      const title = 'test title here';
      const wrapper = mount(<PrivateHeader title={title} handleLogout={() => {}}/>);
      const h1 = wrapper.find('h1').text();

      expect(h1).toBe(title);
    });

    it('should call the function', function() {
      const spy = expect.createSpy();
      spy();
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should call handleLogout on click', function() {
    const spy = expect.createSpy();
    const wrapper = mount(<PrivateHeader title={'anything'} handleLogout={spy} />);
    wrapper.find('button').simulate('click');

    expect(spy).toHaveBeenCalled();
  });
}