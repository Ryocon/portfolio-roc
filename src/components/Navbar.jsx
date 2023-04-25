import React from "react";
import styled from "styled-components";
import {BiSearchAlt} from "react-icons/bi"

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
const Logo = styled.img`
width: 10%;
    
`
const List = styled.ul`
    
`
const ListItem = styled.li`
    
`
const Icons = styled.div`
    
`
const Icon = styled.div`
    
`
const Button = styled.button`
    
`


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
                    <Icon><BiSearchAlt /></Icon>
                    <Button>Get In Touch</Button>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar