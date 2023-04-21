import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import styled from "styled-components";
import Works from "./components/Works.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";
import Credits from "./components/Credits.jsx";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none; //only for firefox
  color: white;
  background: url("/img/herobg.png");
  //object-fit: cover;
  background-size: cover;

  &::-webkit-scrollbar { //add this for chrome
    display: none;
  }
`

function App() {

    return (
        <Container>
            <Hero id="home"/>
            <Intro id="skill"/>
            <Works id="work"/>
            <Contact id="contact"/>
            <Credits id="credits"/>
        </Container>
    )
}

//"Voxel Dog" (https://skfb.ly/6W9QU) by Takuya is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
export default App
