import React from 'react'
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            number: 0
        };
    }

      increase= () =>  {
        this.setState((prevState) => (
            {
                number : prevState.number + 1
            }
        ))
      }

      decrease= () =>  {
        this.setState((prevState) => (
            {
                number : prevState.number - 1 
            }
        ))
      }
    
      render() {
        return (
          <div>
              <button onClick={this.increase}>+</button>
              <mark>{this.state.number}</mark>
              <button onClick={this.decrease}>-</button>
          </div>
        );
      }
}

export default Counter