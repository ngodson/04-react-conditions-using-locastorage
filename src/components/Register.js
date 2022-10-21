import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import'../App.css'

export const Register = ()=> {
    const [registerUser,setRegisterUser] = useState([]);
    const [registerPass,setRegisterPass] = useState([]);
    const [state, setState] = useState(true);
    const navigate = useNavigate();

    const registerUsername = (ev)=> {
        setRegisterUser(ev.target.value);
    }

    const registerPassword = (ev) => {
        setRegisterPass(ev.target.value);
    }

    const RegisterUser = ()=> {
        if(state){
            setState( localStorage.setItem("username", JSON.stringify(registerUser)),
                      localStorage.setItem("password", JSON.stringify(registerPass))
                      )
            alert("Successfully registered")
        }
        else {
            alert("error in registration")
        }
    }

    const gotoLogin = ()=> {
        navigate("/");
    }

    return (
        <div className="registerForm activeRegister">
            <h1 className="hText">Register a new User</h1>
           <form>
            <div className="loginInput">
            <input type="text" placeholder='username' onChange={registerUsername} />
            <input type="password" placeholder='password' onChange={registerPassword} />
            </div>
            <div className='btnGroup'>
                <button className="btn" type='submit' onClick={RegisterUser}>Register</button>
                <button className="btn" type='submit' onClick={gotoLogin}>Go back to Login</button>
            </div>
           </form>
        </div>
    )
}

