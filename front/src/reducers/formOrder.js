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
    default: {
      return state;
    }
  }
};

export default formOrder;
