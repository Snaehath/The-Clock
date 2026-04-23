import { useTimer } from "../hooks/useTimer";
import Quotes from "./quotes";

export default function Time() {
  const { currTime, hours, minutes, seconds, session } = useTimer();

  return (
    <div className="main">
      <div className="time-container">
        <div className="side-spacer"></div>
        <div className="central-time">
          <span className="hours">{hours.toString().padStart(2, "0")}</span>
          <span className="separator">:</span>
          <span className="minutes">{minutes.toString().padStart(2, "0")}</span>
        </div>
        <div className="time-meta">
          <span className="sec">.{seconds.toString().padStart(2, "0")}</span>
          <span className="session">{session}</span>
        </div>
      </div>
      <div className="date">
        {currTime.toLocaleDateString(undefined, { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </div>
      <Quotes />
    </div>
  );
}
