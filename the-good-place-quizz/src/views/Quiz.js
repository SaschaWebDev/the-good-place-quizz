import React from 'react';

import Chevron from '../styles/chevron-left.png';
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
          <div class='question-text'>{this.state.question}</div>
        </div>

        <div class='lower-container'>
          <div class='middle-container'></div>
          <div class='middle-second-container'></div>
          <div class='middle-third-container'></div>

          <div class='answer-container'>
            <div class='answer answer-one' onClick={() => this.nextQuestion()}>
              <div class='answer-symbol'>a</div>
              <div class='answer-text'>{this.state.answerOne}</div>
            </div>
            <div class='answer answer-two' onClick={() => this.nextQuestion()}>
              <div class='answer-symbol'>b</div>
              <div class='answer-text'>{this.state.answerTwo}</div>
            </div>
            <div
              class='answer answer-three'
              onClick={() => this.nextQuestion()}>
              <div class='answer-symbol'>c</div>
              <div class='answer-text'>{this.state.answerThree}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
