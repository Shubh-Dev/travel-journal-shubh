import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {
    key, title, location, googleMapsUrl, startDate, endDate, description, imageUrl,
  } = props;

  return (
    <div className="card" key={key}>
      <div className="image-holder">
        <img src={imageUrl} alt="landscape" className="card-img" />
      </div>

      <div className="card-info">
        <div className="maps-division">
          <div className="pinpoint-location-icon">
            <img
              src="../images/pinpoint.svg"
              alt="maps"
              className="maps-icon"
            />
            <h6>{location}</h6>
          </div>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            <p>view on google map</p>
          </a>
        </div>
        <h2 className="spot">{title}</h2>
        <div>
          <p>
            {startDate}
            -
            {endDate}
          </p>
          <p className="description-para">{description}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  key: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  googleMapsUrl: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Card;
