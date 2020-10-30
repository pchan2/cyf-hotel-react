import React, { useState } from "react";
import "./App.css";
import moment from "moment";

const TableRow = ({ bookingData, setId }) => {
  const [guestrow, setGuestrow] = useState(false);
  const handleClick = () => {
    setId(bookingData.id);
  };

  const setColor = () => {
    setGuestrow(!guestrow);
  };

  return (
    <tr
      className={guestrow ? "guestrow active" : "guestrow"}
      onClick={setColor}
    >
      <td>{bookingData.id}</td>
      <td>{bookingData.title}</td>
      <td>{bookingData.firstName}</td>
      <td>{bookingData.surname}</td>
      <td>{bookingData.email}</td>
      <td>{bookingData.roomId}</td>
      <td>{bookingData.checkInDate}</td>
      <td>{bookingData.checkOutDate}</td>
      <td>
        {moment(bookingData.checkOutDate).diff(
          moment(bookingData.checkInDate),
          "days"
        )}
      </td>
      <td>
        <button onClick={handleClick}>Show profile</button>
      </td>
    </tr>
  );
};

export default TableRow;
