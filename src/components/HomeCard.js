import React from 'react'
import {Col, Badge} from 'react-bootstrap'

function HomeCard({HomeCards}) {
    return (
        <Col className="ColStyle" xs={6} md={4}>
            <div className="innerCol">
                <a href={HomeCards.projectRoute} className="projectLink">
                <div 
                    style={{
                    background: `linear-gradient(120deg,`+HomeCards.initialColor+`,`+HomeCards.finalColor+`)`
                    }}
                     className="innerColImg">
                    <p className="projectTitle">{HomeCards.title}</p>
                    <p className="projectValue">{HomeCards.value}</p>
                </div>
                </a>
            </div>
        </Col>
    )
}

export default HomeCard
