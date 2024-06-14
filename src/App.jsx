import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  // let counter = 5;

  const addValue = () => {
    if (counter <= 19) setCounter(counter + 1);
    else alert("PRESS DECREASE VALUE BUTTON");
  };

  const decValue = () => {
    if (counter > 0) setCounter(counter - 1);
    else alert("PRESS ADD VALUE BUTTON");
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={decValue}>Decrease value</button>
    </>
  );
}

export default App;
