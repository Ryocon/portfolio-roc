import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

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
  height: 100vh;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  `
const ASide = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  `
const BSide = styled.div`
    flex: 3;
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
    height: 40%;
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
                <ASide>
                    <Title>Hello There</Title>
                    <Description>I am the person doing the thing</Description>
                    <Button>Press Me</Button>
                </ASide>
                <BSide>
                    {/* 3d model pending */}
                    <HeroImage src="./public/images/rochimselfsmolroundedpng-min.png" />
                </BSide>
            </Container>
        </Section>
    )
}

export default Hero