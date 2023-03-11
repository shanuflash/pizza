import { useState } from "react";
import "./App.css";
import Head from "./components/Head";
import Nav from "./components/Nav";
import Master from "./components/Master";

function App() {
  const [Position, setPosition] = useState(0);
  return (
    <div className="App">
      <Head />
      <Master />
      <Nav />
    </div>
  );
}

export default App;
