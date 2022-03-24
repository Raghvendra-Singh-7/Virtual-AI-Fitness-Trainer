import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


export default function NavComponent() {
  const navigate=useNavigate();
  function signout()
{
  
  const auth = getAuth();
  signOut(auth).then(() => {
    navigate('/signin')
    console.log("Signout successful")
    console.log(auth);
    
  }).catch((error) => {
    console.log("Error Signout")
  });
}
  return (
    <div>
      <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/home">Ai Fitness</Navbar.Brand>
    <Nav className="me-auto">
      
      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      <Nav.Link href="/Exercise">Exercises</Nav.Link>
      <Nav.Link href="/UserProfile">Profile</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} onClick={signout}>
        Sign out
      </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
  
</>
    </div>
  )
}
