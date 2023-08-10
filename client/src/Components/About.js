import React from "react"

function About(){
    const aboutPhoto = "https://mshanken.imgix.net/cao/16_9/aj-fernandez-6-1600.jpg?w=1600&q=72"

    return (
        <div className="about">
            <div className="About-Container">

                <img src={aboutPhoto} alt="aboutphoto"/>

                <div className="about-message">
                    <div className="about-header">
                        <h1>About Us</h1>
                    </div>
                </div>
                <div className="statement">
                    <p className="About Statement">
                    Fellowship Cigars began as a casual conversation between friends over a good cigar.
                    Owner Michael Torres began his passion for cigars by simply trying highly-rated cigars across the business.
                    After developing his palate and exploring different brands, Fellowship Cigars launched as the culmination of these hours spent.
                    Each cigar bundle has been smoked by the staff at Fellowship Cigars and has proven to be some of the best and consistent cigars in the industry. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About