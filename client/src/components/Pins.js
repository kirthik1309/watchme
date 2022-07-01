import React,{useState} from 'react'
import { Route,Routes } from 'react-router-dom'
import CreatePin from './CreatePin'
import Feed from './Feed'
import Navbar from './Navbar'
import PinDetail from './PinDetail'
import Search from './Search'
const Pins = ({user}) => {
  const [SearchTerm, setSearchTerm] = useState('')
  return( 
  <div className='px-2 md:px-5'>
  <div className='bg-gray-50'>
    <Navbar searchTerm={SearchTerm} setSearchTerm={setSearchTerm} user={user && user}/>
  </div>
  <div className='h-full'>
    <Routes>
        <Route path="/" element={<Feed />}/>
        <Route path="/category/:categoryId" element={<Feed />}/>
        <Route path="/pin-detail/:pinId" element={<PinDetail user={user && user}/>}/>
        <Route path="/create-pin" element={<CreatePin user={user && user}/>}/>
        <Route path="/search" element={<Search searchTerm={SearchTerm} setSearchTerm={setSearchTerm}/>}/>
    </Routes>
  </div>
  </div>
  )
}

export default Pins