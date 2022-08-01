import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <div className="image-holder">
        <img src={props.imageUrl} alt="landscape" className="card-img" />
      </div>

      <div className="card-info">
        <div className="maps-division">
          <div className="pinpoint-location-icon">
            <img
              src="../images/pinpoint.svg"
              alt="maps"
              className="maps-icon"
            />
            <h6>{props.location}</h6>
          </div>
          <a
            href={props.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            <p>view on google map</p>
          </a>
        </div>
        <h2 className="spot">{props.title}</h2>
        <div>
          <p>
            {props.startDate}-{props.endDate}
          </p>
          <p className="description-para">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
