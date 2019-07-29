import React from 'react'
import '../styles/index.styl'
import Layout from '../layouts/main'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons'
import Details from '../components/details'

const Index = () => (
  <div className="Content">
    <div className="Content-row">
      <div className="Content-row-status">
        <button className="btn btn-circle btn-secondary">
          <FontAwesomeIcon size="lg" icon={faCheck}/>
        </button>
      </div>
      <div className="Content-row-details">
        <input type="text" placeholder="Search"/>
      </div>
    </div>
    {[...Array(3)].map(n => (
      <div key={n} className="Content-row">
        <div className="Content-row-status">
          <button className="btn btn-circle btn-secondary">
            <FontAwesomeIcon size="lg" icon={faCheck}/>
          </button>
        </div>
        <div className="Content-row-details">
          <Details />
        </div>
      </div>
    ))}
    <div className="Float-button">
      <button className="btn btn-circle btn-secondary btn-lg">
        <FontAwesomeIcon size="lg" icon={faPlus}/>
      </button>
    </div>
  </div>
)

export default Layout(Index)
