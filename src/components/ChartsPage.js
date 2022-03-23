import React from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Line,Chart} from "react-chartjs-2";
import "./chart.css";
import { MDBContainer  } from "mdbreact";
import Navbar from './NavComponent'
class ChartsPage extends React.Component {
  state = {
    dataLine: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [
        {
          label: "Calories burned this week",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(205, 130, 158)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [100, 200, 250,300 ,200 , 250, 300]
        }
      ]
    }
  };

  render() {
    return (
      
      
      <>
      <Navbar/>
      <div className="Chart">
        
      <MDBContainer >
        <h3 className="mt-5">Calorie Status</h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
      </div>
      </>
    );
  }
}

export default ChartsPage;