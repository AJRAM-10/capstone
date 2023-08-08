import React, { useState } from "react";

function LoginForm(){
    const [user, setUser] = useState(null);

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
          alert('You are now Logged In')
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
                <button type='submit'>LOGIN</button>
            </form>

            <h1>Logout Form</h1>
            <button onClick = {handleLogout}>Logout</button>
        </div>
    )
}

export default LoginForm