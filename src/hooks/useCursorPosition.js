import {useState, useCallback, useEffect, useRef} from 'react';

const useCursorPosition = (delay = 10) => {
  const [cursorPosition, setCursorPosition] = useState({x:0, y:0});
  const previousCursorPosition = useRef(cursorPosition);

  useEffect(() => {
    previousCursorPosition.current = cursorPosition;
  }, [cursorPosition]);

  let timeOut = null;
  const trackCursorPosition = useCallback(({clientX, clientY}) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => setCursorPosition({x: clientX, y: clientY}), delay);
  }, [cursorPosition]);

  useEffect(() => {
    document.addEventListener('mousemove', trackCursorPosition);
    return () => {
      document.removeEventListener('mousemove', trackCursorPosition);
    }
  }, []);

  return [previousCursorPosition.current, cursorPosition];
};

export default useCursorPosition;
