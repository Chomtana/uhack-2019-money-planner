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

var currState = 1

window.addEventListener("keydown",function(e) {
  //console.log(e);
  if (e.key == "a" || e.key=="A" || e.key=='ฟ') {
    store.dispatch({
      type: "add_record",
      payload: {
        description: "จ่ายค่าชานม",
        income: 0,
        outcome: 100
      }
    })
  } else if (e.key == "s" || e.key == 'S' || e.key=='ห') {
    if (currState == 1) {
      store.dispatch({
        type: "set_state",
        payload: {
          level: 5,
          exp: 85,
          goals: [
            {
              name: "I want to buy a new high end notebook",
              around: "60,000",
              before: 5,
              after: 3,
              steps: ['Reduce monthly expense', 'Get More Income'],
              stepsContent: ['Reduce your monthly expense from 25,000 THB/month to 15,000 THB/month', 'In order to get your special notebook faster, you should have more income for around 35,000 THB/month is OK.'],
              activeStep: 2,
              percent: 75,
              active: true
            },
            {
              name: "I want to buy a car",
              around: "1,000,000",
              before: 25,
              after: 18,
              steps: ['Reduce monthly expense', '(Optional, Risky) Apply for loan if you want it hurry!', 'Get More Income', 'Invest your money'],
              stepsContent: ['Reduce your monthly expense from 25,000 THB/month to 15,000 THB/month', 'You can apply for loan at many bank such as KBank. But it will cause you to have debt that you need to clear later!!!', 'In order to get your car faster, you need more income for around 50,000 THB/month is OK.', 'Invest your money and get 5% return every year, Maybe you will get more 9,000 THB per year.'],
              activeStep: 4,
              percent: 85,
              active: true
            },
            {
              name: "I want to save money up to 1,000,000 THB",
              around: "1,000,000",
              before: 30,
              after: 25,
              steps: ['Get More Income', 'Reduce monthly expense', 'Invest your money'],
              stepsContent: ['You need around an income of 100,000 THB/month in order to be able to do that','Reduce your monthly expense from 25,000 THB/month to 15,000 THB/month','Invest your money and get 5% return every year, Maybe you will get more 9,000 THB per year.'],
              activeStep: 1,
              percent: 5,
              active: true
            },
            {
              name: "I want to buy a house",
              around: "1,000,000",
              before: 30,
              after: 25,
              steps: ['Reduce monthly expense', '(Optional, Risky) Apply for loan if you want it hurry!', 'Invest your money'],
              stepsContent: ['Reduce your monthly expense from 25,000 THB/month to 15,000 THB/month', 'You can apply for loan at many bank such as KBank. But it will cause you to have debt that you need to clear later!!!','Invest your money and get 5% return every year, Maybe you will get more 9,000 THB per year.'],
              activeStep: 1,
              percent: 10,
              active: false
            },
          ]
        }
      })
    } else if (currState == 2) {
      store.dispatch({
        type: "set_state",
        payload: {
          level: 6,
          exp: 0,
          goals: [
            {
              name: "I want to buy a new high end notebook",
              around: "60,000",
              before: 13,
              after: 10,
              steps: ['Reduce monthly expense', 'Get More Income'],
              stepsContent: ['Reduce your monthly expense from 25,000 THB/month to 15,000 THB/month', 'In order to get your special notebook faster, you should have more income for around 35,000 THB/month is OK.'],
              activeStep: 3,
              percent: 100,
              active: true
            },
            {
              name: "I want to buy a car",
              around: "1,000,000",
              before: 0,
              after: 0,
              steps: ['Reduce monthly expense', '(Optional, Risky) Apply for loan if you want it hurry!', 'Get More Income', 'Invest your money'],
              stepsContent: ['Reduce your monthly expense from 25,000 THB/month to 15,000 THB/month', 'You can apply for loan at many bank such as KBank. But it will cause you to have debt that you need to clear later!!!', 'In order to get your car faster, you need more income for around 50,000 THB/month is OK.', 'Invest your money and get 5% return every year, Maybe you will get more 9,000 THB per year.'],
              activeStep: 5,
              percent: 100,
              active: true
            },
            {
              name: "I want to save money up to 1,000,000 THB",
              around: "1,000,000",
              before: 25,
              after: 20,
              steps: ['Get More Income', 'Reduce monthly expense', 'Invest your money'],
              stepsContent: ['You need around an income of 100,000 THB/month in order to be able to do that','Reduce your monthly expense from 25,000 THB/month to 15,000 THB/month','Invest your money and get 5% return every year, Maybe you will get more 9,000 THB per year.'],
              activeStep: 1,
              percent: 15,
              active: true
            },
            {
              name: "I want to buy a house",
              around: "1,000,000",
              before: 25,
              after: 20,
              steps: ['Reduce monthly expense', '(Optional, Risky) Apply for loan if you want it hurry!', 'Invest your money'],
              stepsContent: ['Reduce your monthly expense from 25,000 THB/month to 15,000 THB/month', 'You can apply for loan at many bank such as KBank. But it will cause you to have debt that you need to clear later!!!','Invest your money and get 5% return every year, Maybe you will get more 9,000 THB per year.'],
              activeStep: 1,
              percent: 15,
              active: false
            },
          ]
        }
      })
    } else if (currState == 3) {
      store.dispatch({
        type: "set_state",
        payload: {
          level: 6,
          exp: 20,
          goals: [
            {
              name: "I want to buy a new high end notebook",
              around: "60,000",
              before: 0,
              after: 0,
              steps: ['Reduce monthly expense', 'Get More Income'],
              stepsContent: ['Reduce your monthly expense from 25,000 THB/month to 15,000 THB/month', 'In order to get your special notebook faster, you should have more income for around 35,000 THB/month is OK.'],
              activeStep: 3,
              percent: 100,
              active: true
            },
            {
              name: "I want to buy a car",
              around: "1,000,000",
              before: 0,
              after: 0,
              steps: ['Reduce monthly expense', '(Optional, Risky) Apply for loan if you want it hurry!', 'Get More Income', 'Invest your money'],
              stepsContent: ['Reduce your monthly expense from 25,000 THB/month to 15,000 THB/month', 'You can apply for loan at many bank such as KBank. But it will cause you to have debt that you need to clear later!!!', 'In order to get your car faster, you need more income for around 50,000 THB/month is OK.', 'Invest your money and get 5% return every year, Maybe you will get more 9,000 THB per year.'],
              activeStep: 5,
              percent: 100,
              active: true
            },
            {
              name: "I want to save money up to 1,000,000 THB",
              around: "1,000,000",
              before: 13,
              after: 9,
              steps: ['Get More Income', 'Reduce monthly expense', 'Invest your money'],
              stepsContent: ['You need around an income of 100,000 THB/month in order to be able to do that','Reduce your monthly expense from 25,000 THB/month to 15,000 THB/month','Invest your money and get 5% return every year, Maybe you will get more 9,000 THB per year.'],
              activeStep: 1,
              percent: 25,
              active: true
            },
            {
              name: "I want to buy a house",
              around: "1,000,000",
              before: 11,
              after: 8,
              steps: ['Reduce monthly expense', '(Optional, Risky) Apply for loan if you want it hurry!', 'Invest your money'],
              stepsContent: ['Reduce your monthly expense from 25,000 THB/month to 15,000 THB/month', 'You can apply for loan at many bank such as KBank. But it will cause you to have debt that you need to clear later!!!','Invest your money and get 5% return every year, Maybe you will get more 9,000 THB per year.'],
              activeStep: 1,
              percent: 30,
              active: false
            },
          ]
        }
      })
    }
    currState++;
  }
})


for(var navi of document.getElementsByClassName("bottom-navi-btn")) {
  navi.addEventListener("click",function(e) {
    setTimeout(function() {
      window.scrollBy({
        top: -70
      });
    },100)
  })
}