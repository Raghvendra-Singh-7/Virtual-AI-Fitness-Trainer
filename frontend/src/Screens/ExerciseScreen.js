import React from 'react'
import NavComponent from '../components/NavComponent'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom';
import { Button,CardGroup } from 'react-bootstrap'
export default function ExerciseScreen() {
  const navigate=useNavigate();
  return (
    <>
      <NavComponent/>
      <CardGroup >
      <Card  className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' style={{  minwidth: '18rem',width: '18rem',margin:'10px'}}>
  <Card.Img variant="top" src="https://d1ghrtdbdq2gkr.cloudfront.net/media/public/2020/02/jumping-jacks-exercises-thumbnail-0155.jpg" />
  <Card.Body>
    <Card.Title>Jumping jacks</Card.Title>
    <Card.Text>
    Jumping jacks are a type of plyometric exercise that can help you jump higher by building lower body strength.
    </Card.Text>
    <Button variant="primary" onClick={()=>navigate('/room', { state: { id: 1, name: "jumpingJacks" } })}  >Lets Exercise</Button>
    
  </Card.Body>
</Card>
 <Card style={{ minwidth: '18rem',width: '18rem',margin:'10px' }}>
  <Card.Img variant="top" src="https://1fsawj22yir9otqyf1vuai46-wpengine.netdna-ssl.com/wp-content/uploads/sites/32/2017/06/Screen-Shot-2017-06-22-at-3.25.47-PM-1024x640.png" />
  <Card.Body>
    <Card.Title>Squats</Card.Title>
    <Card.Text>
    The squat is a dynamic strength training exercise that requires several muscles in your upper and lower body to work together simultaneously. 
    </Card.Text>
    <Button variant="primary" onClick={()=>navigate('/room', { state: { id: 2, name: "squats" } })}>Lets Exercise</Button>
    
  </Card.Body>
</Card>
 <Card style={{ minwidth: '18rem',width: '18rem',margin:'10px' }}>
  <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.jfZWlGQv_qSn5RkuHbkcFwHaD4?pid=ImgDet&rs=1" />
  <Card.Body>
    <Card.Title>Lateral Leg Raises</Card.Title>
    <Card.Text>
    Lateral leg raises using the cable machine is a great exercise for working out the gluteus medius. In ordinary life, these muscles are involved in the work indirectly. However, they give a rounded attractive shape to the upper part of the buttocks.
    </Card.Text>
    <Button variant="primary" onClick={()=>navigate('/room', { state: { id: 3, name: "Lateral Leg Raises" } })}>Lets Exercise</Button>
    
  </Card.Body>
</Card>
 <Card style={{ minwidth: '18rem',width: '18rem',margin:'10px' }}>
  <Card.Img variant="top" src="https://i1.wp.com/fittipdaily.com/wp-content/uploads/2014/06/front-back-lunge.png" />
  <Card.Body>
    <Card.Title>Back Lunges</Card.Title>
    <Card.Text>
    The back lunge is a very effective lower body exercise that helps to tone and sculpt your glutes and thighs. This move also improves the flexibility of the hips and increases your balance and stability. Front And Back Lunges Demonstration
    </Card.Text>
    <Button variant="primary" onClick={()=>navigate('/room', { state: { id: 4, name: "Back Lunges" } })}>Lets Exercise</Button>
    
  </Card.Body>
</Card>

</CardGroup>
    </>
  )
}
