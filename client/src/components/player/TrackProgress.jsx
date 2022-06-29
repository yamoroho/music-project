import React from 'react'

const TrackProgress = ({left, right, onChange, className}) => {
  return (
    
      <input type="range"
      className={className}
      min={0}
      max={right}
      value={left}
      onChange={onChange}
      />
  
  )
}

export default TrackProgress