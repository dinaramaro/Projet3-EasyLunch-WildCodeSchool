/* eslint-disable */

import React, { Component } from 'react';
import fetchedQuestions from '../../questionsList.json';
import './FAQ.scss';
import Question from './Question';

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      questionslist: fetchedQuestions,
    };
  }

  toggle(item) {
      this.state.questionsList.map(newQuestion => {
      if (newQuestion.id === item.id) {
        this.setState({ collapse: !this.state.collapse });
      }
    })
    
  }

  render() {
    return (
      <div className="conteneur">
        <Question toggle={this.toggle} questions={this.state.questionslist} collapse={this.state.collapse} />
      </div>
    );
  }
}

export default FAQ;

