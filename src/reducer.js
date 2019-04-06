import _ from "lodash"

const INIT_STATE = {
  records: [
    {
      date: new Date(),
      outcome: 0,
      income: 500,
      remaining: 500,
      description: "ได้รับเงินจากการขายสินค้า",
      source: "Credit Card"
    },
    {
      date: new Date(),
      outcome: 100,
      income: 0,
      remaining: 400,
      description: "ซื้อ Pizza",
      source: "Credit Card"
    }
  ],
  openRecordsModal: false,
  openAddRecordDialog: false,
  openGoalModal: false,
  achivements: [
    
  ],
  level: 3,
  goals: [
    {
      name: "I want to buy a car",
      around: "1,000,000",
      before: 30,
      after: 25,
      steps: ['Reduce monthly expense', '(Optional, Risky) Apply for loan if you want it hurry!', 'Get More Income', 'Invest your money'],
      stepsContent: ['Reduce your monthly expense from 25,000 THB/month to 15,000 THB/month', 'In order to get your car faster, you need more income for around 50,000 THB/month is OK.', 'You can apply for loan at many bank such as KBank. But it will cause you to have debt that you need to clear later!!!','Invest your money and get 5% return every year, Maybe you will get more 9,000 THB per year.'],
      activeStep: 3,
      percent: 70,
      active: true
    },
    {
      name: "I want to save money up to 10,000,000",
      around: "10,000,000",
      before: 200,
      after: 130,
      steps: ['Get More Income', 'Reduce monthly expense', '(Optional, Risky) Apply for loan if you want it hurry!', 'Invest your money'],
      stepsContent: ['You need around an income of 100,000 THB/month in order to be able to do that','Reduce your monthly expense from 25,000 THB/month to 15,000 THB/month', 'You can apply for loan at many bank such as KBank. But it will cause you to have debt that you need to clear later!!!','Invest your money and get 5% return every year, Maybe you will get more 9,000 THB per year.'],
      activeStep: 1,
      percent: 10,
      active: true
    },
    {
      name: "I want to buy a house",
      around: "5,000,000",
      before: 180,
      after: 150,
      steps: ['Reduce monthly expense', '(Optional, Risky) Apply for loan if you want it hurry!', 'Invest your money'],
      stepsContent: ['Reduce your monthly expense from 25,000 THB/month to 15,000 THB/month', 'You can apply for loan at many bank such as KBank. But it will cause you to have debt that you need to clear later!!!','Invest your money and get 5% return every year, Maybe you will get more 9,000 THB per year.'],
      activeStep: 1,
      percent: 10,
      active: false
    },
  ]
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
    case "add_record":
      action.payload.date = new Date();
      action.payload.remaining = (state.records.length-1 >= 0 ? parseFloat(state.records[state.records.length-1].remaining) : 0) + parseFloat(action.payload.income) - parseFloat(action.payload.outcome);
      state.records.push(action.payload);
      return { ...state, records: _.cloneDeep(state.records) };
    case "toggleRecordsModal":
      return { ...state, openRecordsModal: !state.openRecordsModal };
    case "toggleAddRecordDialog":
      return { ...state, openAddRecordDialog: !state.openAddRecordDialog };
    case "toggleGoalModal":
      return { ...state, openGoalModal: !state.openGoalModal };
    case "enableGoal":
      state.goals[action.payload].active = true;
      return { ...state, goals: _.cloneDeep(state.goals) };
    default:
			return state;
	}
};