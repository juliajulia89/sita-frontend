import React from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../assets/running-man.gif";
import "../index.css";

function Flights(props) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const API_URI = process.env.REACT_APP_API_URI;

  useEffect(() => {
    axios
      .get(`${API_URI}/flights`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <img src={Spinner} alt="loading..." className="spinner" />
        </>
      ) : (
        <>
          <Navbar />
          <div className="flights-list">
            
          </div>
        </>
      )}
    </>
  );
}

export default Flights;
