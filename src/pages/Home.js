import React from "react";
import Logo from "../assets/logo.png";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
     <Navbar />
    <div className="home">
      <h1>Welcome to SITA </h1>
      <img className="logo" src={Logo} alt="sita logo" />
    </div>
    </>
  );
}

export default Home;
