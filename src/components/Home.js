import React, { useState } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Navigation from './Navigation'
import Left from './Left'
import HomeCard from "./HomeCard"

export default function Home() {

    const [HomeCards, setHomeCards] = useState([
        {
            title:"Total Projects",
            value:'12',
            route:"#",
            initialColor:"#56CCF2",
            finalColor:"#2F80ED",
        },
        {
            title:"Total Projects",
            value:'12',
            route:"#",
            initialColor:"#373B44",
            finalColor:"#4286f4",
        },
        {
            title:"Total Projects",
            value:'12',
            route:"#",
            initialColor:"#f12711",
            finalColor:"#f5af19",
        },
        {
            title:"Total Projects",
            value:'12',
            route:"#",
            initialColor:"#007991",
            finalColor:"#78ffd6",
        },
        {
            title:"Total Projects",
            value:'12',
            route:"#",
            initialColor:"#11998e",
            finalColor:"#38ef7d",
        },
        {
            title:"Total Projects",
            value:'12',
            route:"#",
            initialColor:"#e1eec3",
            finalColor:"#f05053",
        },
        
    ])
    return (
        <div>
            <Navigation/>
            <Container className="innerContainer" fluid> 
                <Row className="mainRow">
                    <Left/>
                    <Col lg className="cols">
                        <Row className="RightSec">
                            <Row className="RightUpperSec">
                                <Col className="RightUpperSecContent">
                                    <h2>About Me</h2>
                                    <p>
                                    I discovered my passion for computer science when I was a sophomore in High School; it was then, when I started learning more for my passion. I am pursuing my bachelor's degree at Avantika University, major in Computer science and engineering. A year later I was introduced to Embedded systems, where I discovered the love for electrics and electronics and also for embedded systems. Then I got a scholarship opportunity to do a research work on Smart grid and started the never-ending journey of becoming a developer along with sharpening my eye for innovations.
                                    </p>
                                </Col>
                            </Row>
                            <Row className="RightLowerSec">
                            {
                                HomeCards.map((HomeCards,index)=>{
                                    return(
                                        <HomeCard HomeCards={HomeCards} key={index}/>
                                    )
                                })
                            }
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
