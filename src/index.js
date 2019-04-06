import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import reducer from './reducer';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

window.addEventListener("keydown",function(e) {
  //console.log(e);
  if (e.key == "a" || e.key=="A") {
    store.dispatch({
      type: "add_record",
      payload: {
        description: "จ่ายค่าชานม",
        income: 0,
        outcome: 100
      }
    })
  }
})