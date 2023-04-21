import React from 'react'
import styled from "styled-components";
import { projects } from "../constants";
import PCard from "./Cards.jsx";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Container = styled.div`
  //height: 100%;
  //scroll-snap-align: center;
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`
const Container2 = styled.div`
  //height: 100%;
  //scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4em;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: row;
  }
`;
const Subtitle = styled.p`
  font-size: 48px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #ff9770;
  position: relative;
  margin: 0.4em 0 0.4em 0;
  @media only screen and (max-width: 768px) {
    font-size: 48px;
    //color: white;
    //-webkit-text-stroke: 0px;
  }
  ::after {
    content: "Projects.";
    position: absolute;
    top: 0;
    left: 0;
    color: #fca311;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
const Desc = styled.p`
  font-size: 18px;
  color: lightgray;
  opacity: 0.9;
  margin-bottom: 0.8em;
  @media only screen and (max-width: 768px) {
    padding: 12px;
    text-align: left;
  }
`;

const Works =(props)=>{
    return(
        <Section id={props.id}>
            <Container>
                <Subtitle>Projects.</Subtitle>
                <Desc>
                    Following projects showcases some of my skills and experience.
                    Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    work with different technologies, and manage projects effectively.
                </Desc>
                <Container2>
                {/*<div style={{'height':'10em'}}>*/}
                    {projects.map((project, index) => (
                        <PCard key={`project-${index}`} index={index} {...project} />
                    ))}
                {/*</div>*/}
                </Container2>
        </Container>
        </Section>

    )
}
export default Works
