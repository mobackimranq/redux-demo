import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import Todos from "./components/Todos";
import Counter from "./components/Counter";
import "./App.css";
function App() {
  return (
    <ReduxProvider store={store}>
      <Todos />
      <Counter />
    </ReduxProvider>
  );
}

export default App;
