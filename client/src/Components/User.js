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
        <>{user ? <UserCard user={user}/>:"No User Found! Login "}</>
    )  
}

export default User