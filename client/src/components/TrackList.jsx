import React from 'react'
import { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { Context } from '..'
import TrackItem from './TrackItem'
import { observer } from 'mobx-react-lite'


const TrackList = observer(() => {
  const {track} = useContext(Context)

  return (
    <Row className="d-flex">
      {track.tracks.map(track =>
        <TrackItem key={track.id} track_item={track}/>  
      )}
    </Row>
  )
})

export default TrackList