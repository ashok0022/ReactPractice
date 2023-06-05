import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let value = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(value);
    };
  }, []);

  return (
    <div className="about">
      <h1>Count: {count}</h1>
      <h1>About Us Page</h1>
      <p> This is a namaste react course</p>
      <Outlet />
    </div>
  );
};

export default About;
