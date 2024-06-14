import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter < 20) setCounter(counter + 1);
    else alert("DECREASE VALUE");
  };

  const decValue = () => {
    if (counter > 0) setCounter(counter - 1);
    else alert("ADD VALUE")
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}>ADD VALUE</button>
      <br />
      <br />
      <button onClick={decValue}>DECREASE VALUE</button>
    </>
  );
}

export default App;
