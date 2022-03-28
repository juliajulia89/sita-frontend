import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import FlightDetails from "../components/FlightDetails";

function SingleFlight() {
  const [flight, setFlight] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id: flightId } = useParams();
  const API_URI = process.env.REACT_APP_API_URI;

  useEffect(() => {
    const getFlightsFromApi = async () => {
      try {
        const flightsFromApi = await axios.get(
          `${API_URI}/api/flights/${flightId}`
        );
        setFlight(flightsFromApi.data);
        setIsLoading(false);
      } catch (error) {
        console.log(
          error,
          "We apologize, server error, please try again later"
        );
      }
    };
    getFlightsFromApi();
  }, [flightId]);

  return (
    <div>
      <Navbar />
      <div className="my-4">
        <h1 className="text-4xl font-normal leading-normal mt-0 mb-2 text-blue-800">
          Flight Details
        </h1>
        {isLoading && <Spinner />}
        {!isLoading && <FlightDetails flightDetails={flight} />}
      </div>
    </div>
  );
}

export default SingleFlight;
