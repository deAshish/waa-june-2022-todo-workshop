import React from "react";
import { increment, decrement } from "../redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  //   const [counterValue, setCounterValue] = useState(0);
  const count = useSelector((state) => state.Counter.count);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>

        <span>{count}</span>

        <button onClick={() => dispatch(decrement)}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
