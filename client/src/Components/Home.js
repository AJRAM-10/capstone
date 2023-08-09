import React from "react";
import Carousel from "./Carousel";

function Home(){

    const images = [
        "https://images.squarespace-cdn.com/content/v1/5d3daa4a17aa5f0001719b33/1565154893540-IE9D2A0I9H8HB6YWZPXL/_MG_6065+-+fix.jpg?format=2500w",
        "https://hespokestyle.com/wp-content/uploads/2017/06/oliva-melanio-series-v-robusto-cigar-review-on-cards.jpg",
        "https://privadacigarclub.com/wp-content/uploads/2020/05/FS-41-of-166.jpg"
    ]

    return (
        <main className="main">
            <Carousel images={images}/>
        </main>
    )
}

export default Home