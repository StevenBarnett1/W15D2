import React, {useState,useEffect} from 'react';


let Clock = () => {
    let [time,setTime] = useState(new Date())
    let [hours,setHours] = useState("")
    let [minutes,setMinutes] = useState("")
    let [seconds,setSeconds] = useState("")

    let setTimes = () => {
        setTime(new Date())
        setHours(time.getHours());
        setMinutes(time.getMinutes());
        setSeconds(time.getSeconds());
    }
    setInterval(setTimes,1000)
    
    useEffect(() => {
        setTime(new Date())
    }, [])

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;


    return (
        <section>
          <h1>Clock</h1>
          <div className='clock'>
            <p>
              <span>
                Time:
              </span>
              <span>
                {hours}:{minutes}:{seconds} PDT
              </span>
            </p>
            <p>Date: {time.toDateString()}</p>
          </div>
        </section>
      );
}

export default Clock
