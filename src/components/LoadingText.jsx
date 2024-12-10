import React, { useState, useEffect } from "react";

const LoadingText = ({ text = "Authenticating", speed = 500 }) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
    }, speed);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [speed]);

  return (
    <p>
      {text}
      {dots}
    </p>
  );
};

export default LoadingText;
