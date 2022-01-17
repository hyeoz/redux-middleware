// import { increase, decrease } from "../modules/counter";
import { increaseAsync, decreaseAsync } from "../modules/counter";
import Counter from "../components/Counter";
import { connect } from "react-redux";

// const CounterContainer = ({ increase, decrease, number }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

const CounterContainer = ({ increaseAsync, decreaseAsync, number }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  // { increase, decrease }
  { increaseAsync, decreaseAsync }
)(CounterContainer);
