import React, { useEffect, useState } from "react";
import CigarCard from "./CigarCard"

function Cigars(){

    const [ cigars, setCigars ] = useState([])

    useEffect(() => {
        fetch("/cigars")
        .then(resp => resp.json())
        .then(data => setCigars(data))
    }, [])

    const humidor = cigars.map((cigar) => {
        return (
            <CigarCard key={cigar.id} cigar={cigar}/>
        )
    })

    console.log(cigars)

    console.log(humidor)
    return (
        <div className="cigars">
            <h1>Cigars</h1>
            <ul className="card-list">
                {humidor}
            </ul>
        </div>
    )
}

export default Cigars