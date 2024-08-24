import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function useSeconds(initialState) {
  useEffect(() => {
    console.count("useEffect");
    const interval = setInterval(() => {
      console.count("interval");
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return seconds;
}

function App() {
  const [seconds, setSeconds] = useState("");
  const [count, setCount] = useState(0);

  const handleSeconds = (e) => {
    setSeconds(e.target.value);
  };

  const handleCounter = (h = "") => {
    // setCount(count + 1);
    console.log("hiiii", h);
  };

  // const seconds = useSeconds(0);
  console.count("render");

  return (
    <div className="App">
      <h1>Seconds: {seconds}</h1>
      <h1>Counter: {count}</h1>
      <button onClick={handleCounter("t")}>Test</button>
      <button
        onClick={(() => {
          handleCounter();
        })()}
      >
        {" "}
        click
      </button>
      {/* <input value={seconds} onChange={handleSeconds(e)}/> */}
      <input
        value={seconds}
        onChange={(e) => {
          handleSeconds(e);
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
