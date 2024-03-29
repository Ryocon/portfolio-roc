import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
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

  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  /* width: 1400px; */
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const SideA = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h1`
  font-size: 42pt;
  color: transparent;
  line-height: 1.2em;
  text-shadow: 0 0 #000, 0 1.2em #faa916;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    text-shadow: 0 -1.2em #000, 0 0 #faa916;
  }

  @media only screen and (max-width: 768px) {
    font-size: 28pt;
  }
`;
const Description = styled.p`
  display: flex;
  align-items: center;
  margin-top: -25px;
  /* gap: 10px; */
`;

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

  &:hover {
    transition: 0.2s;
    background-color: #6d676e;
    color: #faa916;
  }
`;

const SideB = styled.div`
  flex: 1;
  position: relative;

  @media only screen and (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;
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
    to {
      transform: translateY(20px);
    }
  }

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <SideA>
          <Title>RYAN O'CONNOR</Title>
          <Description>All things web and design</Description>
          <Button></Button>
        </SideA>
        <SideB>
          {/* 3d model pending */}
          <Canvas>
            {/* I can add a loading component here */}
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} autoRotate={true} />
              <ambientLight intensity={1} color="#faa916" />
              <directionalLight position={[3, 3, 2]} color="white" />
              <Sphere args={[1, 150, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#faa916"
                  attach="material"
                  distort={0.52}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <HeroImage src="images/rochimselfsmolroundedpng-min.png" />
        </SideB>
      </Container>
    </Section>
  );
};

export default Hero;
