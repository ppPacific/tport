import React from 'react';
import './Cards.css'
import CardItem from "./CardItem.jsx";
import Card from 'react-bootstrap/Card';
import Tilt from "react-tilt/dist/tilt.js";

const PCard =({
                  index,
                  name,
                  description,
                  tags,
                  image,
                  source_code_link,}) =>{
    return (
        <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
        >
        <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={image} className="cards__wrapper"/>
            <Card.Body onClick={() => window.open(source_code_link, "_blank")} style={{'cursor':"pointer"}}>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <br/>
                    {description}
                    <br/>
                    {tags.map((tag) => (
                            <p
                                key={`${name}-${tag.name}`}
                                style={{'color':tag.color}}
                            >
                                #{tag.name}
                            </p>
                        ))}
                </Card.Text>
            </Card.Body>
        </Card>
        </Tilt>
    )

}

export default PCard