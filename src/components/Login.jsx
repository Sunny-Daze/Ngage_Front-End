import React, {useState} from 'react'

const defaulValue = {
    email:'',
    password:''
}

function Login() {
    const [userData, setUserData] = useState(defaulValue);

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]:e.target.value});
    }

    const userLogin = () => {
        console.log(userData);
    }

  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='Email' name='email' onChange={(e)=>{handleChange(e)}} />
        <br />
        <input type="password" placeholder='Password' name='password' onChange={(e)=>{handleChange(e)}} />
        <br />
        <button onClick={userLogin}>Login</button>
        <br />
        <button>Register</button>
    </div>
  )
}

export default Login