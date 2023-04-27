import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  background-color: #6d676e;
  scroll-snap-align: center;
  `
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  `
const SideA = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  `
const Title = styled.h2`
    font-size: 30pt;
  `
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  `
const Input = styled.input`
font-family: inherit;
    padding: 10px;
    border: none;
    border-radius: 10px;
  `
const TextArea = styled.textarea`
font-family: inherit;
    padding: 20px;
    border: none;
    border-radius: 10px;
  `
const Button = styled.button`
    /* width: 100px; */
  padding: 10px;
  background-color: #faa916;
  color: black;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-family: inherit;
  /* font-size: 1em; */
  `
const SideB = styled.div`
  flex: 1;
  `

const handleSubmit = e => {
    e.preventDefault()
}


const Contact = () => {
    return (
        <Section>
            <Container>
                <SideA>
                    <Form onSubmit={handleSubmit}>
                        <Title>Get In Touch</Title>
                        <Input placeholder="Name"></Input>
                        <Input placeholder="Email"></Input>
                        <TextArea placeholder="Ask away!" rows={10}></TextArea>
                        <Button type="submit">Send</Button>
                    </Form>
                </SideA>
                <SideB>
                {/* 3d object goes here */}
                </SideB>
            </Container>
        </Section>
    )
}

export default Contact