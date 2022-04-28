import  React,{useState} from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import NavComponent from "../components/NavComponent";
import axios from "axios";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default function UpdateProfile() {
  const auth = getAuth();
    const [file, setFile] = useState();
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [userweight, setUserweight] = useState();
    const [email, setEmail] = useState();
    
    function handlefileChange(e) {
        //console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    function handlenameChange(e) {
      // console.log(e.target.files);
      setName(e.target.value);
  }
    function handleageChange(e) {
      // console.log(e.target.files);
      setAge(e.target.value);
  }
  function handleweightChange(e) {
    // console.log(e.target.files);
    setUserweight(e.target.value);
}

// var jsonData = {
//    "age":age,
//    "weight":userweight
// }
var jsonData = {
  "users": [
      {
          "name": "alan", 
          "age": 23,
          "username": "aturing"
      },
      {
          "name": "john", 
          "age": 29,
          "username": "__john__"
      }
  ]
}
    function handleSubmit(e)
    {
      console.log(auth)
      e.preventDefault();
      
      
      //  const data = {
       
      //   body: { 
      //     age:age,
      //     weight: userweight
      //   }
      // // };
      const data = {
          name:name,
          age:age,
          weight:userweight,
          email:auth.currentUser.email
          //     weight: userweight
      };
      axios.post("http://localhost:4000/user", data)     
       .then(res => console.log(res))      
       .catch(err => console.log("err"));
    //   fetch('http://localhost:4000/user', {  // Enter your IP address here

    //   method: 'POST', 
    //   mode: 'cors', 
    //   body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

    // })
    
    }

  return (
      <>
      <NavComponent/>
     {/* <div style={{alignItems:"center"}}> */}
    <div className="App text-black" style={{backgroundColor:"white",marginTop:'10px',opacity: 0.9,width:'50%',marginLeft:'auto',padding:'10px',marginRight:'auto'}}> 
    <h1>Update User Profile</h1>
       
    <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your Name" value={name}onChange={handlenameChange} required />
    {/* <Form.Text className="text-muted">
    
    </Form.Text> */}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>User Age</Form.Label>
    <Form.Control type="number" placeholder="Enter your Age" value={age}onChange={handleageChange} required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>User Weight</Form.Label>
    <Form.Control type="number" placeholder="Enter your weight in kg" value={userweight} onChange={handleweightChange} required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Profile picture</Form.Label>
    <Form.Control type="file" onChange={handlefileChange} required  />
  </Form.Group>
  <Button variant="primary" type="submit">
    Update
  </Button>
</Form>
            {/* <input type="file" onChange={handleChange} /> */}
            {/* <img style={{width:'50%',height:'auto'}} src={file} /> */}
            {/* <Button>Upload</Button> */}
         </div>
        {/* </div> */} 
     </>
  )
}


