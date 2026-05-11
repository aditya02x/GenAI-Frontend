import React from 'react'

const Login = () => {
    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")



    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div>
        <h1>Login Page</h1>

        <form action="submit" onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Enter your Password' 
             value={password}
             onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit'>Login</button>
        </form>
      
    </div>
  )
}

export default Login
