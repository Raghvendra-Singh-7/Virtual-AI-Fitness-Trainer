import React from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import NavComponent from '../components/NavComponent'
import { useNavigate } from 'react-router-dom';
export default function UserProfile() {
    const navigate=useNavigate();
  return (

    <>
    <NavComponent/>
    <div className="App text-black" style={{alignItems:'center' ,backgroundColor:"white",marginTop:'10px',opacity: 0.9,width:'500px',marginLeft:'auto',marginRight:'auto'}}> 
   
      <>
      <Card style={{ width: '500px' }}>
  <Card.Img variant="left" src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg" />
  <Card.Body>
    <Card.Title><h3>Name: Vibhor Singh</h3></Card.Title>
    <Card.Text>
     <h4> Age : 22</h4>
     <h4> Weight : 73</h4>
    </Card.Text>
    <Button variant="primary" onClick={()=>navigate('/UpdateProfile')}>Update Profile</Button>
    
  </Card.Body>
</Card>
</>
    </div>
    </>
  )
}
