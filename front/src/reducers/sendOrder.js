const initialState = {
  sendOrder: {},
  tabs: [],
};

const formOrder = (state = initialState, action) => {
  let newState;
  let tempTab = [...state.tabs];
  switch (action.type) {
    case 'CHANGEORDER': {
      const tempFormChange = { ...state.sendOrder.tableBooking };
      tempFormChange[action.e.target.name] = action.e.target.value;
      const tableBooking = {};
      tableBooking.master_user_id = '';
      tableBooking.nb_users = tempFormChange.nb_users;
      tableBooking.schedule = tempFormChange.schedule;
      tableBooking.code = '';
      const tempTable = { tableBooking };
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
      const tempMealsPrices = tempTab.map(item => item.mealprice);
      tempMenu[action.idmenu] = tempMealsPrices;
      tableCommand.menu = JSON.stringify(tempMenu);

      let tableBooking = [];
      tableBooking = tempBooking;
      const tempUnion = { tableBooking, tableCommand };
      newState = {
        ...state,
        sendOrder: tempUnion,
        tabs: tempTab,
      };
      console.log('newState', newState);
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default formOrder;
