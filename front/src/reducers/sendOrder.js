const initialState = {
  sendOrder: {},
  tabs: [],
  total: 0,
};

const sendOrder = (state = initialState, action) => {
  let newState;
  let tempTab = [...state.tabs];
  switch (action.type) {
    case 'CHANGEORDER': {
      const tempBooking = { ...state.sendOrder.tableBooking };
      tempBooking[action.e.target.name] = action.e.target.value;
      const tableBooking = {};
      tableBooking.master_user_id = '';
      tableBooking.nb_users = parseInt(tempBooking.nb_users, 10);
      const tempSchedule = tempBooking.schedule;
      const tempScheduleString = tempSchedule.toString().split('h').join('');
      tableBooking.schedule = parseInt(tempScheduleString, 10);
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
      const tempPayment = tempFormChange.tablePayment;
      const tableCommand = {};
      let tablePayment = {};
      const tempObj = {};
      tempObj.text = action.text;
      tempObj.idmeal = action.idmeal;
      tempObj.mealprice = action.mealprice;

      if (tempCommand !== undefined) {
        const tempTabMeal = tempCommand.meal_id;
        const tempMealIdChange = tempTabMeal.slice(1, tempTabMeal.length - 1);
        let tempTabMealId = tempMealIdChange.split(',');
        const resultFind = tempTab.find(item => item.text === action.text);
        if (resultFind === undefined) {
          tempTab = [...tempTab, tempObj];
          tempTabMealId.push(action.idmeal);
        } else {
          const resultFilter = tempTab.filter(item => item.text !== action.text);
          tempTab = [...resultFilter, tempObj];
          const resultFilterMeal = tempTab.map(item => item.idmeal);
          tempTabMealId = [...resultFilterMeal];
        }
        const tempTabMealIdString = tempTabMealId.map(item => item.toString());
        let result = '';
        for (let i = 0; i < tempTabMealIdString.length; i += 1) {
          if (i !== tempTabMealIdString.length - 1) {
            result += `${tempTabMealIdString[i]},`;
          } else {
            result += `${tempTabMealIdString[i]}`;
          }
        }

        tableCommand.meal_id = `{${result}}`;
      } else {
        const idMealString = action.idmeal.toString();
        tableCommand.meal_id = `{${idMealString}}`;
        tempTab = [tempObj];
      }
      tableCommand.user_id = '';
      tableCommand.price = action.menuprice;
      const tempMenu = {};
      const tempMealsPrices = tempTab.filter(
        item => item.mealprice > 0,
      ).map(item => item.mealprice);
      tempMenu[action.idmenu] = tempMealsPrices;
      tableCommand.menu = JSON.stringify(tempMenu);

      if (tempPayment !== undefined) {
        tempPayment.amount = action.menuprice;
        tempPayment.user_id = '';
        tablePayment = tempPayment;
      }
      const tableBooking = tempBooking;
      const tempUnion = { tableBooking, tableCommand, tablePayment };
      newState = {
        ...state,
        sendOrder: tempUnion,
        tabs: tempTab,
        total: action.menuprice,
      };
      return newState;
    }
    case 'CHOOSEONCARDS': {
      const tempFormChange = { ...state.sendOrder };
      const tempBooking = tempFormChange.tableBooking;
      let tempCommand = tempFormChange.tableCommand;
      let tempPayment = tempFormChange.tablePayment;

      const tempObj = {};
      tempObj.text = action.text;
      tempObj.idmeal = action.idmeal;
      tempObj.mealprice = 0;

      let tempTotal = 0;
      let tempTotalRound = 0;

      if (tempCommand !== undefined) {
        tempTotal = tempCommand.price;

        const tempTabMeal = tempCommand.meal_id;
        const tempMealIdChange = tempTabMeal.slice(1, tempTabMeal.length - 1);
        let tempTabMealId = tempMealIdChange.split(',');
        const resultFind = tempTab.find(item => item.idmeal === action.idmeal);
        if (resultFind === undefined) {
          tempTab = [...tempTab, tempObj];
          tempTabMealId.push(action.idmeal);
          tempTotal += action.mealprice;
        } else {
          const resultFilter = tempTab.filter(item => item.idmeal !== action.idmeal);
          tempTab = [...resultFilter];
          const resultFilterMeal = tempTab.map(item => item.idmeal);
          tempTabMealId = [...resultFilterMeal];
          tempTotal -= action.mealprice;
        }
        const tempTabMealIdString = tempTabMealId.map(item => item.toString());
        let result = '';
        for (let i = 0; i < tempTabMealIdString.length; i += 1) {
          if (i !== tempTabMealIdString.length - 1) {
            result += `${tempTabMealIdString[i]},`;
          } else {
            result += `${tempTabMealIdString[i]}`;
          }
        }
        tempCommand.meal_id = `{${result}}`;
        tempTotalRound = Math.round(tempTotal * 100) / 100;
        tempCommand.price = tempTotalRound;
      } else {
        tempCommand = {};

        tempTotal += action.mealprice;
        tempTotalRound = Math.round(tempTotal * 100) / 100;
        tempCommand.price = tempTotalRound;
        const idMealString = action.idmeal.toString();
        tempCommand.meal_id = `{${idMealString}}`;
        tempTab = [tempObj];
      }
      if (tempPayment === undefined) {
        tempPayment = {};
      }

      const tableBooking = tempBooking;

      tempCommand.user_id = '';
      const tableCommand = tempCommand;

      tempPayment.amount = tempTotalRound;
      tempPayment.user_id = '';
      const tablePayment = tempPayment;

      const tempUnion = { tableBooking, tableCommand, tablePayment };

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

export default sendOrder;
