import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  const getData = async () => {
    const data = await axios.get("/api/data");
    console.log(data);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is kritik's testing website</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={getData}>Data</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
