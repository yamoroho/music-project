import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { useContext } from 'react'
import { Card, Container, Form, Row, Button } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Context } from '..'
import { login, registration } from '../http/userAPI'
import { LOGIN_ROUTE, MUSIC_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import './Auth.css'


const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)      
      }
      user.setUser(user)
      user.setIsAuth(true)
      navigate(MUSIC_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
    
  }
  return (
    <Container className='container__auth'>
      <Card className='p-4' bg="dark">
        <h2 className='m-auto'>{isLogin ? 'Log in' : 'Sign up'}</h2>
        <Form>
          <Form.Control
            className='mt-4'
            placeholder='Enter your email...'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className='mt-2'
            placeholder='Enter your password...'
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <Row className='d-flex justify-content-between align-items-center auth-wrapper-submit'>
            {isLogin ?
              <div style={{width: 'fit-content'}}>
                Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Sign up</NavLink>
              </div>
              :  
              <div style={{width: 'fit-content'}}>
                Have an account? <NavLink to={LOGIN_ROUTE}>Log in</NavLink>
              </div>
            }

            <Button
              style={{width: 'fit-content'}}
              onClick={() => click()}
            >
              {isLogin ? 'Log in' : 'Sign up'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  )
})

export default Auth