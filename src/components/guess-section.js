import React from 'react';
import {connect} from 'react-redux';

import GuessForm from './guess-form';

import './guess-section.css';

export class GuessSection extends React.Component {

  render() {
    return (
      <section>
          <h2 id="feedback">{this.props.feedback}</h2>
          <GuessForm />
      </section>
  );

  }
    
}

const mapStateToProps = state => ({
    feedback: state.feedback
});

export default connect(mapStateToProps)(GuessSection);
