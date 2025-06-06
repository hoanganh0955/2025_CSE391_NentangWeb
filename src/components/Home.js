import React, { useState, useEffect } from "react";

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="page center">
      <h1 className="title">Home Page</h1>
      <p>Count: {count}</p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={increment} className="btn">
          Increment
        </button>
        <button onClick={decrement} className="btn">
          Decrement
        </button>
        <button onClick={reset} className="btn">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Home;
