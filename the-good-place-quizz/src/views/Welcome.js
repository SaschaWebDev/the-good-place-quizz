import React from 'react';

import welcomeSVG from '../styles/welcome2.svg';
import '../styles/Welcome.css';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  redirectToQuiz = () => {
    this.props.history.push('/quiz');
  };

  render() {
    return (
      <div class='welcome-container'>
        <div class='title noselect'>The Good Place</div>
        <div class='title-sub noselect'>
          Hast du einen Platz im Good Place verdient? Beantworte einfach die
          Fragen intuitiv.
        </div>
        <img
          class='cta-svg noselect'
          src={welcomeSVG}
          alt='Illustraition of a sitting woman with a laptop in red.'
        />
        <button
          class='cta-button noselect'
          onClick={() => this.redirectToQuiz()}>
          Teste dich!
        </button>
      </div>
    );
  }
}

export default Welcome;
