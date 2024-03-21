import React, { Component } from 'react';

class StringManipulator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleIncrement = () => {
    const { text } = this.state;
    const updatedText = text + 'A'; // Agregar una letra al final del string
    this.setState({ text: updatedText });
  };

  handleDecrement = () => {
    const { text } = this.state;
    const updatedText = text.slice(0, -1); // Quitar la última letra del string
    this.setState({ text: updatedText });
  };

  render() {
    const { text } = this.state;

    return (
      <div>
        <h2>Texto: {text}</h2>
        <button onClick={this.handleIncrement}>Incrementar</button>
        <button onClick={this.handleDecrement}>Decrementar</button>
      </div>
    );
  }
}

export default StringManipulator;
