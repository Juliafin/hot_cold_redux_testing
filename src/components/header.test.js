import React from 'react';
import {shallow} from 'enzyme';

import {Header} from './header';
import InfoModal from './info-modal';

describe('<Header/>', () => {

  it ('Mounts', () => {

    const shallowHeader = shallow(<Header showInfoModal={true} />);
    // console.log(shallowHeader.props().children);

  });

  it ('Renders the infomodal if the props are set properly', () => {
    const shallowHeader = shallow(<Header showInfoModal={true} />);
    expect(shallowHeader.find(InfoModal).exists()).toBe(true);

  });

  it ('Hides the infomodal if the props are set properly', () => {

    const shallowHeader = shallow(<Header showInfoModal={false} />);
    expect(shallowHeader.find(InfoModal).exists()).toBe(false);

  });
} );