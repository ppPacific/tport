import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import {Canvas} from "@react-three/fiber";
import {MeshDistortMaterial, OrbitControls, Sphere} from "@react-three/drei";

const Section = styled.div`
  height: 95vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = (props) => {
    const ref = useRef();
    const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_0jcvije",
                "template_yq94zbn",
                ref.current,
                "yY7EK-C6zO2S2aMwF"
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
        <Section id={props.id}>
            <Container>
                <Left>
                    <Form ref={ref} onSubmit={handleSubmit}>
                        <Title>Contact Me</Title>
                        <Input placeholder="Name" name="name" />
                        <Input placeholder="Email" name="email" />
                        <TextArea
                            placeholder="Write your message"
                            name="message"
                            rows={10}
                        />
                        <Button type="submit">Send</Button>
                        {success &&
                            "Your message has been sent. I'll get back to you soon :)"}
                    </Form>
                </Left>
                <Right>
                    <Canvas>
                        <OrbitControls enableZoom={false} autoRotate />
                        <ambientLight intensity={1}/>
                        <directionalLight position={[3,2,1]}/>
                        <Sphere args={[1,300,300]} scale={1.8}>
                        <MeshDistortMaterial
                        color="#4b2473" attach="material" distort={0.5} speed={2}/>
                        </Sphere>
                    </Canvas>
                </Right>
            </Container>
        </Section>
    );
};

export default Contact;