import React, { useState } from 'react';
import './Register.css';
import { userRegister } from '../services/api';

const defaulValue = {
    name:'',
    email:'',
    password:'',
    reEnterPassword:''
}

function Register() {
    const [userData, setUserData] = useState(defaulValue);

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]:e.target.value});
    }

    const userRegisteration = async () => {
        const { name, email, password, reEnterPassword} = userData;
        console.log(name, email, password, reEnterPassword)
        if(name && email && password && (password === reEnterPassword)){
            await userRegister(userData);
        }
        else {
            alert("Invalid input");
        }
    }

  return (
    <div className='Register'>
        <div className='BannerPicture'></div>
        <div className='Form'>
        <h1>Register</h1>
        <input type="text" placeholder='Name' onChange={(e)=>{handleChange(e)}} name='name'/>
        <br />
        <input type="email" placeholder='Email' onChange={(e)=>{handleChange(e)}} name='email'/>
        <br />
        <input type="password" placeholder='Password' onChange={(e)=>{handleChange(e)}} name='password'/>
        <br />
        <input type="password" placeholder='Re-enter Password' onChange={(e)=>{handleChange(e)}} name='reEnterPassword'/>
        <br />
        <button onClick={userRegisteration}>Register</button>
        </div>
    </div>
  )
}

export default Register