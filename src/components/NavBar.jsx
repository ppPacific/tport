import React from 'react'
import styled from "styled-components";
import { github } from "../assets";
const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.a`
  color: white;
  cursor: pointer;
  text-decoration: none;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 40px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #ff9b52;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const NavBar =()=>{
    return(
        <Section>
            <Container>
                <Links>
                    <Logo src="img/tiffy-low-resolution-logo-color-on-transparent-background.png"/>
                <List>
                    <ListItem href="#home">Home</ListItem>
                    <ListItem href="#skill">Intro</ListItem>
                    <ListItem href="#work">Projects</ListItem>
                    <ListItem href="#contact">Contact</ListItem>
                </List>
                </Links>
                <Icons>
                    <Icon src={github}/>
                    {/*<Button>Click me</Button>*/}
                </Icons>
            </Container>
        </Section>
    )
}
export default NavBar