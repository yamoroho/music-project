import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { createTrack } from '../../http/trackAPI'

const AddTrack = ({show, onHide}) => {
  const [trackName, setTrackName] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [text, setText] = useState('')
  const [trackImage, setTrackImage] = useState(null)
  const [trackFile, setTrackFile] = useState(null)

  const selectTrackImage = e => {
    setTrackImage(e.target.files[0])
  }

  const selectTrackFile = e => {
    setTrackFile(e.target.files[0])
  }

  const addTrack = () => {
    const formData = new FormData()
    formData.append('name', trackName)
    formData.append('artist', authorName)
    formData.append('text', text)
    formData.append('picture', trackImage)
    formData.append('audio', trackFile)
    console.log(formData)
    createTrack(formData)
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add track
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId="formFile">
            <Form.Label>Enter track name</Form.Label>
            <Form.Control
            value={trackName}
            onChange={e => setTrackName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId="formFile">
            <Form.Label>Enter author name</Form.Label>
            <Form.Control
            value={authorName}
            onChange={e => setAuthorName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId="formFile">
            <Form.Label>Enter the text of the track</Form.Label>
            <Form.Control
            as="textarea" 
            rows={3}
            value={text}
            onChange={e => setText(e.target.value)}
            />
          </Form.Group>    
          
          
          
          <Form.Group className='mb-3' controlId="formFile">
            <Form.Label>Add a track image</Form.Label>
            <Form.Control accept=".jpg" type="file" onChange={selectTrackImage}/>
          </Form.Group>

          <Form.Group className='mb-3' controlId="formFile">
            <Form.Label>Add a track</Form.Label>
            <Form.Control  accept=".mp3"  type="file"  onChange={selectTrackFile}/>
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>

        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={addTrack}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddTrack