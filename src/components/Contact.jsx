import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Map from './Map'

const Section = styled.div`
  height: 100vh;
  background-color: #6d676e;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
const SideA = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    
  }
`;
const Title = styled.h2`
  font-size: 42pt;
  color: transparent;
  line-height: 1.2em;
  text-shadow: 0 0 #000,
  0 1.2em #FAA916;
  overflow: hidden;
  transition: .3s;
  margin-bottom: 0px;
  text-align: center;
  
  &:hover {
    text-shadow:
    0 -1.2em #000,
    0 0 #FAA916;
  }

  @media only screen and (max-width: 768px) {
    font-size: 32pt;
    
  }
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    width: 80%;
    
  }
`;
const Input = styled.input`
  font-family: inherit;
  padding: 10px;
  border: none;
  border-radius: 10px;
`;
const TextArea = styled.textarea`
  font-family: inherit;
  padding: 20px;
  border: none;
  border-radius: 10px;
`;
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

  &:hover {
    transition: .2s;
    background-color: white;
    color: #faa916;
  }
`;
const SideB = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
    
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_olbngvn",
        "template_8l5b8m5",
        ref.current,
        "pmgoIwBmppcQDLT3U"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <SideA>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Get In Touch</Title>
            <Input placeholder="Name" name="name"></Input>
            <Input placeholder="Email" name="email"></Input>
            <TextArea
              placeholder="Ask away!"
              name="message"
              rows={10}
            ></TextArea>
            <Button type="submit">Send</Button>
            {success && "Message received, I will get back to you soon!"}
          </Form>
        </SideA>
        <SideB>
            <Map />
        </SideB>
      </Container>
    </Section>
  );
};

export default Contact;
