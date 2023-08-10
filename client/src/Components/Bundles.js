import React, { useState, useEffect } from "react";
import BundlesCard from "./BundlesCard";
import NewBundleForm from "./NewBundleForm";

function Bundles() {
    console.log('here')
    const [bundles, setBundles] = useState([])

    let pack
    

    useEffect(() => {
        console.log("useEffect")
        fetch("/bundles")
        .then(resp => resp.json())
        .then(data => setBundles(data))
    }, [])

    pack = bundles.map((bundle) => {
        return (
            <BundlesCard key={bundle.id} bundle={bundle}/>
        )
    })

    console.log(bundles)
   
    console.log(pack)
    return (
        <div className="bundles">
            <h1>Bundles</h1>
            <ul className="card-list">
                {pack}
            </ul>
            <div className="form-container">
                {bundles.length>0 && <NewBundleForm bundles={bundles}/>}
            </div>
        </div>
    )
}

export default Bundles