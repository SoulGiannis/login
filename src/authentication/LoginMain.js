import React, { useState } from 'react';
import '../App.css';
import facebook from '../images/facebook.png'
import google from '../images/google.png'
import { Link } from 'react-router-dom';
import { signInWithGoogle } from './firebase';

const LoginMain = () => {
  var apiImages = [facebook, google];
  var apis = ["Facebook", "Google"];
  var [username, setUsername] = useState();
  var [password, setPassword] = useState();
  return (
    <div className='main daj'>
      <div className='second_container daj'>
        <LoginImg />
        <Login>
          <Logo/>
          <div className='hrLine dajt'>
            <Loginwith loginApiImg={apiImages[0]} loginApi={apis[0]} />
            <Loginwith onClick={signInWithGoogle} loginApiImg={apiImages[1]} loginApi={apis[1]} />
           </div>
           <Hrling/>
          <div className='credentialsMain'>
            <form>
              <Credentials  inputName={setUsername} labelId={"username"} labelValue={"Username"} inputType={"text"} />
              <Credentials inputName={setPassword} labelId={"password"} labelValue={"Password"} inputType={"password"} />
              <div className='credentials dajt'>
                <CredentialsButton loginButton={"Login"} />
                <Link to='/signup'><CredentialsButton loginButton={"Signup"} /></Link>
              </div>
            </form>
          </div>
        </Login>
      </div>
    </div>
  ) 
};

const LoginImg = () => {
  return (
    <div className='loginImg daj'>
    </div>
  )
};

const Login = ({children}) => {
  return (
    <div className='login daj'>
      {children}
    </div>
  )
};

const Logo = () => {
  return (
    <div className='logo daj'>
      <h1 id="logoBox">Sportsalize</h1>
    </div>
  )
};

const Loginwith = (props) => {
  return (
      <p onClick={signInWithGoogle} className='loginWith daj'><img src={props.loginApiImg} height="20px" alt="facebook" /> Login with { props.loginApi }</p>
  )
};

const Hrling = () => {
  return (
    <div className='hrLine dajt'>
      <hr className='or' /><b>OR</b><hr className='or' />
    </div>
  )
};

const Credentials = (props, {children}) => {
  return (
    <div className='credentials daj'>
      <label className='required' htmlFor={props.labelId}>{props.labelValue}</label> 
      <input  onChange={(e) => props.inputName(e.target.value)} type={props.inputType} id={props.labelId} required></input>
      {children}
    </div>
  )
};

const CredentialsButton = (props) => {
  return (
      <button type='submit' id='submit'>{props.loginButton}</button>
  )
}

export  {LoginMain, Login, LoginImg, Loginwith, Hrling, Logo, Credentials, CredentialsButton};