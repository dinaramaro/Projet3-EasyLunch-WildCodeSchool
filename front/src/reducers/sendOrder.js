const initialState = {
  sendOrder: {},
  tabs: [],
  total: 0,
};

const formOrder = (state = initialState, action) => {
  let newState;
  let tempTab = [...state.tabs];
  switch (action.type) {
    case 'CHANGEORDER': {
      const tempBooking = { ...state.sendOrder.tableBooking };
      tempBooking[action.e.target.name] = action.e.target.value;
      const tableBooking = {};
      tableBooking.master_user_id = '';
      tableBooking.nb_users = tempBooking.nb_users;
      tableBooking.schedule = tempBooking.schedule;
      tableBooking.restaurant_id = action.idresto;
      const tempTable = { tableBooking };
      newState = {
        ...state,
        sendOrder: tempTable,
      };
      return newState;
    }
    case 'CHANGESPECIAL': {
      const tempFormChange = { ...state.sendOrder };
      const tempBooking = tempFormChange.tableBooking;
      const tempCommand = tempFormChange.tableCommand;
      tempCommand[action.e.target.name] = action.e.target.value;
      const tableCommand = tempCommand;
      const tableBooking = tempBooking;
      const tempTable = { tableBooking, tableCommand };
      newState = {
        ...state,
        sendOrder: tempTable,
      };
      return newState;
    }

    case 'CHOOSEONMENUS': {
      const tempFormChange = { ...state.sendOrder };
      const tempBooking = tempFormChange.tableBooking;
      const tempCommand = tempFormChange.tableCommand;
      const tableCommand = {};
      const tempObj = {};
      tempObj.text = action.text;
      tempObj.idmeal = action.idmeal;
      tempObj.mealprice = action.mealprice;

      if (tempCommand !== undefined) {
        let tempTabMeal = tempCommand.meal_id;
        const resultFind = tempTab.find(item => item.text === action.text);
        if (resultFind === undefined) {
          tempTab = [...tempTab, tempObj];
          tempTabMeal.push(action.idmeal);
        } else {
          const resultFilter = tempTab.filter(item => item.text !== action.text);
          tempTab = [...resultFilter, tempObj];
          const resultFilterMeal = tempTab.map(item => item.idmeal);
          tempTabMeal = [...resultFilterMeal];
        }
        tableCommand.meal_id = tempTabMeal;
      } else {
        tableCommand.meal_id = [action.idmeal];
        tempTab = [tempObj];
      }
      tableCommand.user_id = '';
      tableCommand.price = action.menuprice;
      const tempMenu = {};
      const tempMealsPrices = tempTab.filter(item => item.mealprice > 0).map(item => item.mealprice);
      tempMenu[action.idmenu] = tempMealsPrices;
      tableCommand.menu = JSON.stringify(tempMenu);

      const tableBooking = tempBooking;
      const tempUnion = { tableBooking, tableCommand };
      newState = {
        ...state,
        sendOrder: tempUnion,
        tabs: tempTab,
        total: action.mealprice,
      };
      return newState;
    }
    case 'CHOOSEONCARDS': {
      const tempObj = {};
      tempObj.text = action.text;
      tempObj.idmeal = action.idmeal;
      tempObj.mealprice = 0;
      let tableCommand = {};   
      tableCommand.user_id = '';

      const tempFormChange = { ...state.sendOrder };
      const tempBooking = tempFormChange.tableBooking;
      const tempCommand = tempFormChange.tableCommand;
      let tempTotal = tempCommand.price;

      if (tempCommand !== undefined) {
        let tempTabMeal = tempCommand.meal_id;
        const resultFind = tempTab.find(item => item.idmeal === action.idmeal);
        if (resultFind === undefined) {
          tempTab = [...tempTab, tempObj];
          tempTabMeal.push(action.idmeal);
          tempTotal += action.mealprice;
        } else {
          const resultFilter = tempTab.filter(item => item.idmeal !== action.idmeal);
          tempTab = [...resultFilter];
          const resultFilterMeal = tempTab.map(item => item.idmeal);
          tempTabMeal = [...resultFilterMeal];
          tempTotal -= action.mealprice;
        }
        tempCommand.meal_id = tempTabMeal;
        tableCommand = tempCommand;
      } else {
        tempTotal += action.mealprice;
        tableCommand.meal_id = [action.idmeal];
        tempTab = [tempObj];
      }
      const tempTotalRound = Math.round(tempTotal * 100) / 100; 
      tempCommand.price = tempTotalRound;
      const tableBooking = tempBooking;
      const tempUnion = { tableBooking, tableCommand };
            
      newState = {
        ...state,
        sendOrder: tempUnion,
        tabs: tempTab,
        total: tempTotalRound,
      };
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default formOrder;