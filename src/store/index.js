import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { todoReducer } from "./reducers/todosReducer";

// we need to combine if multiple reducers are there
//when an action is dispatched, all the reducers will be called until 'type' property is matched
//when type is matched inside a reducer, state for that reducer will be updated only, eg.{type: "INCREASE_COUNTER"} will be matched within todoReducer hence state for todoState will be updated only
const rootReducer = combineReducers({
  todoState: todoReducer,
  counterState: counterReducer
});

const store = createStore(rootReducer);

export { store };
