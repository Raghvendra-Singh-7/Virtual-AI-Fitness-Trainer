import React, { useRef } from "react";
//import image from "../img/bg.jpg";
import Room from "./../Screens/Room";
import {BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Signup from "./Signup";
import Signin from "./Signin";
import NoPage from "./NoPage";
import Home from "./Home";

import {Container} from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext";
import ChartsPage from "./ChartsPage";
import { getAuth } from "firebase/auth";
import ExerciseScreen from "../Screens/ExerciseScreen";
import UserProfile from "../Screens/UserProfile";
import UpdateProfile from "../Screens/UpdateProfile";
function App() {
  const auth = getAuth();
  return (
    
      <Routes>
        <Route path="/" element={<Navigate replace to="/signup" />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<Signin />}/>
          <Route path="/room" element={<Room />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<ChartsPage />} />
          <Route path="/Exercise" element={<ExerciseScreen />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/UpdateProfile" element={<UpdateProfile />} />
          
      </Routes>
      
    
   
  );
}

export default App;