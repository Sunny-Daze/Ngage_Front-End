import React, {useState} from 'react';
import './Login.css';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

const defaulValue = {
    email:'',
    password:''
}

function Login() {

    const navigate = useNavigate();

    const [userData, setUserData] = useState(defaulValue);

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]:e.target.value});
    }

    const userLogin = async () => {
        await loginUser(userData);
    }

  return (
    <div>
        <div className="Login">
        <div className='BannerPicture'></div>
        <div className="form">
        <h1>Login</h1>
        <input type="text" placeholder='Email' name='email' onChange={(e)=>{handleChange(e)}} />
        <br />
        <input type="password" placeholder='Password' name='password' onChange={(e)=>{handleChange(e)}} />
        <br />
        <button onClick={userLogin}>Login</button>
        <br />
        <button onClick={() => navigate('/register')}>Register</button>
        </div>
        </div>
    </div>
  )
}

export default Login