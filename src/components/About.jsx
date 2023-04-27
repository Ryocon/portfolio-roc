import React from "react";
import styled from "styled-components";


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
    flex: 1;
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
    return (
        <Section>
            <Container>
                <ASide>
                    {/* 3d model pending */}
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