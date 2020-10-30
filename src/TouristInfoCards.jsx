import React from "react";

const TouristInfoCards = () => {
  return (
    <div>
      <div className="card">
        <img
          src="https://peoplemakeglasgow.com/images/Trip_Types/loch-lomond-golf-course.jpg"
          className="card-img-top"
          alt="Glasgow photo"
        />
        <div className="card-body">
          <h5 className="card-title">Glasgow</h5>
          <p className="card-text">Loch Lomond Golf Course.</p>
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            Click here
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/london-eye/lastminutelondoneye640x360.jpg?mw=640&hash=369C7DBB3A75160763BFD8572303D124F316A65C"
          className="card-img-top"
          alt="London photo"
        />
        <div className="card-body">
          <h5 className="card-title">London</h5>
          <p className="card-text">London Eye.</p>
          <a href="https://visitlondon.com/" className="btn btn-primary">
            Click here
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2Fcastlefield-basin%284%29.jpg&action=FeaturedItems1x1"
          className="card-img-top"
          alt="Manchester photo"
        />
        <div className="card-body">
          <h5 className="card-title">Manchester</h5>
          <p className="card-text">Manchester canal.</p>
          <a
            className="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Click here
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
