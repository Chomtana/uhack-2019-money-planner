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
  openCameraDialog: false,
  level: 5,
  exp: 80,
  achivements: [
    {
      picture: "http://images4.wikia.nocookie.net/__cb20121104001423/logopedia/images/e/ee/Burger_King_Logo.svg.png",
      title: "10% Discount at Burger King",
      description: "Enjoy your burger with 10% discount!!! And good news is that we give you permanent discount, so you can eat burger at Burger King any time with 10% discount.",
      unlock: 10,
      place: -1
    },
    {
      picture: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Grab_%28application%29_logo.svg/1280px-Grab_%28application%29_logo.svg.png",
      title: "10% Grab Discount",
      description: "Enjoy your grab ride with 10% discount!!! While waiting for your car why not getting grab discount. Moreover, it is permanent discount.",
      unlock: 6,
      place: -1
    },
    {
      picture: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Grab_%28application%29_logo.svg/1280px-Grab_%28application%29_logo.svg.png",
      title: "15% Grab Discount",
      description: "Enjoy your grab ride with 15% discount!!! While waiting for your car why not getting grab discount. Moreover, it is permanent discount.",
      unlock: 7,
      place: -1
    },
    {
      picture: "https://www.bts.co.th/files/uploads/home-page/bts-logo-main.jpg",
      title: "10% BTS Discount",
      description: "Enjoy your bts ride with 10% discount!!! While waiting for your car why not getting bts discount. Moreover, it is permanent discount.",
      unlock: 10,
      place: -1
    },
    {
      picture: "https://www.bts.co.th/files/uploads/home-page/bts-logo-main.jpg",
      title: "15% BTS Discount",
      description: "Enjoy your bts ride with 15% discount!!! While waiting for your car why not getting bts discount. Moreover, it is permanent discount.",
      unlock: 10,
      place: -1
    },
    {
      picture: "https://png.pngtree.com/svg/20160322/35447ae59f.svg",
      title: "LENOVO, For those who do",
      description: "Get you new notebook at lenovo shop now. Lenovo stand for the brand that has very strong, fast and efficient notebook",
      unlock: 10,
      place: 0
    },
    {
      picture: "https://ih1.redbubble.net/image.517392525.3904/pp,550x550.u1.jpg",
      title: "MSI, Symbol of gaming notebook",
      description: "Want some new gamining notebook? Buy it at MSI. Moreover, MSI notebook can also be used to train machine learning model.",
      unlock: 10,
      place: 0
    },
    {
      picture: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fewanspence%2Ffiles%2F2019%2F01%2FMSFT_SurfacePro6_PR001.jpg",
      title: "New Surface Pro!",
      description: "Surface Pro is a notebook that designed for your work. It not only a computer but also a tool to take note no matter where you are.",
      unlock: 10,
      place: 0
    },
    {
      picture: "https://png.pngtree.com/svg/20160322/35447ae59f.svg",
      title: "5% EXTRA discount at Lenovo",
      description: "Get you an EXTRA ONE new laptop or smart phone with 5 percent discount !!!!!",
      unlock: 10,
      place: -1
    },
    {
      picture: "https://cdn11.bigcommerce.com/s-sq9zkarfah/images/stencil/original/products/123100/210279/Toyota-Logo-Vinyl-Decal-Sticker__64572.1511168814.jpg?c=2&imbypass=on",
      title: "Drive the happiness with TOYOTA",
      description: "At TOYOTA, you not only get your car, but also your happiness.",
      unlock: 10,
      place: 1
    }
  ],
  goals: [
    {
      name: "I want to buy a new high end notebook",
      around: "60,000",
      before: 13,
      after: 10,
      steps: ['Reduce monthly expense', 'Get More Income'],
      stepsContent: ['Reduce your monthly expense from 25,000 THB/month to 15,000 THB/month', 'In order to get your special notebook faster, you should have more income for around 35,000 THB/month is OK.'],
      activeStep: 1,
      percent: 0,
      active: true
    },
    {
      name: "I want to buy a car",
      around: "800,000",
      before: 25,
      after: 20,
      steps: ['Reduce monthly expense', '(Optional, Risky) Apply for loan if you want it hurry!', 'Get More Income', 'Invest your money'],
      stepsContent: ['Reduce your monthly expense from 25,000 THB/month to 15,000 THB/month', 'You can apply for loan at many bank such as KBank. But it will cause you to have debt that you need to clear later!!!', 'In order to get your car faster, you need more income for around 50,000 THB/month is OK.', 'Invest your money and get 5% return every year, Maybe you will get more 9,000 THB per year.'],
      activeStep: 3,
      percent: 70,
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
  ],
  isOnLandingPage: false
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
    case "toggleCameraDialog":
      return { ...state, openCameraDialog: !state.openCameraDialog };
    case "enableGoal":
      state.goals[action.payload].active = true;
      return { ...state, goals: _.cloneDeep(state.goals) };
    case "set_state":
      action.payload = _.merge(state, _.cloneDeep(action.payload))
      return { ...state, ...action.payload}
    default:
			return state;
	}
};