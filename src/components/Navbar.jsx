import React from "react";
import styled from "styled-components";

const Section = styled.div`
    display: flex;
    justify-content: center;
  `

const Container = styled.div`
    width: 80%;
    background-color: #faa916;
`
const Links = styled.div`
    
`
const Icons = styled.div`
    
`


const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                <Logo src="./img/roc.png" />
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>About</ListItem>
                    <ListItem>Projects</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
                </Links>
                <Icons>
                    <Icon></Icon>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar