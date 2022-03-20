import { useState } from "react";

function RepetitionExercise({name})
{
    const [count, setCount] = useState(0);
    return(
        <div>
        <h1>{name}</h1>
        <p>You have  {count} Reps</p>
        <button onClick={() => setCount(count + 1)}>Reps</button>
            <button onClick={() => setCount(0)}>Reset</button>
        
        </div>
    )
}
export default RepetitionExercise