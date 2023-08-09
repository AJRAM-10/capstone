import React, { useState } from "react";

function NewBundleForm({ bundles }){

    const [ cigars, setCigars ] = useState("")
    const customBundle = bundles[3]
    
    console.log(customBundle)
    const id = customBundle.id

    console.log(id)

    function handleSubmit(e) {
        e.preventDefault();

        console.log("clicked")

        fetch(`/bundles/${id}`,{
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { cigars } ),
          })
          .then(resp => resp.json())
          .then((patchBundle) => setCigars(cigars))
  
          alert('Bundle Changed! Please refresh to reflect changes.')
    }

    function handleChange(e) {
        parseInt(e.target.value, 10)

        console.log(e.target.value)

        setCigars(e.target.value)
    }
    
    return(
        <div>
            <h1>Custom Bundle</h1>
            <form id="new-bundle" onSubmit={handleSubmit}>
                <label for="cigars">Cigars</label>
                <select className="select" name="cigars" id="cigars" onChange={handleChange}>
                    <option value="1">New World Cameroon - AJ Fernandez</option>
                    <option value="2">New World Dorado - AJ Fernandez</option>
                    <option value="3">New World Connecticut - Aj Fernandez</option>
                    <option value="4">Serie Aniversario - God of Fire</option>
                    <option value="5">Opus X Lost City - Fuente Fuente</option>
                    <option value="6">Edicion de Aniversario - Don Carlos</option>
                    <option value="7">Pledge - EP Carillo</option>
                    <option value="8">Julius Caesar - Diamon Crown</option>
                    <option value="9">Serie V Melanio - Oliva</option>
                </select>
                <button className="button" type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default NewBundleForm