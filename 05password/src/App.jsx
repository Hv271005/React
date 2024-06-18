import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, numStatus] = useState(false);
  const [charAllowed, charStatus] = useState(false);
  const [password, setPass] = useState("");
  
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~`!@#$%^&*()_+-=[]{}|:;<>?/'";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      setPass(pass);
    }
  }, [length, numberAllowed, charAllowed, setPass]);

  const copy = useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">PASSWORD GENERATOR</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passRef}
          />
          <button 
            className="outline-none bg-blue-700 texg-white px-3 py-0.5 shrink-0"
            onClick={copy}>
            COPY
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
            <div className="flex items-center gap-x-1">
              <input type="checkbox"
               defaultChecked={numberAllowed} 
               id="numberInput"
               onChange={()=>{
                numStatus((prev) => !prev);
               }}
               />
              <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input type="checkbox"
               defaultChecked={charAllowed} 
               id="charInput"
               onChange={()=>{
                charStatus((prev) => !prev);
               }}
               />
              <label htmlFor="charInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
