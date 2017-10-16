import React from 'react';
import {shallow} from 'enzyme';

import {TopNav} from './top-nav';
import {newGame, toggleInfoModal} from './../actions';

describe('<TopNav/>', () => {

  it ('Renders without crashing', () => {
    const dispatch = jest.fn();
    const shallowTopNav = shallow(<TopNav/>);

  });

  
  it ('Calls newgame when the right element is clicked', () => {

    const dispatch = jest.fn();
    const shallowTopNav = shallow(<TopNav dispatch={dispatch}/>);
    shallowTopNav.find('.new').simulate('click', {preventDefault() {}});
    let newGameInstance = newGame();
    newGameInstance.correctAnswer = dispatch.mock.calls[0][0].correctAnswer;
    console.log(dispatch.mock.calls[0][0]);
    expect(dispatch).toBeCalledWith(newGameInstance);

  });

  it ('Calls toggleinfoModal when the right element is clicked', () => {

    const dispatch = jest.fn();
    const shallowTopNav = shallow(<TopNav dispatch={dispatch}/>);

    const topNavInstance = shallowTopNav.instance();
    topNavInstance.toggleInfoModal = function() {
      this.props.dispatch(toggleInfoModal());
    };
    shallowTopNav.find('.what').simulate('click');
    expect(dispatch).toBeCalledWith(toggleInfoModal());

  });
});