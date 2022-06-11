import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
const Register = () => {
    const [agree, setAgree] = useState(false);
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const naviGate = useNavigate();

    const naviGateLogin = event => {
        naviGate('/login')
    }

    if (user) {
        console.log('user', user)
    }
    const handleRegister =async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const password = event.target.password.value;
        const email = event.target.email.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        naviGate('/home')



    }
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>please Register</h2>
            <form onSubmit={handleRegister} >
                <input type="text" name="name" id="" placeholder='your name' />
                <input type="email" name='email' id='' placeholder='your email' required />
                <input type="password" name="password" placeholder='your password' required id="" />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Aecpts Genius Terms and conditions</label>
                <input disabled={!agree} className='w-50 mx-auto btn btn-primary mt-2 ' type="submit" value="Register  " />
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-deceration-none' onClick={naviGateLogin}>Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
