import React from "react"

function About(){
    const aboutPhoto = "https://mshanken.imgix.net/cao/16_9/aj-fernandez-6-1600.jpg?w=1600&q=72"

    return (
        <div className="About-Container">
            <img src={aboutPhoto} alt="About Photo"/>
        
            <h1>About Us</h1>
            <br></br>
            <p className="About Statement">Welcome to Fellowship Cigar Club<br></br>
            Fellowship Cigars began as a casual conversation between friends over a good cigar. <br></br>
            Owner Michael Torres began his passion for cigars by simply trying highly-rated cigars across the business. <br></br>
            After developing his palate and exploring different brands, Fellowship Cigars launched as the culmination of these hours spent.<br></br>
            Each cigar bundle has been smoked by the staff at Fellowship Cigars and has proven to be some of the best and consistent cigars in the industry. 
            </p>
        
        </div>
    )
}

export default About