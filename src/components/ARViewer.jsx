// src/components/ARViewer.jsx
import React, { useEffect } from "react";
import "@google/model-viewer";

const ARViewer = ({ url }) => {
  useEffect(() => {
    const viewer = document.querySelector("model-viewer");
    if (viewer) {
      viewer.style.setProperty("--initial-scale", "0.16"); // Set initial scale to 16% of viewport width
    }
  }, []);
  return (
    <model-viewer
      src={url}
      ar
      ar-modes="scene-viewer quick-look webxr"
      auto-rotate
      camera-controls
      style={{ width: "100vw", height: "80vh" }}
    ></model-viewer>
  );
};

export default ARViewer;
