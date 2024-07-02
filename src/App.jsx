// src/App.jsx
import React from "react";
import ARViewer from "./components/ARViewer";
import "./App.css";

const App = () => {
  const modelUrl = "/AR.glb"; // Update with your Ngrok URL

  return (
    <div className="App">
      <ARViewer url={modelUrl} />
    </div>
  );
};

export default App;
