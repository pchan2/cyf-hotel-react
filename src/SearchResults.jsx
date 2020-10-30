import React, { useState } from "react";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [id, setId] = useState("");

  const Headers = [
    "ID",
    "Title",
    "First Name",
    "Surname",
    "Email",
    "Room ID",
    "Check-In Date",
    "Check-Out Date",
    "Nights",
    "Customer Profile"
  ];

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {Headers.map(header => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(props.results)
            ? props.results.map((result, i) => (
                <TableRow key={i} bookingData={result} setId={setId} />
              ))
            : null}
        </tbody>
      </table>
      <CustomerProfile id={id} />
    </div>
  );
};

export default SearchResults;
