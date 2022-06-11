import React, { useRef } from 'react';
import { Form, Button  } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
 

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate= useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email= emailRef.current.value;
        const password= passRef.current.value;

        console.table(email, password)

    }
const naviGateRegister = event=>{

}
    return (
        <div className='w-50 mx-auto '>
            <h2 className='text-center text-primary'>Please Login</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
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
        </div>
    );
};

export default Login;