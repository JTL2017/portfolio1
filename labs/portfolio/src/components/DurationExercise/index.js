import { useState, useEffect } from 'react';

export default function DurationExercise({ name }) {
    let [newTime, setStartTime] = useState(new Date(0))
    let [timerStarted, setTimerStarted] = useState(false)
    let [frame, setFrame] = useState(0)
    useEffect(() => {
    let intId = 
        setInterval(() => {
            if (timerStarted)
            {
            setFrame(frame => frame + 1)
            console.log("Tester " + frame)
            }
        }, 
       1000/ 30)
       return () => clearInterval(intId)
    })
    let presentTime = new Date()
    let pastTime = undefined

    if (timerStarted == true) {
        pastTime = new Date(presentTime.valueOf() - newTime.valueOf())
    }
    else {
        pastTime = newTime
    }
    return (
        <>
            <h1>{name}</h1>
            <p class = "timer">Timer: {String(pastTime.getMinutes()).padStart(2,'0')}:{String(pastTime.getSeconds()).padStart(2,'0')}.{String(pastTime.getMilliseconds()).padStart(2,'0')} </p>
            <button class = "startPage" onClick={() => { setTimerStarted(true); setStartTime(new Date())}}>Start</button>
            <button class = "reset" onClick={() => { setTimerStarted(false); setStartTime(new Date(0))}}>Reset</button>


        </>

    )
}
