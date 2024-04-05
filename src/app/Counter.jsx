"use client";
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={increment}>+</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>

      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </>
  );
}
