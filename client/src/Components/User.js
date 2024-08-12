import React, { useEffect, useContext } from "react";
import { Context } from "../App";
import UserCard from "./UserCard";
function User() {

    const [ user, setUser ] = useContext(Context)

    useEffect(() => {
        fetch("/check_session").then((resp) => {
            if (resp.ok) {
              resp.json().then((user) => setUser(user));
            }
        })
    },[])

    return (
        <div className="account">
            <div>
                {user ? <UserCard user={user}/>:<h1>No User Found! Please Login</h1>}
            </div>
        </div>
    )  
}

export default User