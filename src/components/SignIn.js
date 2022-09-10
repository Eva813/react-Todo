import React, { useState, useEffect, useRef } from "react";
import '../login.css'
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useAuth } from "./Context";
import Alert from 'react-bootstrap/Alert';


//https://bobbyhadz.com/blog/react-add-remove-class-on-click
const SignIn = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate('/SignUp');
  };
  const { token, setToken } = useAuth()
  const [showDangerAlert, setshowDangerAlert] = useState(false);
  const [showSuccessAlert, setshowSuccessAlert] = useState(false);
  const [msg, setmsg] = useState('');

  const onSubmit = (data) => {
    const _url = "https://todoo.5xcamp.us/users/sign_in";
    console.log('data', {
      user: data
    });
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch(_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: data
      })
    })
      .then(res => {
        console.log('res', res);
        if (res.status === 401) {
          throw new Error('登入失敗，請重新檢驗！');
        }
        setToken(res.headers.get("authorization"));
        return res.json()
      })
      .then(res => {

        navigate('/Tabs')
        return setshowDangerAlert(false);
      })
      .catch(error => {
        console.log(error)
        console.log(error.message)
        setmsg(error.message)
        return setshowDangerAlert(true);

      })
  }


  return (
    <>
      {/* 典籍signin 按鈕後 */}

      <div className="conatiner todoListPage vhContainer">
        <div className="alert-msg">
          <Alert variant="danger" show={showDangerAlert} onClose={() => setshowDangerAlert(false)} dismissible className="mt-3 ml-3 alert-dismissible ">{msg}</Alert>
          <Alert variant="success" show={showSuccessAlert} onClose={() => setshowDangerAlert(false)} dismissible className="mt-3 ml-3 alert-dismissible ">{msg}</Alert>
        </div>

        <div className="login_Content container_login">
          <div className="overlay " id="overlay" >
            <div className="sign-up" id="sign-up" >
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start a journey with us</p>
              <button className="switch-button" id="slide-left-button" onClick={navigateToSignUp}>Sign Up</button>
            </div>
          </div>
          <div className="form">
            <div className="sign-in" id="sign-in-info">
              <h1>Sign In</h1>
              <div className="social-media-buttons">
                <div className="icon">
                  <svg viewBox="0 0 24 24">
                    <path fill="#000000" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
                  </svg>
                </div>
                <div className="icon">
                  <svg viewBox="0 0 24 24">
                    <path fill="#000000" d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z" />
                  </svg>
                </div>
                <div className="icon">
                  <svg viewBox="0 0 24 24">
                    <path fill="#000000" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                  </svg>
                </div>
              </div>
              <p className="small">or use your email account:</p>
              <form id="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Email" {...register("email", { required: { value: true, message: "Email Address is required" }, pattern: { value: /^\S+@\S+$/i, message: "follow Email rule" } })} />
                <p className="error-message">{errors.email?.message}</p>
                <input type="password" placeholder="Password"  {...register("password", { required: { value: true, message: "Password is required" }, minLength: { value: 6, message: "min length is 6" } })} />
                <p className="error-message">{errors.password?.message}</p>
                <p className="forgot-password">Forgot your password?</p>
                <button className="control-button in" type="submit">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn;
