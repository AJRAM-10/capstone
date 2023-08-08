import React, { useState, useEffect } from "react";
import BundlesCard from "./BundlesCard";
import NewBundleForm from "./NewBundleForm";

function Bundles() {
    const [ bundles, setBundles ] = useState([])

    useEffect(() => {
        fetch("/bundles")
        .then(resp => resp.json())
        .then(data => setBundles(data))
    }, [])

    const pack = bundles.map((bundle) => {
        return (
            <BundlesCard key={bundle.id} bundle={bundle}/>
        )
    })

    const customBundle = bundles[3]
    console.log(customBundle)
    return (
        <div>
            <ul className="card-list">
                {pack}
            </ul>
            <div>
                <NewBundleForm customBundle={customBundle} />
            </div>
        </div>
    )
}

export default Bundles