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
        <div className="user-container">
            <h1 className="name">{user.first_name} {user.last_name}</h1>
            <h3 className="email">{user.email}</h3>
            <ul>
                {mySubs}
            </ul>
        </div>
    )
}

export default UserCard