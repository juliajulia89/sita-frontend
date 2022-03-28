import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import FlightCard from "../components/FlightCard";

function Flights(props) {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URI = process.env.REACT_APP_API_URI;

  useEffect(() => {
    axios
      .get(`${API_URI}/api/flights`)
      .then((response) => {
        setFlights(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
    },)
         
  return (
    <>
      <Navbar />
      {isLoading && <Spinner />}
      {flights.map((flight) => {
        return <FlightCard flightDetails={flight} key={flight._id} />;
      })}
      {flights.length === 0 && (
        <p className="error-message">No such flight was found, sorry.</p>
      )}
    </>
  );
}

export default Flights;
