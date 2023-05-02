import React, { Suspense } from "react";
import { OrbitControls, Box, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Scene() {
  const texture = useLoader(TextureLoader, "./public/images/altf4-main.PNG");
  return (
    <>
      <ambientLight intensity={0.5} />
      {/* <directionalLight position={[3, 3, 2]}
                        color='white' /> */}
      <PerspectiveCamera makeDefault position={[10, 6, 36]} />
      <mesh>
        <Box args={[30, 18, 1]}>
          <meshStandardMaterial map={texture} />
        </Box>
      </mesh>
    </>
  );
}

export default function ProjectTwo() {
  return (
    <Canvas>
      <OrbitControls autoRotate={true} enableZoom={false} />

      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
