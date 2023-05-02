import React, { Suspense } from "react";
import { OrbitControls, Box, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Scene() {
    const texture = useLoader(TextureLoader, './public/images/madchef-home.png')
    return (
        <>
        <ambientLight intensity={0.4} />
      <directionalLight />
      <PerspectiveCamera makeDefault position={[10, 6, 36]} />
      <mesh>
      <Box args={[30, 18, 1]} >
        <meshStandardMaterial map={texture}/>
        
        </Box>
      </mesh>
        </>
    )
}


export default function ProjectOne() {
    return (
        
            <Canvas>
                <OrbitControls autoRotate={true} enableZoom={false}/>
                
                
            <Suspense fallback={null}>
        <Scene />
            </Suspense>
            </Canvas>
        
    )
}