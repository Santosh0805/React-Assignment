import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(intervalId);
        }
        return prevCount - 1;
      });
    }, 1000);

    function cleanupFunction() {
      clearInterval(intervalId);
    }
    return cleanupFunction;
  }, []);

  return (
    <div
      style={{ border: "1px dashed black", padding: "10px", margin: "10px" }}
    >
      <h1>Count Down Timer</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default Timer;
