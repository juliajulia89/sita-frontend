import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <h1>
          Welcome to <p className="home-logo">SITA</p>
        </h1>
         </div>
        <p className="home-text">
          The world's leading specialist in air transport communications
          and information technology.
        </p>
    
    </>
  );
}

export default Home;
