import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-3xl bg-red-600">Collegeio</h1>
    </div>
  );
}

export default App;
