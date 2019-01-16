const initialState = '';

const codeParticip = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_CODE':
      return action.code;
    default:
      return state;
  }
};

export default codeParticip;
