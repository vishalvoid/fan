// src/components/ARViewer.jsx
import React from "react";
import "@google/model-viewer";
import { useEffect, useRef } from "react";

const ARViewer = ({ url }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    const viewer = viewerRef.current;

    // Listen for when AR mode is entered
    viewer.addEventListener("ar-mode-activated", () => {
      // Reduce the scale when entering AR mode
      viewer.setAttribute("scale", "0.2 0.2 0.2"); // Adjust this scale factor as needed
    });

    // Listen for when AR mode is exited
    viewer.addEventListener("ar-mode-deactivated", () => {
      // Reset the scale when exiting AR mode
      viewer.setAttribute("scale", "1 1 1");
    });

    // Cleanup event listeners
    return () => {
      viewer.removeEventListener("ar-mode-activated");
      viewer.removeEventListener("ar-mode-deactivated");
    };
  }, []);
  return (
    <model-viewer
      ref={viewerRef}
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
