import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faLocationArrow, faTruck, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const Details = () => (
  <div className="Details">
    <div className="Details-date">
      <span className="Details-date-textday">Monday</span>
      <span className="Details-date-hour">
        <span className="Details-date-hour-number">10</span>
        <span className="Details-date-hour-hour">2:28</span>
      </span>
      <span className="Details-date-text">PM</span>
    </div>
    <div className="Details-location">
      <div className="Details-location-icon">
        <FontAwesomeIcon icon={faLocationArrow} size="2x" className="text-light"/>
      </div>
      <div className="Details-location-description">
        <div className="Details-location-description-origin">Houston, TX, 33619</div>
        <div className="Details-location-description-icon">
          <FontAwesomeIcon icon={faAngleDown} size="3x" className="text-secondary"/>
        </div>
        <div className="Details-location-description-end">Atlanta, GA, 30123</div>
      </div>
    </div>
    <div className="Details-options">
      <div className="Details-options-icon">
        <FontAwesomeIcon icon={faTruck} size="4x" className="text-dark"/>
      </div>
      <div className="Details-options-value">$ 250.000</div>
      <div className="Details-options-alert">1</div>
      <div className="Details-options-menu">
        <button className="Details-options-menu-button">
          <FontAwesomeIcon icon={faEllipsisV} size="2x" className="text-dark"/>
        </button>
      </div>
    </div>
  </div>
)

export default Details
