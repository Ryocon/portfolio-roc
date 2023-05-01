import React from "react";
import { useRef } from 'react'
import styled from "styled-components";
import Spline from '@splinetool/react-spline';


const Section = styled.div`
  height: 100vh;
  background-color: #fbfffe;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  `
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  `
const ASide = styled.div`
    flex: 2;
  `
const BSide = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  `
const Title = styled.h1`
    font-size: 36pt;
  `
const Description = styled.p`
    display: flex;
    align-items: center;
    /* gap: 10px; */
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



const About = () => {

  // ! Incase I want the button to animate the spline
  // const spline = useRef()

  // function onLoad(splineApp) {
  //   spline.current = splineApp
  // }
  
  // function animateSpline() {
  //   spline.current.emitEvent('mouseHover')
  // }

    return (
        <Section>
            <Container>
                <ASide>
                    {/* 3d model pending */}
                    {/* <Spline scene="https://prod.spline.design/QLIeNGurFO2b5spw/scene.splinecode" onLoad={onLoad}
                    /> */}
                    <Spline scene="https://draft.spline.design/FbmA2OUI3Oro1Pni/scene.splinecode"
                    />
                </ASide>
                <BSide>
                <Title>About me</Title>
                    <Description>I am a dev</Description>
                    <Button>Press Me</Button>
                </BSide>
            </Container>
        </Section>
    )
}

export default About