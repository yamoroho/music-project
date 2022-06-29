import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { Context } from '..'
import { fetchOneTrack } from '../http/trackAPI'

const TrackItem = observer(({track_item}) => {
  const {track} = useContext(Context)

  return (
    <Col md={3}>
      <Card bg='dark'>
        <Image src={process.env.REACT_APP_API_URL + 'img/' + track_item.picture}/>
        <div className="">
          <div>{track_item.name}</div>
          <div>{track_item.artist}</div>
          <button onClick={ () => fetchOneTrack(track_item.id).then(data => {track.setSelectedTrack(data); console.log(track.selectedTrack);})}>Play this track</button>
          <button onClick={ () => console.log(track.selectedTrack.id) } >log</button>
        </div>
      </Card>
    </Col>
  )
})

export default TrackItem