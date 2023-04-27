import React from "react";
import styled from "styled-components";

// ! Projects in the list
const data = [
    'Madchef',
    'Alt-F4',
    'MCU-deep-diver',
    'Pokemon-API',
    'Team-Profile-Gen'
]

const Section = styled.div`
  height: 100vh;
  background-color: #fbfffe;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  `
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  `
const ASide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  `
const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `
const ListItem = styled.li`
color: transparent;
  font-size: 50px;
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
  `

  const BSide = styled.div`
  flex: 1;
  `

const Projects = () => {
    return (
        <Section>
            <Container>
                <ASide>
                    <List>
                        {data.map((item) => (
                            <ListItem key={item}>{item}</ListItem>
                        ))}    
                    </List>
                </ASide>
                <BSide>

                </BSide>
            </Container>
        </Section>
    )
}

export default Projects