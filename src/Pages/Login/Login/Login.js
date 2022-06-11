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

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/home')
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New ro Genius car <Link to='/register' className='text-danger pe-auto text-deceration-none' onClick={naviGateRegister}>Please Register</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;