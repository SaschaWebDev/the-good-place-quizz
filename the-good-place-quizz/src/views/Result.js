import React from 'react';

import DragonAnimation from '../Components/DragonAnimation.js';
import '../styles/Result.css';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ hidden: true });
    }, 1100);
  }

  resetQuiz = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className='result-container noselect'>
        <div className='result-title noselect'>The Bad Place</div>
        <div className='result-title-sub noselect'>
          Beflissen, leider haben die Konsequenzen deiner Handlungen dir ein
          Leben im Bad Place verschafft.
        </div>
        {/* <img
          class='cta-svg noselect'
          src={welcomeSVG}
          alt='Illustraition of a sitting woman with a laptop in red.'
        /> */}
        {this.state.hidden ? (
          <DragonAnimation />
        ) : (
          <div className='loading'>Loading...</div>
        )}

        <button
          className='result-cta-button noselect'
          onClick={() => this.resetQuiz()}>
          Versuch es nochmal!
        </button>
      </div>
    );
  }
}

export default Result;
