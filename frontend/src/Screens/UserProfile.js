import React ,{useEffect,useState} from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import NavComponent from '../components/NavComponent'
import { useNavigate } from 'react-router-dom';
import { getAuth} from "firebase/auth";
export default function UserProfile() {
  const auth = getAuth();
  var obj={};
  const [name, setName] = useState('User Name');
    const [weight, setWeight] = useState('User Weight');
    const [age, setAge] = useState('User Age');
    
    const navigate=useNavigate();
    const HandleUpdate=(data)=>{
      console.log(data.name)
      setName(data.name);
      setAge(data.age);
      setWeight(data.weight);
      
      
    }
    useEffect(() => {
      
      auth.onAuthStateChanged(function(user) {
        if (user) {
          console.log(auth.currentUser.email);
          fetch('http://localhost:4000/user/'+auth.currentUser.email)
          .then(response => response.json())
          .then((data) =>{HandleUpdate(data)} )
          .catch(err=>console.log(err));
  
        } else {
          console.log('no auth');
        }
      });
      // GET request using fetch inside useEffect React hook
      
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  return (

    <>
    <NavComponent/>
    <div className="App text-black" style={{alignItems:'center' ,backgroundColor:"white",marginTop:'10px',opacity: 0.9,width:'500px',marginLeft:'auto',marginRight:'auto'}}> 
   
      <>
      <Card style={{ width: '500px' }}>
  <Card.Img variant="left" src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg" />
  <Card.Body>
    <Card.Title><h3>Name: {name}</h3></Card.Title>
    <Card.Text>
     <h4> Age : {age}</h4>
     <h4> Weight : {weight}</h4>
    </Card.Text>
    <Button variant="primary" onClick={()=>navigate('/UpdateProfile')}>Update Profile</Button>
    
  </Card.Body>
</Card>
</>
    </div>
    </>
  )
}
