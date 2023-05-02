import React, { Suspense } from "react";
import { OrbitControls, Box } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Scene() {
    const texture = useLoader(TextureLoader, './public/images/madchef-home.png')
    return (
        <>
        <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh>
      <Box args={[30, 15, 1]} >
        <meshStandardMaterial map={texture}/>
        </Box>
      </mesh>
        </>
    )
}


export default function ProjectFive() {
    return (
        <Container>
            <Canvas>
                <OrbitControls />
                
            <Suspense fallback={null}>
        <Scene />
            </Suspense>
            </Canvas>
        </Container>
    )
}