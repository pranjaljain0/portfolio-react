import React, { useState } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Navigation from './Navigation'
import Left from './Left'
import HomeCard from "./HomeCard"

export default function Home() {
    
    const [HomeCards, setHomeCards] = useState([
        {
            title:"Projects",
            value:[
            {
                title:"Integrated Autonomous guided wheelchair",
                projectRoute:"/project/1",
                badgeTitle:"Integerated project",
                initialColor:"#56CCF2",
                finalColor:"#2F80ED",
            },
            {
                title:"Multi terrain vehicle",
                projectRoute:"#",
                badgeTitle:"Integerated project",
                initialColor:"#373B44",
                finalColor:"#4286f4",
            },
            {
                title:"KOSK",
                projectRoute:"#",
                badgeTitle:"Mobile",
                initialColor:"#f12711",
                finalColor:"#f5af19",
            },
            {
                title:"KOSK",
                projectRoute:"#",
                badgeTitle:"Web",
                initialColor:"#007991",
                finalColor:"#78ffd6",
            },
            {
                title:"Edudroid",
                projectRoute:"#",
                badgeTitle:"Desktop",
                initialColor:"#11998e",
                finalColor:"#38ef7d",
            },
            {
                title:"Smart Grid",
                projectRoute:"#",
                badgeTitle:"Internet of things",
                initialColor:"#e1eec3",
                finalColor:"#f05053",
            },
        ],
            route:"/projects",
            initialColor:"#56CCF2",
            finalColor:"#2F80ED",
            icon:"GiThorHammer",
        },
        {
            title:"Coding",
            value:[
                {
                    title:"Integrated Autonomous guided wheelchair",
                    projectRoute:"/project/1",
                    badgeTitle:"Integerated project",
                    initialColor:"#56CCF2",
                    finalColor:"#2F80ED",
                },
                {
                    title:"Multi terrain vehicle",
                    projectRoute:"#",
                    badgeTitle:"Integerated project",
                    initialColor:"#373B44",
                    finalColor:"#4286f4",
                },
                {
                    title:"KOSK",
                    projectRoute:"#",
                    badgeTitle:"Mobile",
                    initialColor:"#f12711",
                    finalColor:"#f5af19",
                },
                {
                    title:"KOSK",
                    projectRoute:"#",
                    badgeTitle:"Web",
                    initialColor:"#007991",
                    finalColor:"#78ffd6",
                },
                {
                    title:"Edudroid",
                    projectRoute:"#",
                    badgeTitle:"Desktop",
                    initialColor:"#11998e",
                    finalColor:"#38ef7d",
                },
                {
                    title:"Smart Grid",
                    projectRoute:"#",
                    badgeTitle:"Internet of things",
                    initialColor:"#e1eec3",
                    finalColor:"#f05053",
                },
            ],
            route:"/languages",
            initialColor:"#373B44",
            finalColor:"#4286f4",
            icon:'DiJavascript1',
        },
        {
            title:"Hobbies & Interest",
            value:[
                {
                    title:"Integrated Autonomous guided wheelchair",
                    projectRoute:"/project/1",
                    badgeTitle:"Integerated project",
                    initialColor:"#56CCF2",
                    finalColor:"#2F80ED",
                },
                {
                    title:"Multi terrain vehicle",
                    projectRoute:"#",
                    badgeTitle:"Integerated project",
                    initialColor:"#373B44",
                    finalColor:"#4286f4",
                },
                {
                    title:"KOSK",
                    projectRoute:"#",
                    badgeTitle:"Mobile",
                    initialColor:"#f12711",
                    finalColor:"#f5af19",
                },
                {
                    title:"KOSK",
                    projectRoute:"#",
                    badgeTitle:"Web",
                    initialColor:"#007991",
                    finalColor:"#78ffd6",
                },
                {
                    title:"Edudroid",
                    projectRoute:"#",
                    badgeTitle:"Desktop",
                    initialColor:"#11998e",
                    finalColor:"#38ef7d",
                },
                {
                    title:"Smart Grid",
                    projectRoute:"#",
                    badgeTitle:"Internet of things",
                    initialColor:"#e1eec3",
                    finalColor:"#f05053",
                },
            ],
            route:"#",
            initialColor:"#f12711",
            finalColor:"#f5af19",
            icon:'FaGuitar',
        },
        {
            title:"Education",
            value:[
                {
                    title:"Integrated Autonomous guided wheelchair",
                    projectRoute:"/project/1",
                    badgeTitle:"Integerated project",
                    initialColor:"#56CCF2",
                    finalColor:"#2F80ED",
                },
                {
                    title:"Multi terrain vehicle",
                    projectRoute:"#",
                    badgeTitle:"Integerated project",
                    initialColor:"#373B44",
                    finalColor:"#4286f4",
                },
                {
                    title:"KOSK",
                    projectRoute:"#",
                    badgeTitle:"Mobile",
                    initialColor:"#f12711",
                    finalColor:"#f5af19",
                },
                {
                    title:"KOSK",
                    projectRoute:"#",
                    badgeTitle:"Web",
                    initialColor:"#007991",
                    finalColor:"#78ffd6",
                },
                {
                    title:"Edudroid",
                    projectRoute:"#",
                    badgeTitle:"Desktop",
                    initialColor:"#11998e",
                    finalColor:"#38ef7d",
                },
                {
                    title:"Smart Grid",
                    projectRoute:"#",
                    badgeTitle:"Internet of things",
                    initialColor:"#e1eec3",
                    finalColor:"#f05053",
                },
            ],
            route:"#",
            initialColor:"#007991",
            finalColor:"#78ffd6",
            icon:'GiBookshelf',
        },
        {
            title:"Social",
            value:[
                {
                    title:"Integrated Autonomous guided wheelchair",
                    projectRoute:"/project/1",
                    badgeTitle:"Integerated project",
                    initialColor:"#56CCF2",
                    finalColor:"#2F80ED",
                },
                {
                    title:"Multi terrain vehicle",
                    projectRoute:"#",
                    badgeTitle:"Integerated project",
                    initialColor:"#373B44",
                    finalColor:"#4286f4",
                },
                {
                    title:"KOSK",
                    projectRoute:"#",
                    badgeTitle:"Mobile",
                    initialColor:"#f12711",
                    finalColor:"#f5af19",
                },
                {
                    title:"KOSK",
                    projectRoute:"#",
                    badgeTitle:"Web",
                    initialColor:"#007991",
                    finalColor:"#78ffd6",
                },
                {
                    title:"Edudroid",
                    projectRoute:"#",
                    badgeTitle:"Desktop",
                    initialColor:"#11998e",
                    finalColor:"#38ef7d",
                },
                {
                    title:"Smart Grid",
                    projectRoute:"#",
                    badgeTitle:"Internet of things",
                    initialColor:"#e1eec3",
                    finalColor:"#f05053",
                },
            ],
            route:"#",
            initialColor:"#11998e",
            finalColor:"#38ef7d",
            icon:'TiSocialAtCircular',
        },
        {
            title:"Work Experience",
            value:[
                {
                    title:"Integrated Autonomous guided wheelchair",
                    projectRoute:"/project/1",
                    badgeTitle:"Integerated project",
                    initialColor:"#56CCF2",
                    finalColor:"#2F80ED",
                },
                {
                    title:"Multi terrain vehicle",
                    projectRoute:"#",
                    badgeTitle:"Integerated project",
                    initialColor:"#373B44",
                    finalColor:"#4286f4",
                },
                {
                    title:"KOSK",
                    projectRoute:"#",
                    badgeTitle:"Mobile",
                    initialColor:"#f12711",
                    finalColor:"#f5af19",
                },
                {
                    title:"KOSK",
                    projectRoute:"#",
                    badgeTitle:"Web",
                    initialColor:"#007991",
                    finalColor:"#78ffd6",
                },
                {
                    title:"Edudroid",
                    projectRoute:"#",
                    badgeTitle:"Desktop",
                    initialColor:"#11998e",
                    finalColor:"#38ef7d",
                },
                {
                    title:"Smart Grid",
                    projectRoute:"#",
                    badgeTitle:"Internet of things",
                    initialColor:"#e1eec3",
                    finalColor:"#f05053",
                },
            ],
            route:"#",
            initialColor:"#e1eec3",
            finalColor:"#f05053",
            icon:'GoRepo'
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
