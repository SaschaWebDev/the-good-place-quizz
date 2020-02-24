import React from 'react';

import Chevron from '../styles/chevron-left.png';
import Ripple from '../Components/Ripple.js';
import '../styles/Quiz.css';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 25,
      questionCount: 1,
      question: 'Deine Oma hat Geburtstag und du möchtest ihr Blumen schenken',
      questionFour: 'Du möchtest deine Stromrechnung senken',
      answerOne: 'Auslandimport günstiger Blumen',
      answerTwo: 'Blumenkauf im lokalen Blumenladen',
      answerThree: 'Blumen selber pflücken',
    };
  }

  goBack = () => {
    if (this.state.questionCount === 1) {
      this.setState({
        questionCount: 1,
        percentage: 0,
        question:
          'Deine Oma hat Geburtstag und du möchtest ihr Blumen schenken',
        answerOne: 'Auslandimport günstiger Blumen',
        answerTwo: 'Blumenkauf im lokalen Blumenladen',
        answerThree: 'Blumen selber pflücken',
      });
      this.props.history.push('/');
    }

    if (this.state.questionCount === 2) {
      this.setState({
        questionCount: 1,
        percentage: 25,
        question:
          'Deine Oma hat Geburtstag und du möchtest ihr Blumen schenken',
        answerOne: 'Auslandimport günstiger Blumen',
        answerTwo: 'Blumenkauf im lokalen Blumenladen',
        answerThree: 'Blumen selber pflücken',
      });
    }

    if (this.state.questionCount === 3) {
      this.setState({
        questionCount: 2,
        percentage: 50,
        question:
          'Für dein Lieblings- rezept benötigst du noch etwas frische Milch',
        answerOne: 'Frischmilchkauf beim regionalen Bauern',
        answerTwo: 'Kauf von H-Milch im Supermarkt',
        answerThree: 'Kauf von veganer Mandelmilch',
      });
    }

    if (this.state.questionCount === 4) {
      this.setState({
        questionCount: 3,
        percentage: 75,
        question: 'Du planst für deine nächste Reise einen Trip nach Ungarn',
        answerOne: 'Suche nach günstigen Flug bei Billig-Airline',
        answerTwo: 'Mieten von bezahlbaren Auto bei Sixt',
        answerThree: 'Erwerb eines Bahnticket bei DB',
      });
    }
  };

  nextQuestion = () => {
    console.log('TRIGGERED');
    if (this.state.questionCount === 1) {
      this.setState({
        questionCount: 2,
        percentage: 50,
        question:
          'Für dein Lieblings- rezept benötigst du noch etwas frische Milch',
        answerOne: 'Frischmilchkauf beim regionalen Bauern',
        answerTwo: 'Kauf von H-Milch im Supermarkt',
        answerThree: 'Kauf von veganer Mandelmilch',
      });
    }

    if (this.state.questionCount === 2) {
      this.setState({
        questionCount: 3,
        percentage: 75,
        question: 'Du planst für deine nächste Reise einen Trip nach Ungarn',
        answerOne: 'Suche nach günstigen Flug bei Billig-Airline',
        answerTwo: 'Mieten von bezahlbaren Auto bei Sixt',
        answerThree: 'Erwerb eines Bahnticket bei DB',
      });
    }

    if (this.state.questionCount === 3) {
      this.setState({
        questionCount: 4,
        percentage: 100,
        question: 'Du versuchst deine Strom- rechnung zu reduzieren',
        answerOne: 'Vertrag mit günstigen Atomstromanbieter',
        answerTwo: 'Solaranlagen am Dach anbringen',
        answerThree: 'Vertrag mit Stromanbieter erneuerbarer Energien',
      });
    }
  };

  render() {
    return (
      <div className='quiz-container noselect'>
        <div className='upper-container'>
          <div className='upper-info-container'>
            <div className='back-button' onClick={() => this.goBack()}>
              <img
                className='cta-svg noselect'
                src={Chevron}
                alt='Icon of a chevron pointing left.'
              />
            </div>
            <div className='quiz-counter'>
              <div className='quiz-counter-current'>
                0{this.state.questionCount}
              </div>
              <div className='quiz-counter-remaining'>/ 04</div>
            </div>
          </div>
          <div className='progress-bar'>
            <div
              className='filler'
              style={{ width: `${this.state.percentage}%` }}
            />
          </div>
          <div className='question-text'>{this.state.question}</div>
        </div>

        <div className='lower-container'>
          <div className='middle-container'></div>
          <div className='middle-second-container'></div>
          <div className='middle-third-container'></div>

          <div className='answer-container'>
            <Ripple
              className='answer answer-one btn'
              onClick={() => this.nextQuestion()}>
              <span className='ion-help-circled'></span>
              <div className='answer-symbol'>a</div>
              <div className='answer-text'>{this.state.answerOne}</div>
            </Ripple>
            <Ripple
              className='answer answer-two btn'
              onClick={() => this.nextQuestion()}>
              <span className='ion-help-circled'></span>
              <div className='answer-symbol'>b</div>
              <div className='answer-text'>{this.state.answerTwo}</div>
            </Ripple>
            <Ripple
              className='answer answer-three btn'
              onClick={() => this.nextQuestion()}>
              <span className='ion-help-circled'></span>
              <div className='answer-symbol'>c</div>
              <div className='answer-text'>{this.state.answerThree}</div>
            </Ripple>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
