import React from 'react';
import PropTypes from 'prop-types'
 
const Counter=({value,onIncClick,onDecClick})=>{
    return (
        <div>
              <button onClick={onIncClick}>+</button>
              <mark>{value}</mark>
              <button onClick={onDecClick}>-</button>
        </div>
    )
};
 
Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncClick: PropTypes.func.isRequired,
    onDecClick: PropTypes.func.isRequired
};

export default Counter