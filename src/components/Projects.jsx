import React, { useState } from "react";
import styled from "styled-components";
import ProjectOne from './ProjectOne'
import ProjectTwo from './ProjectTwo'
import ProjectThree from './ProjectThree'
import ProjectFour from './ProjectFour'
import ProjectFive from './ProjectFive'

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
const SideA = styled.div`
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

  const SideB = styled.div`
  flex: 1;
  `

const Projects = () => {
  const [project, setProject] = useState('')
    return (
        <Section>
            <Container>
                <SideA>
                    <List>
                        {data.map((item) => (
                            <ListItem key={item} text={item} onClick={() => setProject(item)}>{item}</ListItem>
                        ))}    
                    </List>
                </SideA>
                <SideB>
                  {project === 'Madchef' ? (
                  <ProjectOne/>
                  ) :
                    project === 'Alt-F4' ? (
                      <ProjectTwo/>
                    ) :
                      project === 'MCU-deep-diver' ? (
                        <ProjectThree/>
                      ) :
                        project === 'Pokemon-API' ? (
                          <ProjectFour/>
                        ) :
                          project === 'Team-Profile-Gen' ? (
                            <ProjectFive/>
                            ) : (
                              <ProjectOne/>
                            )}
                </SideB>
            </Container>
        </Section>
    )
}

export default Projects