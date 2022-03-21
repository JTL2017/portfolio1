import { useState } from "react";

function RepetitionExercise({name})
{
    const [count, setCount] = useState(0);
    return(
        <div>
        <h1>{name}</h1>
        <p class = "reps">You have  {count} Reps</p>
        <button class = "repetitionPage" onClick={() => setCount(count + 1)}>Reps</button>
            <button class = "reset" onClick={() => setCount(0)}>Reset</button>
        
        </div>
    )
}
export default RepetitionExercise