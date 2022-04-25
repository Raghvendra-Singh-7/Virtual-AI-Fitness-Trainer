import React from "react";
import './practice.css';
import Detection from './Detection';

function ClassifyAll({ type, level }) {
  
  return (
		<div
			className="flex flex-col w-full h-full bg-primary-light overflow-hidden overflow-y-hidden"
			style={{ minHeight: "91vh" }}
		>
			
			<div className=" w-full h-full lg:flex">
				<div className="w-full  h-full lg:w-1/2 ">
					<Detection
					/>
				</div>
				
				
			</div>
		</div>
	);
}

export default ClassifyAll;
