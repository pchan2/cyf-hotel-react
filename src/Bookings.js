import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
// import FakeBookings from "./data/fakeBookings.json";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [API, setAPI] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("Fetching data");
    setLoading(true);
    fetch(`https://cyf-react.glitch.me/`)
      .then(res => res.json())
      .then(data => {
        console.log("test");
        setBookings(data);
        setAPI(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        console.error("Error", err);
      });
  }, []);

  const search = searchVal => {
    const filteredBookings = API.filter(
      booking =>
        booking.firstName.includes(searchVal) ||
        booking.surname.includes(searchVal)
    );
    setBookings(filteredBookings);

    console.info("TO DO!", filteredBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        {loading ? (
          <p>The table is loading</p>
        ) : (
          <div>
            <Search search={search} />
            <SearchResults results={bookings} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
