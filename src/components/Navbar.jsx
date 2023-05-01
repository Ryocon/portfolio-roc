import React from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";


const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 80%;
  /* background-color: #faa916; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Logo = styled.img`
  width: 10%;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
const ListItem = styled.li`
  color: transparent;
  font-size: 16px;
  cursor: pointer;
  line-height: 1.2em;
  text-shadow: 0 0 #000,
  0 1.2em #FAA916;
  overflow: hidden;
  transition: .3s;

  &:hover {
    text-shadow:
    0 -1.2em #000,
    0 0 #FAA916;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.div`
  width: 20px;
  cursor: pointer;
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
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./public/images/roc.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon>
            <BiSearchAlt size={24} />
          </Icon>
          <Button>Say Hi</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
