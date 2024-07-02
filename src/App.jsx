// src/App.jsx
import React, { useState } from "react";
import GLBViewer from "./components/GLBViewer";
import ARViewer from "./components/ARViewer";
import "./App.css";

const App = () => {
  const [showAR, setShowAR] = useState(false);
  const modelUrl = "https://<your-ngrok-url>/path/to/your/model.glb"; // Update with your Ngrok URL

  return (
    <div className="App">
      <h1>Three.js and AR Model Viewer</h1>
      <button onClick={() => setShowAR(!showAR)}>
        {showAR ? "View in 3D" : "View in AR"}
      </button>
      {showAR ? <ARViewer url={modelUrl} /> : <GLBViewer url={modelUrl} />}
    </div>
  );
};

export default App;
