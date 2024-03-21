import React,{Component} from "react";

class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    handleIncrement = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1
      }));
    };
  
    handleDecrement = () => {
      this.setState((prevState) => ({
        count: prevState.count - 1
      }));
    };
  
    render() {
      const { count } = this.state;
  
      return (
        <div>
          <h2>Contador: {count}</h2>
          <button onClick={this.handleIncrement}>Incrementar</button>
          <button onClick={this.handleDecrement}>Decrementar</button>
        </div>
      );
    }
  }
  
  export default Counter;