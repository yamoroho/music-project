import React from 'react'

const PlayerDetails = ({track}) => {
  return (
    <div className='player__details'>
      <img className='player__track-img' src={process.env.REACT_APP_API_URL + 'img/' + track.picture}/>
      <div className="player__info">
        <div className="player__info-track">{track.name}</div>
        <div className="player__info-author">{track.artist}</div>
      </div>
    </div>
  )
}

export default PlayerDetails