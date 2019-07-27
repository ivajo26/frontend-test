import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Filter = (props) => {
  const [check, setCheck] = useState(true)
  return (
    <div className="Filter">
      <span className="Filter-icon"><FontAwesomeIcon size="2x" icon={props.icon}/></span>
      <label className="Filter-switch">
        <input type="checkbox" className="Filter-switch-checkbox" checked={check}
          onChange={(e) => { setCheck(e.target.checked) }}/>
        <span className="Filter-switch-slider" />
      </label>
    </div>
  )
}

export default Filter
