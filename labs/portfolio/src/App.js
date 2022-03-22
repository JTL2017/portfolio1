import './App.css';
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import TitleMenu from './components/TitleMenu';
import About from './components/About';
import { useState } from 'react'


function App() {

  let [displayCounter, setDisplayCounter] = useState("title")
  



//let currentExercise = {name: "Push Ups", type: "repetition"}
if(displayCounter == "title")
{
 return( <><TitleMenu name={"Exercise Website"}></TitleMenu>
  <button class = "titleButton" onClick={() => setDisplayCounter("main")}>Start</button>
  <p></p>
  <p></p>
  <button class = "about" onClick={() => setDisplayCounter("about")}>About</button>
  </>
 )
}
else if(displayCounter == "about")
{
 return(<> <About name={"About"}></About>
  <button class = "repReturn" onClick={() => setDisplayCounter("title")}>Return</button></>
 )
}
  else if (displayCounter == "rep") {
    
    return(<> <RepetitionExercise name={"Push ups"}></RepetitionExercise>
      <button class = "repReturn" onClick={() => setDisplayCounter("main")}>Return</button>
     </>)
  
  } else if(displayCounter == "dur")
  {
    return (<>
   <DurationExercise name={"Running"}></DurationExercise>
      <button class = "repReturn" onClick={() => setDisplayCounter("main")}>Return</button>
    </>
    )
    }
  else if(displayCounter == "main"){
    return (
      <>
        <h1>Excerises</h1>
        <h2>Click on the repetion excersize or the duration excersize to get started and get excercising!.</h2> 
        
        <p>
        <button class = "exercise" onClick={() => setDisplayCounter("rep")}>Repetition Push Ups</button>
        </p>
        <p>
        <button class = "exercise" onClick={() => setDisplayCounter("dur")}>Duration Running</button>
        </p>
        <p></p>
        <button class = "return" onClick={() => setDisplayCounter("title")}>return</button>


      </>
    )
  }


}

export default App;