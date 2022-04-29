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
  <Card.Img variant="top" src="https://images.myupchar.com/8840/webp/Standing_Dumbbell_Curl_ke_fayde__karne_ka_sahi_tarika__prakar__galtiyan_aur_sujhav.webp" />
  <Card.Body>
    <Card.Title>Dumbell Curl</Card.Title>
    <Card.Text>
   
    
Tips:

Keep your elbows close to your torso while performing this exercise.
Avoid jerking the dumbbells as you raise and lower them. Use a slow, continuous motion to do so.



    </Card.Text>
    <Button variant="primary" onClick={()=>navigate('/room', { state: { id: 3, name: "dumbellCurls" } })}>Lets Exercise</Button>
    
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
