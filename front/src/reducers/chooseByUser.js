const initialState = {
  tabs: [],
  total: 0,
};

const chooseByUser = (state = initialState, action) => {
  let newState;
  let tempTab = [...state.tabs];
  let tempTabSorted = [];
  switch (action.type) {
    case 'CHOOSEONMENUS': {
      const tempObj = {};
      const resultFind = tempTab.find(item => item.text === action.text);
      tempObj.idmenu = action.idmenu;
      tempObj.menuname = action.menuname;
      tempObj.menuprice = action.menuprice;
      tempObj[action.text] = action.e.target.value;
      tempObj.text = action.text;
      tempObj.idmeal = action.idmeal;
      tempObj.mealprice = action.mealprice;
      tempObj.plat = action.plat;
      tempObj.nbmeals = action.nbmeals;
      if (resultFind === undefined) {
        tempTab = [...tempTab, tempObj];
      } else {
        const resultFilter = tempTab.filter(item => item.text !== action.text);
        tempTab = [...resultFilter, tempObj];
      }
      tempTabSorted = tempTab.sort((a, b) => a.plat - b.plat);
      newState = {
        ...state,
        tabs: tempTabSorted,
        total: action.menuprice,
      };
      return newState;
    }
    case 'CHOOSEONCARDS': {
      const tempObj = {};
      const resultFind = tempTab.find(item => item[item.text] === action.e.target.value);
      let tempTotal = state.total;
      let tempTotalRound = 0;
      if (resultFind === undefined) {
        tempObj.id = action.id;
        tempObj[action.e.target.name] = action.e.target.value;
        tempObj.price = action.price;
        tempObj.text = action.text;
        tempObj.plat = action.plat;
        tempObj.name = '';
        tempObj.nbmeals = '';
        tempTab = [...state.tabs, tempObj];
        tempTabSorted = tempTab.sort((a, b) => a.plat - b.plat);
        tempTotal = state.total + action.price;
        tempTotalRound = Math.round(tempTotal * 100) / 100;
        newState = {
          ...state,
          tabs: tempTabSorted,
          total: tempTotalRound,
        };
      } else {
        const resultFilter = tempTab.filter(item => item[item.text] !== action.e.target.value);
        tempTabSorted = resultFilter.sort((a, b) => a.plat - b.plat);
        tempTotal -= action.price;
        tempTotalRound = Math.round(tempTotal * 100) / 100;
      }
      newState = {
        ...state,
        tabs: tempTabSorted,
        total: tempTotalRound,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default chooseByUser;
