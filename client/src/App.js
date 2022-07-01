import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchUser } from './utils/fetchUser'
const App = () => {
  const navigate=useNavigate()

  useEffect(() => {
    const User=fetchUser()
    
    if(!User) {
      navigate("/login")
    }

   
  }, [])
  
  return (
    <Routes>
      <Route path="login" element={<Login/>}/>
      <Route path="/*" element={<Home/>}/>
    </Routes>
  )
}

export default App