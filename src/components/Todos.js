import React, { useState } from "react";
import { connect } from "react-redux";

function Todos(props) {
  const { todos, addTodo, deleteLastTodo, resetTodos } = props;

  const [val, setVal] = useState(0);

  return (
    <div id="todos">
      <h3>TODOS</h3>
      <input
        onChange={function (e) {
          setVal(e.target.value);
        }}
      />
      <button
        onClick={function () {
          addTodo(val);
        }}
      >
        Add Todo
      </button>
      <button onClick={resetTodos}>Reset Todo</button>
      <button onClick={deleteLastTodo}>Delete Last Todo</button>
      <ol>
        {todos.map(function (todo, index) {
          return <li key={todo + index}>{todo}</li>;
        })}
      </ol>
    </div>
  );
}

function mapState(state) {
  return {
    todos: state.todoState
  };
}

function mapDispatch(dispatch) {
  return {
    addTodo: function (data) {
      dispatch({ type: "ADD_TODO", payload: data });
    },
    deleteLastTodo: function () {
      dispatch({ type: "DELETE_TODO" });
    },
    resetTodos: function () {
      dispatch({ type: "RESET_TODOS" });
    }
  };
}

export default connect(mapState, mapDispatch)(Todos);
