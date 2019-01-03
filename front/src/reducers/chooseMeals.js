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
      const reducer = (accumulator, currentValue) => accumulator.price + currentValue.price;

      if (resultFind === undefined) {
        tempObj[action.e.target.name] = action.e.target.value;
        tempObj.price = action.price;
        tempTab = [...state.tabs, tempObj];
        tempTotal = tempTab.reduce(reducer);
        newState = {
          ...state,
          tabs: tempTab,
          total: tempTotal,
        };
      } else {
        const resultFilter = tempTab.filter(item => item.value !== action.e.target.value);
        tempTotal = resultFilter.reduce(reducer);
        newState = {
          ...state,
          tabs: resultFilter,
          total: tempTotal,
        };
      }
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default chooseMeals;
