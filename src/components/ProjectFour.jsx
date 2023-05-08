import React, { Suspense } from "react";
import { OrbitControls, Box, PerspectiveCamera, useTexture } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";


function Scene() {
  const texture = useTexture({
    map: "./images/pokemon-api-desktop.PNG",
  });
  return (
    <>
      <ambientLight intensity={0.6} />
      {/* <directionalLight position={[3, 3, 2]}
                        color='white' /> */}
      <PerspectiveCamera makeDefault position={[10, 6, 36]} />
      <mesh>
        <Box args={[30, 18, 1]}>
          <meshStandardMaterial {...texture} />
        </Box>
      </mesh>
    </>
  );
}

export default function ProjectFour() {
  return (
    <Canvas>
      <OrbitControls autoRotate={true} enableZoom={false} />

      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
