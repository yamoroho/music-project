import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import {Button, Container, Nav, Navbar, NavLink} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { Context } from '..';
import { LOGIN_ROUTE, MUSIC_ROUTE, MY_PROFILE_ROUTE } from '../utils/consts';

const Header = observer(() => {
  const navigate = useNavigate();
  const {user} = useContext(Context);
  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }
  return (
    <Navbar >
      <Container>
        <NavLink>Moroho-Music</NavLink>

        <Nav>
          

          {user.isAuth 
          ?
          <Nav>
            <Button variant='outline-light' className='m-2' onClick={() => navigate(MUSIC_ROUTE)}>Music</Button>
            <Button variant='outline-light' className='m-2' onClick={() => navigate(MY_PROFILE_ROUTE)}>Profile</Button>
            <Button variant='outline-light' className='m-2'  onClick={() => logOut() }>Log out</Button>
          </Nav>
          
          :
          <Nav>
            <Button variant='outline-light' className='m-2' onClick={() => navigate(MUSIC_ROUTE)}>Music</Button>
            <Button variant='outline-light' className='m-2' onClick={() => navigate(LOGIN_ROUTE)}>Log in</Button>
          </Nav>
          
          }
          

        </Nav>
      </Container>
    </Navbar>
  )
})

export default Header