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
                    <Col md className="cols">
                        <Row className="RightSec">
                            <Row>
                                <Col>
                                <p>a</p>
                                </Col>
                            </Row>
                            <Row>
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
