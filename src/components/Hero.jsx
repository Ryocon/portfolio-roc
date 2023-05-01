import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Spline from '@splinetool/react-spline';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  background-color: #fbfffe;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  `
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  `
const SideA = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  `
const SideB = styled.div`
    flex: 1;
    position: relative;
  `
const Title = styled.h1`
    font-size: 36pt;
  `
const Description = styled.p`
    display: flex;
    align-items: center;
    /* gap: 10px; */
  `
const HeroImage = styled.img`
    height: 50%;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;
    -moz-user-select: none;
-webkit-user-select: none;
user-select: none;

    @keyframes animate {
        to{
            transform: translateY(20px);
        }
    }
  `
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #faa916;
  color: black;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-family: inherit;
  /* font-size: 1em; */
  `


const Hero = () => {
    return (
        <Section>
            <Navbar />
            <Container>
                <SideA>
                    <Title>Hello There</Title>
                  
                    <Description>I am the person doing the thing</Description>
                    <Button>Press Me</Button>
                </SideA>
                <SideB>
                    {/* 3d model pending */}
                    <Canvas>
                      {/* I can add a loading component here */}
                      <Suspense fallback={null}>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} 
                        color='#faa916'/>
                        <directionalLight position={[3, 3, 2]}
                        color='white' />
                        <Sphere args={[1, 150, 200]} scale={2.4}>
                          <MeshDistortMaterial
                          color='#faa916'
                          attach='material'
                          distort={0.55}
                          speed={2}
                          
                          />


                        </Sphere>

                      </Suspense>

                    </Canvas>
                    <HeroImage src="./public/images/rochimselfsmolroundedpng-min.png" />
                    
                </SideB>
            </Container>
        </Section>
    )
}

export default Hero




