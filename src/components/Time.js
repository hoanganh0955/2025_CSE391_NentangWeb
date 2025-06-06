import React, { useState, useEffect } from "react";

function About() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Dọn dẹp khi component bị unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page center">
      <h1 className="title">
        Current Time: 
        <br></br>
        {time}
      </h1>
    </div>
  );
}

export default About;
