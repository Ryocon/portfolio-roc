import React, { useState } from "react";
import styled from "styled-components";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";
import ProjectFive from "./ProjectFive";

// ! Projects in the list
const data = [
  "Madchef",
  "Alt-F4",
  "MCU-deep-diver",
  "Pokemon-API",
  "Team-Profile-Gen",
];

const Section = styled.div`
  height: 100vh;
  background-color: #fbfffe;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    
  }
`;
const SideA = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    text-align: center;
    
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
  }
`;
const ListItem = styled.li`
  color: transparent;
  font-size: 50px;
  cursor: pointer;
  line-height: 1.2em;
  text-shadow: 0 0 #000, 0 1.2em #faa916;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    text-shadow: 0 -1.2em #000, 0 0 #faa916;
  }

  @media only screen and (max-width: 768px) {
    font-size: 26pt;
  }
`;

const Button = styled.a`
  width: 100%;
  padding: 10px;
  background-color: #faa916;
  color: black;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-family: inherit;
  /* font-size: 1em; */
  text-decoration: none;
  text-align: center;

  &:hover {
    transition: 0.2s;
    background-color: #6d676e;
    color: #faa916;
  }
`;

const SideB = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Projects = () => {
  const [project, setProject] = useState("");
  return (
    <Section id="project-section">
      <Container>
        <SideA>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setProject(item)}>
                {item}
              </ListItem>
            ))}
            <Button
              href={
                project === "Madchef"
                  ? "https://github.com/Ryocon/MadChef"
                  : project === "Alt-F4"
                  ? "https://github.com/Ryocon/ALT-F4"
                  : project === "MCU-deep-diver"
                  ? "https://github.com/Ryocon/MCU-deep-diver"
                  : project === "Pokemon-API"
                  ? "https://github.com/Ryocon/pokemon-api"
                  : project === "Team-Profile-Gen"
                  ? "https://github.com/Ryocon/team-profile-gen"
                  : "https://github.com/Ryocon/MadChef"
              }
              target="_blank"
            >
              Repo
            </Button>
            <Button
              href={
                project === "Madchef"
                  ? "https://github.com/Ryocon/MadChef"
                  : project === "Alt-F4"
                  ? "https://github.com/Ryocon/ALT-F4"
                  : project === "MCU-deep-diver"
                  ? "https://ryocon.github.io/MCU-deep-diver/"
                  : project === "Pokemon-API"
                  ? "https://ryocon.github.io/pokemon-api/"
                  : project === "Team-Profile-Gen"
                  ? "https://github.com/Ryocon/team-profile-gen"
                  : "https://github.com/Ryocon/MadChef"
              }
              target="_blank"
            >
              Deployment
            </Button>
          </List>
        </SideA>
        <SideB>
          {project === "Madchef" ? (
            <ProjectOne />
          ) : project === "Alt-F4" ? (
            <ProjectTwo />
          ) : project === "MCU-deep-diver" ? (
            <ProjectThree />
          ) : project === "Pokemon-API" ? (
            <ProjectFour />
          ) : project === "Team-Profile-Gen" ? (
            <ProjectFive />
          ) : (
            <ProjectOne />
          )}
        </SideB>
      </Container>
    </Section>
  );
};

export default Projects;
