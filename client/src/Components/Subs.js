import React from "react";

function Subs({ sub }) {

    const id = sub.id

    function handleDelete(e) {
        console.log('clicked')
        fetch(`/subscriptions/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            },
        })
        
       alert('Subscription Deleted! Please refresh to reflect changes.')

    }

    return (
        <li className="card">
            <div>
                {/* <img src={cigar.cig_pic} alt={cigar.name} className="card-img"/> */}
                <div className="card-content">
                    <div>
                        <h3>{sub.bundle.name}</h3>
                    </div>
                    <div>
                        <h3>{sub.bundle.price}</h3>
                    </div>
                    <button className="button" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </li> 
    )
}

export default Subs