import { useEffect, useState } from "react";

export default function Time(){
    const [currTime, setCurrTime] = useState<Date>(new Date());
   
    useEffect(() => {
        setInterval(() => {
            setCurrTime(new Date());
        }, 1000);
    }, [setCurrTime]);

    let hours = currTime.getHours();
    let text  = hours > 11 ? "PM": "AM";
    hours = hours > 12 ? hours-12: hours;

    return (
    <div className="main">
        <div/>
        <div className="quote">
            <p>'There are two types of Pain, One that hurt and One that changes you'</p>
        </div>
        <div>
            <span>{hours.toString().padStart(2, '0')}:</span><span>{currTime.getMinutes().toString().padStart(2,'0')}</span><span className="sec">.{currTime.getSeconds().toString().padStart(2,'0')}</span><span className="session">{text}</span>
        </div>
        <div className="date">
            <span className="Date">{currTime.toDateString()}</span>
        </div>
    </div>
   );
}