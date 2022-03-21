import './App.css';
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import TitleMenu from './components/TitleMenu';
import { useState } from 'react'


function App() {

  let [displayCounter, setDisplayCounter] = useState(false)

  if (displayCounter == true) {
    return(<> <RepetitionExercise name={"Reptetition Push Ups Exercise"}></RepetitionExercise>
      <button onClick={() => setDisplayCounter(undefined)}>Return</button>
     </>)
    

  }
  else if (displayCounter == false) {
    return (<>
    <TitleMenu name={"Exercise App"}></TitleMenu>
    <button class = "titleButton" onClick={() => setDisplayCounter(undefined)}>Start</button>
    
    
    </>
    )
  }
  else if(displayCounter == undefined){
    return (
      <>
        <h1>Excerises</h1>
        <h2>Click on the repetion excersize or the duration excersize to get started.</h2> 
        <h2>Get Excerising!</h2>
        <p>
        <button onClick={() => setDisplayCounter(true)}>Repetition Push Ups</button>
        </p>
        <p>
        <button onClick={() => setDisplayCounter(false)}>Duration Running</button>
        </p>
        <p></p>
        <button onClick={() => setDisplayCounter(false)}>return</button>


      </>
    )
  }


}

export default App;