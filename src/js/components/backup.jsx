import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Counter() {
  const [counterState, setCounterState] = useState(0);

  useEffect(() => {
    counterState >= 0 &&
      setTimeout(() => setCounterState(counterState + 1), 1000);
  }, [counterState]);

  return <div class="text-center mt-5 h1 ">{counterState}</div>;
}

export default Counter;
