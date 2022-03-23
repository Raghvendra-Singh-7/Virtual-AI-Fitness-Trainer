import { Link, useNavigate } from "react-router-dom";
import React,{useRef, useState} from 'react'
import "./signup.css";
import { Button, Card, Form , Alert } from 'react-bootstrap'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Container} from 'react-bootstrap'
//import {useAuth} from '../contexts/AuthContext'

export default function Signin() {
    const emailRef= useRef()
    const passwordRef= useRef()
    //const { signup } = useAuth()
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const auth = getAuth();
    const navigate= useNavigate();
    function handleSubmit(e){
      e.preventDefault()

      try {
        setError('')
        setLoading(true)
        //await signup(emailRef.current.value,passwordRef.current.value)
        signInWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(auth);
    navigate('/home')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
      } catch {
        setError('Failed to create an account')
      }
      setLoading(false)
      
    }

  return (
    <Container
    className="p-5 d-flex align-item-center justify-content-center "
    style={{minHeight:"100vh",width:'auto'}}
    >
    <div className="bg-transparent w-100" style={{maxWidth:'400px'}}>
    
      <Card className=''>
      <Card.Body>
      <h2 className='text-center mb-4'>Sign In</h2>
      {error && <Alert variant='danger'>{error}</Alert>}
      <Form onSubmit={handleSubmit}>
          <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>
          <Button disabled={loading} className='w-100 mt-2' type='submit'>
           Sign In
          </Button>
      </Form>
      </Card.Body>
                    
      </Card>
      <div className='w-100 text-center mt-2 text-white'>
       Don't have an account? <Link to={"/signup"}>Sign Up</Link>
      </div>
      </div>
      </Container>
    
  )
}
