const initialState = {
  sendOrder: {},
  tabs: [],
  total: 0,
};

const sendOrder = (state = initialState, action) => {
  let newState;
  let tempTab = [...state.tabs];
  switch (action.type) {
    case 'CHANGE_ORDER': {
      const tempCommand = { ...state.sendOrder.tableCommand };
      const tempPayment = { ...state.sendOrder.tablePayment };
      const tempBooking = { ...state.sendOrder.tableBooking };
      tempBooking[action.name] = action.value;
      const tableBooking = {};
      tableBooking.master_user_id = action.user;
      tableBooking.nb_users = parseInt(tempBooking.nb_users, 10);
      const tempSchedule = tempBooking.schedule;
      if (tempSchedule !== undefined) {
        const tempScheduleString = tempSchedule.toString().split('h').join('');
        tableBooking.schedule = parseInt(tempScheduleString, 10);
      }

      tableBooking.restaurant_id = action.idresto;
      const tableCommand = tempCommand;
      const tablePayment = tempPayment;
      const tempTable = { tableBooking, tableCommand, tablePayment };
      newState = {
        ...state,
        sendOrder: tempTable,
      };
      return newState;
    }

    case 'GET_USER_ID': {
      const tempFormChange = { ...state };
      const tempBooking = tempFormChange.sendOrder.tableBooking;
      const tempCommand = tempFormChange.sendOrder.tableCommand;
      const tempPayment = tempFormChange.sendOrder.tablePayment;
      const tempTotal = tempFormChange.total;
      if (tempCommand !== undefined) {
        tempCommand.user_id = action.iduser;
      }
      if (tempBooking !== undefined) {
        tempBooking.master_user_id = action.iduser;
      }
      const tableCommand = tempCommand;
      const tableBooking = tempBooking;
      let tablePayment = {};
      if (tempPayment !== undefined) {
        tempPayment.amount = tempTotal;
        tempPayment.user_id = action.iduser;
        tempPayment.status = 'ok';
        tablePayment = tempPayment;
      }
      const tempTable = { tableBooking, tableCommand, tablePayment };
      newState = {
        ...state,
        sendOrder: tempTable,
      };
      return newState;
    }
    case 'CHANGE_SPECIAL': {
      const tempFormChange = { ...state };
      const tempBooking = tempFormChange.sendOrder.tableBooking;
      const tempCommand = tempFormChange.sendOrder.tableCommand;
      const tempPayment = tempFormChange.sendOrder.tablePayment;
      const tempTotal = tempFormChange.total;
      if (tempCommand !== undefined) {
        tempCommand[action.name] = action.value;
      }
      const tableCommand = tempCommand;
      const tableBooking = tempBooking;
      let tablePayment = {};
      if (tempPayment !== undefined) {
        tempPayment.amount = tempTotal;
        if (tempCommand !== undefined) {
          tempPayment.user_id = tempCommand.user_id;
        }
        tempPayment.status = 'ok';
        tablePayment = tempPayment;
      }
      const tempTable = { tableBooking, tableCommand, tablePayment };
      newState = {
        ...state,
        sendOrder: tempTable,
      };
      return newState;
    }
    case 'CHOOSE_ON_MENUS': {
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
        if (tempCommand.meal_id !== undefined) {
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
      } else {
        const idMealString = action.idmeal.toString();
        tableCommand.meal_id = `{${idMealString}}`;
        tempTab = [tempObj];
      }
      tableCommand.user_id = action.user;
      tableCommand.price = action.menuprice;
      const tempMenu = {};
      const tempMealsPrices = tempTab.filter(
        item => item.mealprice > 0,
      ).map(item => item.mealprice);
      tempMenu[action.idmenu] = tempMealsPrices;
      tableCommand.menu = JSON.stringify(tempMenu);

      if (tempPayment !== undefined) {
        tempPayment.amount = action.menuprice;
        tempPayment.user_id = action.user;
        tempPayment.status = 'ok';
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
    case 'CHOOSE_ON_CARDS': {
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
        if (tempCommand.meal_id !== undefined) {
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

      tempCommand.user_id = action.user;
      const tableCommand = tempCommand;

      tempPayment.amount = tempTotalRound;
      tempPayment.user_id = action.user;
      tempPayment.status = 'ok';
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
    case 'INIT_STATE':
      return initialState;

    default: {
      return state;
    }
  }
};

export default sendOrder;
