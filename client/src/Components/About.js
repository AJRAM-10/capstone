import React from "react"

function About(){
    const aboutPhoto = "https://mshanken.imgix.net/cao/16_9/aj-fernandez-6-1600.jpg?w=1600&q=72"

    return (
        <div className="About-Container">
            <img src={aboutPhoto} alt="About Photo"/>
        
            <h1>About Us</h1>
            <br></br>
            <p className="About Statement">Welcome to Fellowship Cigar Club<br></br>
            Michael Torres has been a cigar officionado for sometime now. <br></br>
            This is where all of the origin statements about michael will go!
            </p>
        
        </div>
    )
}

export default About