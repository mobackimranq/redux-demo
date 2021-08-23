import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { todoReducer } from "./reducers/todosReducer";

const rootReducer = combineReducers({
  todoState: todoReducer,
  counterState: counterReducer
});

const store = createStore(rootReducer);

export { store };
