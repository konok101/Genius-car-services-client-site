 import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
 import './Register.css'
 const Register = () => {
    const naviGate= useNavigate();

    const naviGateLogin= event=>{
        naviGate('/login')
    }
    return (
        <div className='register-form'>
        <h2 style={{textAlign:'center'}}>please Register</h2>   
        <form action="">
            <input type="text" name="name" id="" placeholder='your name'/>
            <input type="email" name='email' id='' placeholder='your email' required/>
            <input type="password" name="password" placeholder='your password' required id="" />
        </form>
        <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-deceration-none' onClick={naviGateLogin}>Login</Link> </p>

        </div>
    );
 };
 
 export default Register;
 