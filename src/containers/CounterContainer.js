import {connect} from 'react-redux'
import Counter from './../component/Counter2/Counter'
import {incActionGenerator,decActionGenerator} from "../actions/Action";
 
const mapStateToProps=(state)=>({
    value:state.value
})
 
const mapDispatchToProps=(dispatch)=>({
    onIncClick:()=>dispatch(incActionGenerator()),
    onDecClick:()=>dispatch(decActionGenerator())
})
 
const MyCounterApp=connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
 
export default MyCounterApp;