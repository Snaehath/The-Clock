import { useEffect, useState } from "react";
import Quotes from "./quotes";

export default function Time() {
  const [currTime, setCurrTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Clean up interval on unmount
  }, []);

  let hours = currTime.getHours();
  const minutes = currTime.getMinutes();
  const seconds = currTime.getSeconds();
  const session = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

  return (
    <div className="main">
      <div />
      <div>
        <span>{hours.toString().padStart(2, "0")}:</span>
        <span>{minutes.toString().padStart(2, "0")}</span>
        <span className="sec">.{seconds.toString().padStart(2, "0")}</span>
        <span className="session">{session}</span>
      </div>
      <div className="date">
        <span className="Date">{currTime.toDateString()}</span>
      </div>
      <Quotes />
    </div>
  );
}
