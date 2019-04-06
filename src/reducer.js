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
		default:
			return state;
	}
};