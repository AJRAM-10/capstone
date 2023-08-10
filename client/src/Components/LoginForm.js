import React, { useEffect, useContext } from "react";
import { Context } from "../App";


function LoginForm() {
    const [user, setUser] = useContext(Context);

    useEffect(() => {
        fetch("/check_session").then((resp) => {
            if (resp.ok) {
              resp.json().then((user) => setUser(user));
            }
        })
    },[])
    
    console.log(user);

    function handleLogin(e) {
        e.preventDefault();

        let email = e.target.email.value;
        let password = e.target.password.value;

        fetch("/login",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify( { email, password } ),
          }).then((resp) => {
            if (resp.ok) {
              resp.json().then((user) => setUser(user));
            }
          });
          alert('You are now Logged In');

          e.target.email.value = '';
          e.target.password.value = '';
    }

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        }).then(setUser(null))
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleLogin}>
                <label>EMAIL</label>
                <input id="email" type="text" />
                <label>PASSWORD</label>
                <input id="password" type="text"></input>
                <button className="button" type='submit'>LOGIN</button>
            </form>

            <h1>Logout</h1>
            <button className="button" onClick = {handleLogout}>Logout</button>
        </div>
    )
}

export default LoginForm