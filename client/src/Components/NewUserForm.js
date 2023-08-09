import React, { useState, useEffect } from "react";

function NewUserForm(){
    const [ users, setUsers ] = useState([])
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    useEffect(() => {
        fetch('/users')
        .then(resp => resp.json())
        .then(users => setUsers(users))
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        let newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }

        fetch("/users", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(resp => resp.json())
            .then(newUser = setUsers([...users, newUser])
        )

        alert('Welcome To Fellowship Cigars');

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    }


    return(
        <div>
            <h1>CREATE ACCOUNT</h1>
            <form id="register" onSubmit={handleSubmit}>
                <label for="firstName">FIRST NAME</label>
                <input type='text' id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                <label for="lastName">LAST NAME</label>
                <input type='text' id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                <label for="email">EMAIL</label>
                <input type='text' id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label for="password">PASSWORD</label>
                <input type='text' id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewUserForm