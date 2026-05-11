import React from 'react'


const [username,setUsername]=React.useState("")
const [email,setEmail]=React.useState("")
const [password,setPassword]=React.useState("")

const handelSubmit =(e)=>{
    e.preventDefault()
}


const Register = () => {
  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter Your Name' />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
