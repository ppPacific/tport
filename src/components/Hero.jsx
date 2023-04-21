import React, {useState} from 'react'
import styled from "styled-components";
import NavBar from "./NavBar.jsx";
import { motion } from "framer-motion";
import {fadeIn, textVariant} from "../utils/motion.js";
import {Canvas} from "@react-three/fiber";
import {MeshDistortMaterial, OrbitControls, Sphere} from "@react-three/drei";
import DogCanvas from "./canvas/Dog.jsx";

const data = [
    {text:"Software"},
    {text:"Engineering"},
    {text:"React"},
    {text:"Javascript"},
    {text:"Development"}
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`
const Container = styled.div`
  height: 100%;
  //scroll-snap-align: center;
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
  `
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    //flex: 1;
    //align-items: center;
    padding: 20px;
    justify-content: center;
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  //gap: 0px;
`;

const ListItem = styled.li`
  font-size: 60px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #ff9770;
  position: relative;
  @media only screen and (max-width: 768px) {
    font-size: 48px;
    //color: white;
    //-webkit-text-stroke: 0px;
  }
  ::after {
    content: "${(props) => props.text}";
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
  font-size: 24px;
  color: lightgray;
  opacity: 0.8;
  //@media only screen and (max-width: 768px) {
  //  display: none;
  //}
`;

const Button = styled.button`
  background-color: #ff9b52;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 2;
  position: relative;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 48vw;
  height: 36vh;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 40vw;
    height: 32vh;
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
const Hero =(props)=>{
    let dat = new Date(document.lastModified).toLocaleString()
    const [work, setWork] = useState("Software Engineering");
    return(
        <Section id={props.id}>
            <NavBar/>

            <Container>
                <Left>

                    <List>
                        {data.map(item =>
                            <ListItem key={item.text} text={item.text} onClick={() => setWork(item.text)}>
                                {item.text}
                            </ListItem>
                        )}
                    </List>
                    <motion.span whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
                    <Desc>
                        I'm Tiffany, a software developer. I am passionate in 3D visuals and build high-quality user
                        interfaces and web applications
                    </Desc>
                    </motion.span>
                    {/*<Button>Learn More</Button>*/}

                </Left>

                <Right>
                    {/*<Canvas>*/}
                    {/*    <OrbitControls enableZoom={false} autoRotate />*/}
                    {/*    <ambientLight intensity={1}/>*/}
                    {/*    <directionalLight position={[3,2,1]}/>*/}
                    {/*    <Sphere args={[1,300,300]} scale={1.8}>*/}
                    {/*    <MeshDistortMaterial*/}
                    {/*    color="#220736" attach="material" distort={0.5} speed={2}/>*/}
                    {/*    </Sphere>*/}
                    {/*</Canvas>*/}
                    <DogCanvas/>
                    {/*<Img src="./img/cutecartoondog_4498988.png"/>*/}
                </Right>
                {/*<p style={{ 'fontSize': '12px'}}>Last modified: {dat}</p>*/}
            </Container>
        </Section>
    )
}
export default Hero;
