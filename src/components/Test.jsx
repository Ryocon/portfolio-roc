import React from "react";
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align: center;
`


const Test = () => {
    return (
        <Container>
            <Canvas>
                <OrbitControls enableZoom={false} autoRotate/>
                <directionalLight position={ [ 3, 2, 1 ] } />
            <mesh>
            <torusGeometry args={[10, 3, 16, 100]} />
            <meshStandardMaterial />
            </mesh>
            </Canvas>
        </Container>
    )
}

export default Test