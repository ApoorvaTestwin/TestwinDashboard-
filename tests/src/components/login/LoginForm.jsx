import React, {useState} from 'react'
import "./login.css";

const LoginForm = () => {
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  const [allEntry, setallEntry]= useState([]);
  const submitForm=(e)=>{
    e.preventDefault();
    const newEntry = {email: email, password: password}; 
    setallEntry([...allEntry, newEntry]);
    console.log(allEntry);
   }
  return (
    <div className="container">
      <h1>Login</h1>
      <form action=" " onSubmit={submitForm}>
            <div className="txt">
                
                <input type="text" name="username" autoComplete="off" value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
                <span></span>
                <label htmlFor="username">Username</label>
            </div>
            <div className="txt">
                
                <input type="password" name="password" autoComplete="off" value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                <span></span>
                <label htmlFor="password">Password</label>
            </div>
              <div className="check">
              <input type="checkbox" value="Bike"/>
              <label htmlFor="checkbox">Remember</label>
              </div>
            <button className="submit" type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm

