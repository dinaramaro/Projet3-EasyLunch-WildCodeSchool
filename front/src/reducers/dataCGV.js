const initialState = [];

const dataCGV = (state = initialState, action) => {
  switch (action.type) {
    case 'DATA_CGV':
      return action.items;
    default:
      return state;
  }
};

export default dataCGV;
