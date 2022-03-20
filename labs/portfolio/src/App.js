import './App.css';
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import { useState } from 'react'


function App() {

  let [displayCounter, setDisplayCounter] = useState(undefined)

  if (displayCounter == true) {
    return(<> <RepetitionExercise name={"Reptetition Push Ups Exercise"}></RepetitionExercise>
      <button onClick={() => setDisplayCounter(undefined)}>Return</button>
     </>)
    

  }
  else if (displayCounter == false) {
    return (<>
    <DurationExercise name={"Duration Running Exercise"}></DurationExercise>
    
    <button onClick={() => setDisplayCounter(undefined)}>Return</button>
    </>
    )
  }
  else if(displayCounter == undefined){
    return (
      <>
        <h1>Main Menu</h1>
        <h2>Click on the repetion excersize or the duration excersize to get started.</h2> 
        <h2>Get Excerising!</h2>
        <p>
        <button onClick={() => setDisplayCounter(true)}>Repetition Push Ups</button>
        </p>
        <p>
        <button onClick={() => setDisplayCounter(false)}>Duration Running</button>
        </p>


      </>
    )
  }


}

export default App;