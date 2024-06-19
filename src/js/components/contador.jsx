import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Counter() {
  const [counterState, setCounterState] = useState(0);

  /*
  useEffect(() => {
    counterState >= 0 &&
      setInterval(
        () => setCounterState((prevCounterState) => prevCounterState + 1),
        1000
      );
  }, []);


*/

  useEffect(() => {
    if (counterState >= 0) {
      const setIntervalReference = setInterval(
        () => setCounterState((prevCounterState) => prevCounterState + 1),
        1000
      );

      // Cleanup function to clear the interval
      return () => clearInterval(setIntervalReference);
    }
  }, []);

  return <div class="text-center mt-5 h1 ">{counterState}</div>;
}

export default Counter;
