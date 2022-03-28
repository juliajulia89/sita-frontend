import React from "react";
import { Link } from "react-router-dom";

function FlightCard({ flightDetails }) {
  const { commentId, comment, user, tags} = flightDetails;

  return (
    <Link to={`/flights/${flightDetails.id}`}>
      <div className="flight-detail">
        <p className="flight-detail">{commentId}</p>
        <p className="flight-detail">{comment}</p>
        <p className="flight-detail">{user}</p>
        <p className="flight-detail">{tags}</p>
      </div>
    </Link>
  );
}

export default FlightCard;
