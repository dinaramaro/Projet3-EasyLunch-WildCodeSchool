const initialState = {
  formulaire: {
    date: "Aujourd'hui",
    schedule: '',
    nb_users: '',
  },
};

const formOrder = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'CHANGEORDER': {
      const tempFormChange = { ...state.formulaire };
      tempFormChange[action.name] = action.value;
      newState = {
        ...state,
        formulaire: tempFormChange,
      };
      return newState;
    }
    case 'RECUPGEINFO': {
      const tempFormChange = { ...state.formulaire };
      tempFormChange.nb_users = action.nb;
      const tempSchedule = action.schedule;
      const tempScheduleToString = tempSchedule.toString();
      tempFormChange.schedule = `${tempScheduleToString[0]}${tempScheduleToString[1]}h${tempScheduleToString[2]}${tempScheduleToString[3]}`;
      newState = {
        ...state,
        formulaire: tempFormChange,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default formOrder;
