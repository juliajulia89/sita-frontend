import React from "react";
import { Link } from "react-router-dom";

function FlightCard({ flightDetails }) {
  const { commentId, comment, user, tags} = flightDetails;

  return (
    <Link to={`/flights/${flightDetails.id}`}>
      <div className="">
        <p className="">{commentId}</p>
        <p className="">{comment}</p>
        <p className="">{user}</p>
        <p className="">{tags}</p>
      </div>
    </Link>
  );
}

export default FlightCard;
