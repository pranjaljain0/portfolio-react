import React from 'react'
import Typed from 'react-typed';
function LeftText() {
    return (
        <div className="leftText">
            <h2>Hi, </h2>
            <span className="preTitle">I am </span>
            <h1 className="name_big">Pranjal Jain</h1>
            <p className="animated_text">
            <Typed
                 strings={[
                    'I am an engineer',
                    'I am a Developer',
                    'I am a Critical Thinker',
                    'I am a Guitarist',]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop ></Typed>
                    </p>
            <p>
            I discovered my passion for computer science when I was a sophomore in High School; it was then, when I started learning more for my passion. I am pursuing my bachelor's degree at Avantika University, major in Computer science and engineering. A year later I was introduced to Embedded systems, where I discovered the love for electrics and electronics and also for embedded systems. Then I got a scholarship opportunity to do a research work on Smart grid and started the never-ending journey of becoming a developer along with sharpening my eye for innovations.
            </p>
        </div>
    )
}

export default LeftText
