import React, { useEffect, useContext, useState } from "react";
import { Context } from "../App";


function BundlesCard({ bundle }) {

    const [ user, setUser ] = useContext(Context)
    const [ thisBundle ] = useState(bundle)
    const [ time, setTime ] = useState("Monthly")
    const [ subs, setSubs ] = useState("")

    useEffect(() => {
        fetch("/check_session").then((resp) => {
            if (resp.ok) {
              resp.json().then((user) => setUser(user));
            }
        })
    },[])

    function handleClick (){
        console.log('clicked')

        let newSub = {
            time: time,
            bundle: thisBundle.id,
            user: user.id
        }

        fetch("/subscriptions", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSub)
        })
        .then(resp => resp.json())
        .then(newSub = setSubs([...subs, newSub]))
    }

    function handleChange(e){
        setTime(e.target.value)
    }

    console.log(time)
    
    return (
        <li className="card">
            <div>
                {/* <img src={cigar.cig_pic} alt={cigar.name} className="card-img"/> */}
                <div className="card-content">
                    <div>
                        <h3>{bundle.name}</h3>
                    </div>
                    <div>
                        <h3>{bundle.cigar.name}</h3>
                    </div>
                    <div>
                        <h3>${bundle.price}</h3>
                    </div>
                    <select className="select" onChange={handleChange}>
                        <option value="Monthly">Monthly</option>
                        <option value="Bi-Monthly">Bi-Monthly</option>
                    </select>
                    <button className="button" onClick={handleClick}>Subscribe</button>
                </div>
            </div>
        </li>
    )
}

export default BundlesCard

