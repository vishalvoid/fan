// src/components/ARViewer.jsx
import React from "react";
import "@google/model-viewer";

const ARViewer = ({ url }) => {
  return (
    <model-viewer
      src={url}
      ar
      ar-scale="16%"
      ar-modes="scene-viewer quick-look webxr"
      auto-rotate
      camera-controls
      style={{ width: "100vw", height: "80vh" }}
    ></model-viewer>
  );
};

export default ARViewer;
