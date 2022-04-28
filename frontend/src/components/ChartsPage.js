import React from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Line,Chart} from "react-chartjs-2";
import "./chart.css";
import { MDBContainer  } from "mdbreact";
import Navbar from './NavComponent'
import { getAuth} from "firebase/auth";
class ChartsPage extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
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
          data: [10, 5, 25,1 ,3 , 0, 0]
        }
        
      ]

    },
    calories:0
  };
}
updateCal=(data) =>{
  this.setState({calories:data.calories })
}
componentDidMount() {
  getAuth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(getAuth().currentUser.email);
      fetch('http://localhost:4000/user/'+getAuth().currentUser.email)
      .then(response => response.json())
      .then((data) =>{this.updateCal(data)})
      .catch(err=>console.log(err));

    } else {
      console.log('no auth');
    }
  });
    }

  render() {
    return (
      
      
      <>
      <Navbar/>
      <div className="Chart">
        
      <MDBContainer >
        <h3 className="mt-5">Calorie Status</h3>
        <h3>Calories Burned today:{this.state.calories}</h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
      </div>
      </>
    );
  }
}

export default ChartsPage;