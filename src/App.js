import "./App.css";
import Escena from "./components/escena/Escena";
import Presentacio from "./components/Presentacio";
import { useState } from "react";
import { data } from "./data.js";

function App() {
  const [principal, setPrincipal] = useState(false);
  const handleClick = () => setPrincipal(true);

  return (
    <>
      {principal ? (
        <Escena data={data} />
      ) : (
        <Presentacio handleClick={handleClick} />
      )}
    </>
  );
}

export default App;
