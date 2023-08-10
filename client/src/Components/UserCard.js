import React from "react";
import Subs from "./Subs";

function UserCard({user}){
    console.log(user)

    const mySubs = user.subs.map((sub) => {
        console.log(sub)
        return (
            <Subs key={sub.id} sub={sub}/>
        )
    })
    return(
        <div className="user-info">
            <ul className="card-list">
                <li className="card">
                    <div className="card-content">
                        <div>
                            <h3 className="name">Name: {user.first_name} {user.last_name}</h3>
                        </div>
                        <div>
                            <h3 className="email">Email: {user.email}</h3>
                        </div>
                    </div>
                </li>
            </ul>
            <ul className="card-list">
                <h1>Your Subscriptions</h1>
                {mySubs}
            </ul>

        </div>
    )
}

export default UserCard