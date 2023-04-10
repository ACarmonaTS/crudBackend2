import React, { useState } from 'react'
import './App.css'

function App() {
  const [values, setValues] = useState({})

  const handleClick = () => {
    console.log(values);
    fetch("http://localhost:4000/users/name@dominio.et", {
      method: "PUT",
      body: JSON.stringify(values),
      headers: {
        "content-type": "application/json"
      }
    })
  }

  const handleChange = (field, value) => {
    setValues((prevState) => ({
      ...prevState,
        [field]: value
    }))
  }

  return (
    <div className="App">
      <div>
        <div>
          <label>First Name</label>
          <input name='firstName' type="text" onChange={e => handleChange("firstName", e.target.value)}/>
        </div>
        <div>
          <label>Last Name</label>
          <input name='lastName' type="text" onChange={e => handleChange("lastName", e.target.value)}/>
        </div>
        <div>
          <label>Phone</label>
          <input name='phone' type="text" onChange={e => handleChange("phone", e.target.value)}/>
        </div>
        <button onClick={handleClick}>Update</button>
      </div>
    </div>
  )
}

export default App
