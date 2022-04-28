import React from "react";
import { useEffect, useRef,useState } from 'react';
import Webcam from 'react-webcam';
import * as ml5 from 'ml5';
import { baseUrl } from '../shared/baseUrl';
import './detection.css';
import NavComponent from './NavComponent'
import TextToSpeech from 'text-to-speech-js';
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
function Detection({

}) {
	const navigate=useNavigate();
	const auth = getAuth();
	const current = new Date();
	let c1=1;
	let c2=0;
	let c=1;
	let x=0.2;
	const location = useLocation();
	const webcamRef = useRef(null);
	const canvasRef = useRef(null);
	const poseNet = useRef(null);
	const brain = useRef(null);
    const [rep, setRep] = useState(0);
	const [calories, setCalories] = useState(0);
	const options = {
		inputs: 34,
		outputs: ["label"],
		task: "classification",
		debug: true,
	};
    
	const modelInfo = {
		// model: `E:/Virtual-AI-Fitness-Trainer/frontend/src/components/model/model.json`,
		// metadata: `E:/Virtual-AI-Fitness-Trainer/frontend/src/components/model/model_meta.json`,
		// weights: `E:/Virtual-AI-Fitness-Trainer/frontend/src/components/model/model.weights.bin`,
		// model: `http://localhost:4000/data/models/${location.state.name}/model.json`,
		// metadata: `http://localhost:4000/data/models/${location.state.name}/model_meta.json`,
		// weights: `http://localhost:4000/data/models/${location.state.name}/model.weights.bin`,
		model: `http://localhost:4000/data/models/${location.state.name}/model.json`,
		metadata: `http://localhost:4000/data/models/${location.state.name}/model_meta.json`,
		weights: `http://localhost:4000/data/models/${location.state.name}/model.weights.bin`,
		
	};
	const detect = () => {
		//console.log(poseNet);
        
		poseNet.current = ml5.poseNet(webcamRef.current.video, () => {
			console.log("Modal Loaded");
			// <Speech text='Lets Exercise'/>
        //   console.log(brain);
		try
		{
			brain.current.load(modelInfo, () => {
				console.log("pose classification ready!");
			});	
		}
		catch(err)
		{
			console.log('error')
		}
		// setValue(true)
		
				 
          
			const videoWidth = webcamRef.current.video.videoWidth;
			const videoHeight = webcamRef.current.video.videoHeight;

			// Set video width
			webcamRef.current.video.width = videoWidth;
			webcamRef.current.video.height = videoHeight;
			canvasRef.current.width = videoWidth;
			canvasRef.current.height = videoHeight;
			poseNet.current.on("pose", (poses) => {
				if (poses.length > 0) {
					// console.log(poses[0].pose);
					if (true) classifyPose(poses[0].pose);
					if (canvasRef.current) {
						const ctx = canvasRef.current.getContext("2d");
						ctx.clearRect(
							0,
							0,
							canvasRef.current.width,
							canvasRef.current.height
						);
						requestAnimationFrame(() => {
							drawRect(poses, ctx);
						});
					}
				}
			});
		});
	};
 
	const exerciseCompleted =()=>{
		// console.log(auth)
      
      
		const data = {
			calories:calories,
			email:auth.currentUser.email
			//     weight: userweight
		};
		axios.post("http://localhost:4000/user", data)     
		 .then(res => console.log(res))      
		 .catch(err => console.log("err"));
		
		navigate('/Exercise')

	}
	
	const classifyPose = (pose) => {
		let inputs = [];

		for (let i = 0; i < pose.keypoints.length; i++) {
			let x = pose.keypoints[i].position.x;
			let y = pose.keypoints[i].position.y;
			inputs.push(x);
			inputs.push(y);
		}
		 //console.log(brain.current.classify(inputs))
		 
			brain.current.classify(inputs, (error, results) => {
				// console.log(results[0].confidence);
				 // if (error) {
				 // 	console.log('lol'+error);
					
				 // } else if (results[0].confidence > 0.8) {
					
				// 	console.log(results[0].confidence);
				 // } 
				 if(error)
				 {
				  console.log('lol error'+error);
				 }
				 else if (results[0].confidence > 0.90) {
					if(results[0].label=='p')
					  {
					//    poseLabel = 'Correct Pose';
						c1=1;
						c=0;
						console.log('Correct Pose');
					  }
					else if(results[0].label=='r')
					  {
						
						c1=0;
						//poseLabel = 'Rest Position';
						console.log('Rest Position');
					  }
					  if(c1==0&&c==0)
					  {
						c2+=1;
						c=1;
					  }
					
				  }
				  
				  
				  console.log("Set count ="+c2);
				  //<Speech text={c2}/>
				//   console.log(TextToSpeech.talk)
				  setRep(c2);
				  setCalories((c2*x).toFixed(1));
				  
			 }).catch(err=>{
				console.log(err)
			});
		 
		 
	};
	
		useEffect(() => {
			
				brain.current = ml5.neuralNetwork(options);
			
			console.log('inside')
		// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);
	useEffect(() => {
		detect();
		return () => {
			poseNet.current.removeListener("pose", (err) => {
				console.log("Removed");
			});
		};
	
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<div className=" h-full w-full flex justify-items-center   p-10">
			 <NavComponent/> 
			 <h1 style={{marginLeft:'40%'}} className=" text-white">{location.state.name}</h1>
			 <h3  style={{marginLeft:'30%'}} className=" text-white">Rep&nbsp;:&nbsp;{rep}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Calories Burned:&nbsp;{calories}&nbsp;&nbsp; <Button variant="primary" size="lg" onClick={exerciseCompleted}>
     Exercise Completed
  </Button>
  </h3>
				<div className="exerciseRoom" style={{marginLeft:'30%'}} >
				
					<Webcam ref={webcamRef} muted={true} className="webcam" />
					<canvas ref={canvasRef}  className="canvas" />
				</div>
				{/* <video src="https://player.vimeo.com/video/326683041?h=dfda67c283" width="400" height="400" frameborder="0" allowfullscreen></video> */}
			</div>
		</>
	);
}

const drawRect = (poses, ctx) => {
  // ctx.drawImage(webcamRef.current.video, 0, 0);
  const pose = poses[0].pose;
  const skeleton = poses[0].skeleton;
  for (let i = 0; i < pose.keypoints.length; i++) {
    let x = pose.keypoints[i].position.x;
    let y = pose.keypoints[i].position.y;
    ctx.fillStyle = ' #39ff14';
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fill();
  }
  for (let j = 0; j < poses[0].skeleton.length; j++) {
    let partA = skeleton[j][0];
    let partB = skeleton[j][1];
    ctx.beginPath();
    ctx.moveTo(partA.position.x, partA.position.y);
    ctx.lineTo(partB.position.x, partB.position.y);
    ctx.strokeStyle = ' #39ff14';

    ctx.stroke();
  }
  // ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
};

export default Detection;
