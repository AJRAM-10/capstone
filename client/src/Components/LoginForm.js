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
        <div className="login">
            <h1>Login</h1>
            <div className="form-container">
                <form className="form" onSubmit={handleLogin}>
                    <label>EMAIL:</label>
                    <input id="email" type="text" />
                    <br></br>
                    <label>PASSWORD:</label>
                    <input id="password" type="text"></input>
                    <br></br>
                    <button className="button" type='submit'>LOGIN</button>
                </form>
            </div>
            <h1>Logout</h1>
            <div className="form-container">
              <div className="form">
                  <button className="button" onClick = {handleLogout}>Logout</button>
              </div>
            </div>
        </div>
    )
}

export default LoginForm