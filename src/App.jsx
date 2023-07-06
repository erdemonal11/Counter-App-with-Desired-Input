import { useState } from "react";
import "./App.css";
import React from "react";
import { useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState();
  const inputRef = useRef();
  const handleChange = () => {
    setNumber(parseInt(inputRef.current.value));
  };

  console.log(count);

  return (
    <>
      <div className="container">
        <input
          className="chatbox"
          type="text"
          ref={inputRef}
          onChange={handleChange}
        />
        <div className="button-wrapper">
          <button
            className="button red"
            onClick={() => {
              setCount(count - number);
            }}
          >
            -
          </button>
          <span className="text">{count}</span>
          <button
            className="button green"
            onClick={() => {
              setCount(count + number);
            }}
          >
            +
          </button>
        </div>
        <button
          className="button blue"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
