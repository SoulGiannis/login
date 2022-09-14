import React, { useState } from 'react'
// import Login from './Login';

import "../App.css";
import facebook from "../images/facebook.png";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [pic, setPic] = useState();
    return (
    <div className='main daj'>
        <div className='second_container daj'>
            <div className='loginImg daj'>                   
            </div>        

            <div class="login daj">            
                <div className='logo daj'>
                    <h1 id="logoBox">Sportsalize</h1>
                </div>
                <div className='hrLine dajt'>
                    <Loginwith />
                    <Loginwith />
                </div>
                <div className='hrLine dajt'>
                    <hr className='or'/><p>or</p><hr className='or'/>
                </div>   
                <div className="credentials daj">
                    <label className="required" for="username">Username</label>
                    <input type="text" placeholder="Enter your username" onChange={(e) => setName(e.target.value)} /> 
                </div>
                <div className='credentials daj'>
                    <label className="required" for="password">Password</label>
                    <input type="password" placeholder='Enter your password' id="password"/>
                </div>
                <div className='credentials dajt'>
                    <button id="submit" type="submit">Login</button>
                    <p>new user <button id="submit" type="submit">Signup</button></p>
                </div>    
            </div>  
        </div>
    </div>
    )
}

function Loginwith() {
    return (
        <p className='loginWith daj'><img src={ facebook } height="20px" alt="facebook"/> Login with Facebook</p>    
    )
}

export default Signup