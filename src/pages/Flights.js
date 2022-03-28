import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import FlightCard from "../components/FlightCard";

function Flights(props) {
  const [flights, setFlights] = useState([]);
  const [query] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const API_URI = process.env.REACT_APP_API_URI;

  useEffect(() => {
    const getFlightsFromApi = async () => {
      try {
        const flightsFromApi = await axios.get(`${API_URI}/api/flights`);
        setFlights(flightsFromApi.data);
        setIsLoading(false);
      } catch (error) {
        console.log(
          error,
          "We apologize, server error, please try again later"
        );
      }
    };
    getFlightsFromApi();
  }, [query]);

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
