import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import AddTrack from '../components/Modals/AddTrack'

const MyProfile = observer(() => {
  const [trackVisible, setTrackVisible] = useState(false)
  return (
    <Container>
      <Button onClick={() => setTrackVisible(true)} className='p-2' variant='outline-light'>Add track</Button>
      

      <AddTrack show={trackVisible} onHide={() => setTrackVisible(false)}/>
    </Container>
    
    
  )
})

export default MyProfile