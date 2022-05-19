import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import SideBar from '../../Components/SideBar'
import Team from '../Team/Team'
import Client from '../Clients/Client'
import Product from '../Product/Product'

const Home = () => {
  return (
    <div>
      
        <SideBar />
        <Navbar />
        <Routes>
          <Route path="/team" element={<Team />} />
          <Route path="/client" element={<Client />}  />
          <Route path="/product" element={< Product />}  />
        </Routes>        
    </div>
  )
}

export default Home