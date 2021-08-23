//reducer is a function that will be called when an action is dispatched
//reducer will be given two arguments, first being reducer's state's state and second being the action

const initialState = 0;

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return state + 1;
    case "DECREASE_COUNTER":
      return state - 1;
    case "RESET_COUNTER":
      return initialState;
    default:
      return state;
  }
}

export { counterReducer };
