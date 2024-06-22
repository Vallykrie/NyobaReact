import {useState, useEffect} from 'react';

export default function DigitalClock(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div style={{textAlign: "right"}}>
            <p style={{fontWeight: "bold", fontSize: "18px"}}>{time}</p>
        </div>
    );
}