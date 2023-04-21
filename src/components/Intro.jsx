import React from 'react'
import styled from "styled-components";
import {BallCanvas} from "./canvas";
import {technologies} from "../constants";
import {fadeIn, textVariant} from "../utils/motion.js";
import { motion } from "framer-motion";

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
    content: "Overview.";
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

const shIntro = styled.p`
  font-size: 24px;
  color: lightgray;
  opacity: 0.8;
  @media only screen and (max-width: 768px) {
    padding: 12px;
    text-align: left;
  }
`;
const Desc = styled.p`
  font-size: 18px;
  color: lightgray;
  opacity: 0.9;
  @media only screen and (max-width: 768px) {
    padding: 12px;
    text-align: left;
  }
`;
const Intro = (props) => {
    return (
        <Section id={props.id}>
            <Container>
            <Subtitle>Overview.</Subtitle>
            <Desc>
                I'm a dedicated software developer with experience in JavaScript and
                Java, and experienced in frameworks like React, Node.js. I'm a
                quick learner and excited to deliver high-quality products to clients.
            </Desc>

                <Container2>
                {technologies.map((technology) => (
                    <div style={{'width':'160px', 'height':'160px'}} key={technology.name}>
                        <BallCanvas icon={technology.icon}/>
                    </div>
                ))}
                </Container2>
            </Container>
        </Section>
    )
}
export default Intro