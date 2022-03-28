import React from "react";
import { Link } from "react-router-dom";

function SingleFlightDetails(props) {
  const { flightDetails } = props;

  return (
    <div className="table-flight-container">
      <div className="table-flight-detail">
      <table>
        <thead>
          <tr>
            <th>Comment ID</th>
            <th>Comment:</th>
            <th>User:</th>
            <th>Tags:</th>
          </tr>
        </thead>
        <tbody>
        <strong>Comment ID:</strong>
        <p>{flightDetails[0].commentId}</p>
        <strong>Comment:</strong>
        <p>{flightDetails[0].commment}</p>
        <strong>User:</strong>
        <p>{flightDetails[0].user}</p>
        <strong>Tags:</strong>
        <p>{flightDetails[0].tags}</p>
        </tbody>
        </table>
      </div>
      <Link to="/flights">
        <p className="button">Go back to the list</p>
      </Link>
    </div>
  );
}

export default SingleFlightDetails;
