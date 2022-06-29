import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Context } from '..'
import { fetchTracks } from '../http/trackAPI'
import TrackList from '../components/TrackList'
import { observer } from 'mobx-react-lite'

const Music = observer(() => {

  const {track} = useContext(Context)

  //console.log(fetchTracks());

  useEffect(() => {
    fetchTracks().then(data => track.setTracks(data.rows)) 
  }, [])

  return (
    
    <Container>
      <Row>
        <Col>
          <TrackList/>
        </Col>
      </Row>

    </Container>
  )
})

export default Music