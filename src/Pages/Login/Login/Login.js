import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/home')
    }

    if (error) {
        errorElement = <div>
            <p className='text-denger'>{error?.message}</p>
        </div>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        signInWithEmailAndPassword(email, password)

    }
    const naviGateRegister = event => {
        navigate('/register');

    }
    return (
        <div className='w-50 mx-auto '>
            <h2 className='text-center text-primary'>Please Login</h2>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='mx-auto w-50 d-block' variant="primary" type="submit">
                     Login
                </Button>
            </Form>
            {errorElement}
            <p>New ro Genius car <Link to='/register' className='text-danger pe-auto text-deceration-none' onClick={naviGateRegister}>Please Register</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;