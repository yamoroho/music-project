import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { observer } from 'mobx-react-lite';
import Player from './components/player/Player';
import { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';


const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={"grow"}/>
  }

  return (
    <div className="App">
      <Router>
        <Header/>
        <AppRouter/>
        <Player/>
      </Router>
      
    </div>
  );
})

export default App;
