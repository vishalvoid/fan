// src/components/GLBViewer.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

const GLBViewer = ({ url }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={1} />
      <Suspense fallback={null}>
        <Model url={url} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default GLBViewer;
