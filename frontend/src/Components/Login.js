import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import {  Link } from 'react-router-dom';
const Styles = {
  Container: {
    marginTop:'0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh', // Center vertically in the viewport
  },
  form: {
marginTop:'10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch', // Align items to stretch to full width
    width: '40%', // Fixed width for better control
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(41, 110, 220, 0.68)',
    borderRadius: '8px',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
  label: {
    marginBottom: '5px', // Space between label and input
    textAlign: 'left', // Left-align labels
  },
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success,setSuccess]=useState('');
const handleSubmit=(e)=>{
    e.preventDefault();
    if(!email||!password){
        setError("Please fill Out the form ")
    }
    else{
setSuccess('Perfecto');
<Link to= "/Login"/>

    }
    setEmail('');
    setPassword('');
}

  return (
    <div style={Styles.Container}>
        <Helmet>
         <title>login</title>   
        </Helmet>
      <form style={Styles.form} onSubmit={handleSubmit}>
        {error && <p style={Styles.error}>{error}</p>}
        {success && <p>{success}</p>}
        <label style={Styles.label}>Email</label>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={Styles.input}
    
        />
        <label style={Styles.label}>Password</label>
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={Styles.input}
          
        />
        <button type='submit' style={Styles.button}>Login</button>
      <div>Don't have an account? <Link to ='/register' textDecoration='none'>Create One</Link></div>  
      </form>
    </div>
  );
}