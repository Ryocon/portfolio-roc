import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";

const Section = styled.div`
  height: 100vh;
  background-color: #fbfffe;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 10px;
  }
`;
const ASide = styled.div`
  flex: 1;
  /* overflow: visible; */

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const BSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-right: 30px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    margin-right: 0px;
  }
`;
const Title = styled.h1`
  font-size: 36pt;
  color: transparent;
  line-height: 1.2em;
  text-shadow: 0 0 #000, 0 1.2em #faa916;
  overflow: hidden;
  transition: 0.3s;
  margin-bottom: -5px;

  &:hover {
    text-shadow: 0 -1.2em #000, 0 0 #faa916;
  }
`;
const Description = styled.p`
  display: flex;
  align-items: center;
  text-align: center;
  /* gap: 10px; */
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 30px;
  padding-bottom: 10px;

  @media only screen and (max-width: 768px) {
    width: 20%;
    gap: 20px;
  }
`;

const Icon = styled.a`
  width: 20px;
  cursor: pointer;
  text-decoration: none;
  color: black;

  &:hover {
    transition: 0.2s;
    color: #faa916;
  }
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
    <Section id="about-section">
      <Container>
        <ASide>
          {/* 3d model pending */}
          {/* <Spline scene="https://prod.spline.design/QLIeNGurFO2b5spw/scene.splinecode" onLoad={onLoad}
                    /> */}
          <Spline scene="https://draft.spline.design/FbmA2OUI3Oro1Pni/scene.splinecode" />
        </ASide>
        <BSide>
          <Title>About</Title>
          <Description>
            Fullstack Developer, Educator and creative based in Warwickshire, UK{" "}
            <br></br>Capable and experienced with a range of modern Fullstack
            technologies to build and design projects for the web
          </Description>
          <Icons>
            <Icon>
              <IoLogoJavascript size={24} />
            </Icon>
            <Icon>
              <IoLogoHtml5 size={24} />
            </Icon>
            <Icon>
              <IoLogoCss3 size={24} />
            </Icon>
            <Icon>
              <FaNodeJs size={24} />
            </Icon>
            <Icon>
              <FaReact size={24} />
            </Icon>
            <Icon>
              <TbBrandThreejs size={24} />
            </Icon>
          </Icons>
          <Button></Button>
        </BSide>
      </Container>
    </Section>
  );
};

export default About;
