import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 80%;
  /* background-color: #faa916; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  width: 10%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
// const ListItem = styled.li`
//   color: transparent;
//   font-size: 16px;
//   cursor: pointer;
//   line-height: 1.2em;
//   text-shadow: 0 0 #000, 0 1.2em #faa916;
//   overflow: hidden;
//   transition: 0.3s;

//   &:hover {
//     text-shadow: 0 -1.2em #000, 0 0 #faa916;
//   }
// `;
const Link = styled.a`
  color: transparent;
  font-size: 16px;
  cursor: pointer;
  line-height: 1.2em;
  text-shadow: 0 0 #000, 0 1.2em #faa916;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    text-shadow: 0 -1.2em #000, 0 0 #faa916;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;

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

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./public/images/roc-logo.png" />
          <List>
            {/* <ListItem to='#About'>About</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Contact</ListItem> */}
            <Link href='#about-section'>About</Link>
            <Link href='#project-section'>Projects</Link>
            <Link href='#contact-section'>Contact</Link>
          </List>
        </Links>
        <Icons>
          <Icon href="https://www.linkedin.com/in/rocdev/" target="_blank">
            <FaLinkedin size={24} />
          </Icon>
          <Icon href="https://github.com/Ryocon" target="_blank">
            <FaGithub size={24} />
          </Icon>

          {/* <Button>Say Hi</Button> */}
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
