import  React,{useState} from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import NavComponent from "../components/NavComponent";
export default function UpdateProfile() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
      <>
      <NavComponent/>
     {/* <div style={{alignItems:"center"}}> */}
    <div className="App text-black" style={{backgroundColor:"white",marginTop:'10px',opacity: 0.9,width:'50%',marginLeft:'auto',padding:'10px',marginRight:'auto'}}> 
    <h1>Update User Profile</h1>
       
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your Name" required />
    {/* <Form.Text className="text-muted">
    
    </Form.Text> */}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>User Age</Form.Label>
    <Form.Control type="number" placeholder="Enter your Age" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>User Weight</Form.Label>
    <Form.Control type="number" placeholder="Enter your weight in kg" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Profile picture</Form.Label>
    <Form.Control type="file" onChange={handleChange} required  />
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


