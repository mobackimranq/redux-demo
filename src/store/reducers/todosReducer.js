const initialState = [];

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.slice(0, state.length - 1);
    case "RESET_TODOS":
      return initialState;
    default:
      return state;
  }
}

export { todoReducer };
