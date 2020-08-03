import React from 'react'
import Counter from './../Counter';
class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0
        }; 
        this.handleChange = this.handleChange.bind(this)
    } 
    
    handleChange(e){
        let inputCount = 0;
        let inputString = e.target.value
        if(inputString != "") {
            inputCount = parseInt(inputString)
        }
        this.setState({
            count : inputCount
        })

    }



    render() {
        return (
          <div>
              <div>
                <label>number of counters:</label>
                <input type="text" id="input" value={this.state.count} onChange={this.handleChange}></input>
              </div>
              <div>
                {new Array(this.state.count).fill(0).map(
                  (value, index) => <Counter key = {index}/>
                )}
              </div>
          </div>
        );
      }
}

export default CounterGroup