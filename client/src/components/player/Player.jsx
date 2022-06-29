import { observer } from 'mobx-react-lite'
import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { Context } from '../..'
import './Player.css'
import PlayerControls from './PlayerControls'
import PlayerDetails from './PlayerDetails'
import TrackProgress from './TrackProgress'

let audio
let pause = true

const Player = observer(() => {
  const {track} = useContext(Context)
  const [trackPause, setTrackPause] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100);


  //const {track_play} = useContext(Context)


  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio()
     // play()
    }
    //console.log('Effect');
  }, [track.selectedTrack]);
  

  const setAudio = () => {
    audio.src = process.env.REACT_APP_API_URL + 'track/' + track.selectedTrack.audio
    
    audio.ontimeupdate = () => {
      setCurrentTime(Math.ceil(audio.currentTime))
    }
    audio.onloadedmetadata = () => {
      setDuration(Math.ceil(audio.duration))
      console.log(audio.duration);
    }
    audio.play()
    setTrackPause(true)
  }

// console.log(track.selectedTrack.audio);

  const play = () => {
    if (trackPause) {
      audio.pause()
      console.log(audio);
      console.log('pause ' + trackPause);
      setTrackPause(false)
    } else {
      audio.play()
      console.log(audio);
      console.log('pause ' + trackPause);
      setTrackPause(true)
    }
  }

  const changeCurrentTime = (e) => {
    audio.currentTime = Number(e.target.value)
    setCurrentTime(Number(e.target.value))
  }

  const changeVolume = (e) => {
    audio.volume = Number(e.target.value) / 100
    setVolume(Number(e.target.value))
}
  
  // const play = () => {
  //   if (pause) {
  //     audio.pause()
  //     console.log(audio);
  //     console.log('pause ' + trackPause);
  //     pause = false
  //   } else {
  //     audio.play()
  //     console.log(audio);
  //     console.log('pause ' + trackPause);
  //     pause = true
  //   }
  // }

  
  return (
       <div className="player__wrapper">
        <TrackProgress className="player__track-progress" left={currentTime} right={duration} onChange={changeCurrentTime}/>
        <PlayerControls pause={trackPause} track={track} play={play}/>
        <PlayerDetails track={track.selectedTrack}/>
        <div className='player__option'>
          <TrackProgress left={volume} right={100} onChange={changeVolume}/>
        </div>
       </div>
  )
})

export default Player