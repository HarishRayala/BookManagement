import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MainRoutes from "./Pages/MainRoutes";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar/>
      <MainRoutes />
    </div>
  );
}

export default App;
