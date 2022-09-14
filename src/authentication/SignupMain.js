import React, { useEffect, useState } from 'react'
import '../App.css';
import facebook from '../images/facebook.png'
import google from '../images/google.png'
import {Login, LoginImg, Loginwith, Hrling, Logo, Credentials, CredentialsButton} from './LoginMain'
import { Link } from 'react-router-dom';
import { signInWithGoogle } from './firebase';

const SignupMain = () => {
  
  var apiImages = [facebook, google];
  var apis = ["Facebook", "Google"];
  var [show, setShow] = useState(false);
  var [username, setUsername] = useState();
  var [password, setPassword] = useState();
  var [confirmpassword, setConfirmpassword] = useState();
  var [pic, setPic] = useState();
  var [loading, setLoading] = useState(false);

  const postDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      alert('Please select an image'); 
    }
    if (pics.type === "image/jpeg" || pics.type === "image/jpeg") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", pics);
      // fetch("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg", {
      //   method = "post",
      //   body = data,
      // })
    }
  }

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

            <Credentials inputName={setUsername} labelId={"username"} labelValue={"Username"} inputType={"text"} />
            <Credentials inputName={setPassword} labelId={"password"} labelValue={"Password"} inputType={"password"}><button style={{backgroundColor:'white',border:'0px solid white', color:'black'}}>
      show
    </button></Credentials>
            <Credentials inputName={setConfirmpassword} labelId={"cpassword"} labelValue={"Confirm Password"} inputType={"password"}><button style={{backgroundColor:'white',border:'0px solid white', color:'black'}}>
      show
    </button></Credentials>
            <Credentials onClick={(e) => postDetails(e.target.files[0])} inputName={setPic} labelId={"file"} labelValue={"Upload Picture"} inputType={"file"} />
            <div className='credentials dajt'>
              <Link to='/login'><CredentialsButton loginButton={"Login"} /></Link>
              <CredentialsButton loginButton={"Signup"} />
            </div>
              </form>
          </div>
        </Login>
      </div>
    </div>
  ) 
};

export default SignupMain