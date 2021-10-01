import "./App.css";
import Escena from "./components/escena/Escena";

import data from "./data.json";

function App() {
  return <Escena data={data} />;
}

export default App;
