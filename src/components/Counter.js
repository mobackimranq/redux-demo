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

const mapStateToPropes = (state) => ({
  value: state.counterState
});

const mapDispatchToProps = (dispatch) => ({
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
