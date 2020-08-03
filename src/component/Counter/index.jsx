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
        this.props.parentIncrease()
      }

      decrease= () =>  {
        this.setState((prevState) => (
            {
                number : prevState.number - 1 
            }
        ))
        this.props.paraentDecrease()
      }

      componentWillReceiveProps= (nextProps) =>  {
        if(this.props.count !== nextProps.count) {
            this.setState((prevState) => (
                {
                    number : 0
                }
            ))
        }
        return null
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