import { useState, useEffect } from 'react';

export const useTimer = () => {
  const [currTime, setCurrTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = currTime.getHours();
  const minutes = currTime.getMinutes();
  const seconds = currTime.getSeconds();
  const session = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;

  return {
    currTime,
    hours: formattedHours,
    minutes,
    seconds,
    session
  };
};
