import React from 'react';

import '../styles/Result.css';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*  redirectToQuiz = () => {
    this.props.history.push('/quiz');
  }; */

  resetQuiz = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div class='result-container'>
        <div class='result-title noselect'>The Bad Place</div>
        <div class='result-title-sub noselect'>
          Beflissen, leider haben die Konsequenzen deiner Handlungen dir ein
          Leben im Bad Place verschafft.
        </div>
        {/* <img
          class='cta-svg noselect'
          src={welcomeSVG}
          alt='Illustraition of a sitting woman with a laptop in red.'
        /> */}
        <button class='result-cta-button' onClick={() => this.resetQuiz()}>
          Versuch es nochmal!
        </button>
      </div>
    );
  }
}

export default Result;
