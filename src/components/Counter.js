import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  const { value, increase, decrease, reset } = props;

  return (
    <div id="counter">
      <h3>Counter</h3>
      <p>{value}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

//first argument which connect function takes
const mapStateToPropes = (state) => ({
  //all the properties in this object will be available as object/values through props in connected component as object/values e.g value
  value: state.counterState
});

//second argument which connect function takes
const mapDispatchToProps = (dispatch) => ({
  //all the properties in this object will be available through props in connected component as functions e.g increase,decrease and reset
  increase: function () {
    dispatch({ type: "INCREASE_COUNTER" });
  },
  decrease: function () {
    dispatch({ type: "DECREASE_COUNTER" });
  },
  reset: function () {
    dispatch({ type: "RESET_COUNTER" });
  }
});

export default connect(mapStateToPropes, mapDispatchToProps)(Counter);
