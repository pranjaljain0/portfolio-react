import React, { useState } from 'react'

function ProjectList() {

    const [Projects, setProjects] = useState([
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
        
    ])


    return (
        <div>
            
        </div>
    )
}

export default ProjectList
