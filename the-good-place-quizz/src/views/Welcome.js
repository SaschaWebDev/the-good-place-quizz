import React from 'react';

import welcomeSVG from '../styles/welcome.svg';
import '../styles/Welcome.css';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class='welcome-container'>
        <div class='title noselect'>The Good Place</div>
        <div class='title-sub noselect'>
          Finde heraus, ob du ein guter Mensch bist, indem du dein Verhalten
          intuitiv beschreibst.
        </div>
        <img class='cta-svg noselect' src={welcomeSVG} />
        <button class='cta-button noselect'>Teste dich!</button>
      </div>
    );
  }
}

export default Welcome;
