import React, { useState, useEffect } from "react";

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="page center">
      <h1 className="title">Home Page</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)} className="btn">
        Increment
      </button>
      <button onClick={handleReset} className="btn" style={{ marginLeft: "1px", marginTop: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default Home;
