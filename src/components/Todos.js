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

//first argument which connect function takes
function mapState(state) {
  return {
    //all the properties in this object will be available as object/values through props in connected component  as object/values
    todos: state.todoState
  };
}

//second argument which connect function takes
function mapDispatch(dispatch) {
  return {
    //all the properties in this object will be available through props in connected component as functions
    addTodo: function (data) {
      dispatch({ type: "ADD_TODO", payload: data }); //by calling addTodo dispatch method will be called and  action object is passed to it
    },
    deleteLastTodo: function () {
      dispatch({ type: "DELETE_TODO" }); //by calling deleteLastTodo dispatch method will be called and action object is passed to it
    },
    resetTodos: function () {
      dispatch({ type: "RESET_TODOS" }); //by calling resetTodos dispatch method will be called and action object is passed to it
    }
  };
}

export default connect(mapState, mapDispatch)(Todos);
