import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => (
  <Fragment>
    <div className="Sidebar-logo">
      <img src="/static/logo.png" alt="logo"/>
    </div>
    <div className="Sidebar-options">
      <h5 className="text font-weight-normal"><FontAwesomeIcon icon={faLightbulb}/> Smart Filters</h5>
      <hr className="divider"/>
      <hr className="divider"/>
      <h5 className="text font-weight-normal">Status</h5>
    </div>
  </Fragment>
)

export default Sidebar
