import React from 'react'
import Counter from './../Counter';
class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0,
            total: 0
        }; 
        this.handleChange = this.handleChange.bind(this)
    } 
    
    // handleChange(e){
    //     let inputCount = 0;
    //     let inputString = e.target.value
    //     if(inputString != "") {
    //         inputCount = parseInt(inputString)
    //     }
    //     this.setState({
    //         count : inputCount
    //     })
    //     this.state.total = 0
    // }

    handleChange = (event) => {
        let inputCount = 0;
        let inputString = event.target.value
        if(inputString != "") {
            inputCount = parseInt(inputString)
        }
        this.setState({
            count : inputCount
        })
        this.state.total = 0
    }

    totalIncrease = () => {
        this.setState({
            total : this.state.total + 1
        })
    }

    totalDecrease = () => {
        this.setState({
            total : this.state.total - 1
        })
    }

    render() {
        return (
          <div>
              <div>
                <label>number of counters:</label>
                <input type="text" id="input" value={this.state.count} onChange={this.handleChange}></input>
                <br/>
                <label>total:{this.state.total}</label>
              </div>
              <div>
                {new Array(this.state.count).fill(0).map(
                  (value, index) => <Counter key = {index} parentIncrease={this.totalIncrease} paraentDecrease={this.totalDecrease} count={this.state.count}/>
                )}
              </div>
          </div>
        );
      }
}

export default CounterGroup