import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Git best practice</h1>
      <header className="App-header">
        <img
          src="https://camo.githubusercontent.com/c0cd7991caeb2b8b037fd2088dabc216b4d50f3f/68747470733a2f2f66656174757265666c6167732e696f2f77702d636f6e74656e742f75706c6f6164732f323031382f30332f666561747572656272616e6368696e67776974686f75742e6a7067"
          className="App-logo"
          alt="logo"
        />
      </header>
      <h2>Setup</h2>
      <ol>
        <li>Make a remote</li>
        <li>Make a local repo</li>
        <li>Add our remote</li>
        <li>Push to master (once)</li>
        <li>Checkout to development</li>
        <li>Push to development</li>
        <li>Make development the default branch</li>
        <li>Make a feature branch</li>
      </ol>
    </div>
  );
}

export default App;
