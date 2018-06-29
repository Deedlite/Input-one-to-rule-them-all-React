/**
 * InitialState
 */
const initialState = {
  inputAll: '',
  input1: '',
  input2: '',
  input3: '',
  input4: '',
};

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'CHANGE_ALL_INPUT':
      return {
        ...state,
        [action.name]: action.value,
        input1: action.value,
        input2: action.value,
        input3: action.value,
        input4: action.value,
      };
    default:
      return state;
  }
};


/**
 * actionCreators
 */


/**
 * Export
 */
export default reducer;
