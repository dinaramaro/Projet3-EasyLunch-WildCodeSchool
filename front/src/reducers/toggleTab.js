const initialState = {
  activeTab: '1',
};

const toggleTab = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'TOGGLETAB': {
      let tempTab = state.activeTab;
      if (tempTab === '1') {
        tempTab = '2';
      }
      newState = {
        ...state,
        activeTab: tempTab,
      };
      return newState;
    }
    case 'TOGGLETABDEF': {
      let tempTab = state.activeTab;
      if (tempTab === '1') {
        tempTab = '2';
      } else {
        tempTab = '1';
      }
      newState = {
        ...state,
        activeTab: tempTab,
      };
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default toggleTab;
