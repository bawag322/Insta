import { useState } from 'react'
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false);
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
         <form>
           <div className="form_input_field">
             <input type="text" placeholder='Username, email address or mobile number' />
             <label htmlFor="">Username, email address or mobile number</label>
           </div>
           <div className="form_input_field">
             <input type={showPassword ? "text" : "password"} placeholder='Password' />
             <label htmlFor="">Password</label>
             <span className='show-passwd'>
              <img src={showPassword ? "/invisible-password.svg" : "/visible-password.svg"} alt="" onClick={() => setShowPassword(prev => !prev)} />
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
