import React from 'react';

import Chevron from '../styles/chevron-left.png';
import '../styles/Quiz.css';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 25,
      questionCount: 1,
      questionText:
        'Deine Oma hat Geburtstag und du möchtest ihr Blumen schenken',
      questionOne:
        'Deine Oma hat Geburtstag und du möchtest ihr Blumen schenken',
      questionTwo: 'Du bist durstig und kaufst dir Milch',
      questionThree: 'Du verreist in den Urlaub nach Ungarn',
      questionFour: 'Du möchtest deine Stromrechnung senken',
    };
  }

  goBack = () => {
    if (this.state.questionCount === 1) {
      this.setState({
        percentage: 25,
        questionText: this.state.questionOne,
      });
      this.props.history.push('/');
    }
  };

  render() {
    return (
      <div class='quiz-container noselect'>
        <div class='upper-container'>
          <div class='upper-info-container'>
            <div class='back-button' onClick={() => this.goBack()}>
              <img
                class='cta-svg noselect'
                src={Chevron}
                alt='Icon of a chevron pointing left.'
              />
            </div>
            <div class='quiz-counter'>
              <div class='quiz-counter-current'>
                0{this.state.questionCount}
              </div>
              <div class='quiz-counter-remaining'>/ 04</div>
            </div>
          </div>
          <div className='progress-bar'>
            <div
              className='filler'
              style={{ width: `${this.state.percentage}%` }}
            />
          </div>
          <div class='question-text'>{this.state.questionText}</div>
        </div>

        <div class='lower-container'>
          <div class='middle-container'></div>
          <div class='middle-second-container'></div>
          <div class='middle-third-container'></div>
          TEST
        </div>
      </div>
    );
  }
}

export default Quiz;
