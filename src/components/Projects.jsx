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
  `
const List = styled.ul`

  `
const ListItem = styled.li`
  
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