import React from 'react'
import Navbar from './NavComponent'
import "./home.css";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: white;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;


export default function Home() {
  return (
    <div>
      <Navbar/>
      <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            Stay healthy with
            <br />
            <span>
              <strong>Ai Fitness</strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: ["Exercise", "Eat", "Repeat"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </MyTitleMessage>
    </div>
  )
}
