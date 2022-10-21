import React, { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import'../App.css'



   

export const Login = ()=> {
    const [userInput, setUserInput] = useState("");
    const [userPassword, setUserPassword] = useState("");
    // const [isActive, setActive] = useState(false);
    const navigate = useNavigate();

    const getInputCahnge = (event) => {
      setUserInput(event.target.value);
    }

    const getPassword = (event) => {
        setUserPassword(event.target.value)
    }

    const submit = (ev) => {  
        ev.preventDefault();
        // const {user} = props; how can i show this props message in the home page. so it says welcome ${name of user}.
            const username = JSON.parse(localStorage.getItem("username"));
            const password = JSON.parse(localStorage.getItem("password"));
            // userInput === "" ? alert("input field cant be empty") : userInput !== username ? alert("wrong username") 
            // : userInput === username ? (userPassword !== password ? alert("wrong password"): alert(`welcome ${userInput}`))
            if(userInput === "" || userPassword === "")
            {
                alert("Input Field cannot be empty")
            }
           else if(userInput !== username) {
                alert("Wrong Username")
               }
               else{
                if(userInput === username){
                    if(userPassword !== password){
                        alert("wrong password")
                    }
                    else{      
                        navigate("/Home");             
                    //    <h1>`Welcome "${userInput}"`</h1>
                      alert(`Welcome "${userInput}"`)
                    }
                }
               }
    }

    const register = ()=> {
        navigate("/Register")
    }
    


    return (
        <div id="loginForm">
            <h1 className="hText">BASIC USERNAME AND PASSWORD SETUP USING LOCAL STORAGE IN REACT</h1>
           <form>
            <div className="loginInput">
            <input type="text" placeholder='username' onChange={getInputCahnge} />
            <input type="password" placeholder='password' onChange={getPassword} />
            </div>
            <div className='btnGroup'>
                <button className="btn" type='submit' onClick={submit}>Login</button>
                <button className="btn" type='button' onClick={register}>Register</button>
                
                
            </div>
           </form>
        </div>
    )
}

