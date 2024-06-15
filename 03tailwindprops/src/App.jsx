import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Himanshu",
    age: 21,
  };

  let arr = [1, 2, 3, 4];
  return (
    <>
      <button className="bg-green-400 text-black rounded-xl mb-5">
        TAILWIND TEST
      </button>
      <Card username="chaiaurcode" btnText ="Expand ME"/>
    </>
  );
}

export default App;
