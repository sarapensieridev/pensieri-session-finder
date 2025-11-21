import React, { useState } from 'react'
import { registerAttendee } from '../api'

const Register = () => {
  // State for user input
  const [user, setUser] = useState({name: "", email: "", role: ""})

  const handleRegister = async () => {
    // Defining payload from user state
    const payload = {
      name: user.name,
      email: user.email,
      role: user.role
    };

    // Calling registerAttendee API function
    const result = await registerAttendee(payload)
    if (result.ok) {
      alert(`Registration successful! Your ID: ${result.registrationId}`);
    } else {
      alert(`Registration failed: ${result.error}`);
    }
    console.log("Registration result:", result);
  }
  return (
    <div>
      <form>
        <label>Name:</label>
        <input type="text" name="name" onChange={(e) => setUser({...user, name: e.target.value})} />

        <label>Email:</label>
        <input type="email" name="email" onChange={(e) => setUser({...user, email: e.target.value})} />

        <label>Role:</label>
        <select onChange={(e) => setUser({...user, role: e.target.value})}>
          <option value=""></option>
          <option value="student" >Student</option>
          <option value="junior">Junior</option>
          <option value="middle">Middle</option>
          <option value="senior">Senior</option>
        </select>
      </form>
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}


export default Register
