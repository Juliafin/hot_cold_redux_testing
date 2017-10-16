import React from 'react';
import {shallow} from 'enzyme';

import {toggleInfoModal} from '../actions';

import {InfoModal} from './info-modal';

describe('<InfoModal/>', () => {

  it ('Mounts without error', () => {
    const dispatch = jest.fn();
    const shallowInfoModal = shallow(<InfoModal dispatch={dispatch}/>); 
  });

  it ('Hides when the hide click is triggered', () => {
    const dispatch = jest.fn();
    const shallowInfoModal = shallow(<InfoModal dispatch={dispatch}/>);
    
    let infoModalInstance = shallowInfoModal.instance();
    infoModalInstance.hide = function() {
      this.props.dispatch(toggleInfoModal());
    } 
    console.log (infoModalInstance.hide);
    shallowInfoModal.find('a.close').simulate('click');
    expect(dispatch).toHaveBeenCalledWith(toggleInfoModal());
    expect(dispatch.mock.calls[0][0]).toEqual(toggleInfoModal());
    
  });

  it ('Renders the right text', () => {
    const dispatch = jest.fn();
    const shallowInfoModal = shallow(<InfoModal dispatch={dispatch}/>);

    expect(shallowInfoModal.find('div.content > h3').text()).toBe('What do I do?');
    const expectedParagraphText = ['This is a Hot or Cold Number Guessing Game. The game goes like this: ', 'So, Are you ready?'];
    const paragraphText = shallowInfoModal.find('div.content p').map(node => node.text());
    expect(expectedParagraphText).toEqual(paragraphText);
    
    const expectedListText = ['1. I pick a random secret number between 1 to 100 and keep it hidden.', '2. You need to guess until you can find the hidden secret number.', '3. You will get feedback on how close ("hot") or far ("cold") your guess is.'];
    const listText = shallowInfoModal.find('ul').children().map(node => node.text());
    expect(expectedListText).toEqual(listText);

  });
});