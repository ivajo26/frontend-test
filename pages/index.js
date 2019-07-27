import React from 'react'
import '../styles/index.styl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'

const Index = () => (
  <div className="Layout">
    <div className="Layout-sidebar">
      <div className="Sidebar-logo">
        <img src="/static/logo.png" alt="logo"/>
      </div>
      <div className="Sidebar-options">
        <h5 className="text font-weight-normal"><FontAwesomeIcon icon={faLightbulb}/> Smart Filters</h5>
        <hr className="divider"/>
        <hr className="divider"/>
        <h5 className="text font-weight-normal">Status</h5>
      </div>
    </div>
    <div className="Layout-main">
      <nav className="Main-nav">
        <button>
          <i></i>
          <span>Home</span>
        </button>
      </nav>
      <section className="Main-content">

      </section>
    </div>
  </div>
)

export default Index
