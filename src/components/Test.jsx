import React, { Suspense } from "react";
import { OrbitControls, useTexture, MeshDistortMaterial, Sphere, Box, RoundedBox } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import styled from 'styled-components'
import { TextureLoader } from "three/src/loaders/TextureLoader";

const Container = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align: center;
`

function Scene() {
    const mapTest = useLoader(TextureLoader, './public/images/altf4-main.PNG')
    return (
        <>
        <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh>
      <Box args={[30, 15, 1]} >
        {/* <boxGeometry args={[30, 15, 1]} /> */}
        <meshStandardMaterial map={mapTest}/>
        
        </Box>
      </mesh>
        </>
    )
}


export default function Test() {
    // const textureTest = useLoader(TextureLoader, 'roc.png')
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

// export default Test