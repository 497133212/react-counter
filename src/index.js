// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import changeValue from './reducers/Reducer'
import MyCounterApp from "./containers/CounterContainer";
 
const store = createStore(changeValue);//用reducer来创建store
 
ReactDOM.render(
    <Provider store={store}>
        <MyCounterApp/>
    </Provider>,
    document.getElementById('root')
);