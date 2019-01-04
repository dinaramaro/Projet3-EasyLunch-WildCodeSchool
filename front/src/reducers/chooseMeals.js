const initialState = {
  tabs: [],
  total: 0,
};

const chooseMeals = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'CHOOSE': {
      let tempTab = [...state.tabs];
      const tempObj = {};
      const resultFind = tempTab.find(item => item.value === action.e.target.value);
      let tempTotal = 0;
      let tempTotalRound = 0;
      if (resultFind === undefined) {
        tempObj.id = action.id;
        tempObj[action.e.target.name] = action.e.target.value;
        tempObj.price = action.price;
        tempObj.text = action.text;
        tempTab = [...state.tabs, tempObj];
        tempTotal = state.total + action.price;
        tempTotalRound = Math.round(tempTotal * 100) / 100;
        newState = {
          ...state,
          tabs: tempTab,
          total: tempTotalRound,
        };
      } else {
        const reducer = (accumulator, currentValue) => {
          console.log('accu', accumulator);
          console.log('curr', currentValue);
          return accumulator.price + currentValue.price;
        };
        console.log('action', action.e.target.value);
        const resultFilter = tempTab.filter(item => item.value !== action.e.target.value);
        tempTotal = resultFilter.reduce(reducer);
        tempTotalRound = Math.round(tempTotal * 100) / 100;
        newState = {
          ...state,
          tabs: resultFilter,
          total: tempTotalRound,
        };
      }
      console.log('chooseMeals', newState);
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default chooseMeals;
