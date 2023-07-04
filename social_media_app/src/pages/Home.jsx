import React from 'react'
import Topbar from '../components/Topbar'
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import Rightbar from "../components/Rightbar";
import "../styles/Home.css"
import { LoginService } from '../services/Auth/Login';

function Home() {
  return (
    <>
    <Topbar />
    <div className='homeContainer'>
    <Sidebar />
    <Feed />
    <Rightbar />
    </div>


    </>
    
  )
}

export default Home