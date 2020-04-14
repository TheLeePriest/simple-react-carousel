import React, { useEffect, useState } from "react";

const useWindowResizeEvent = () => {
  const getWindowWidth = () => window.innerWidth;
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    const resize = () => {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return windowWidth;
};

export default useWindowResizeEvent;
