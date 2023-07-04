import React, { useContext, useState } from 'react'
import "../styles/Feed.css"
import Share from '../components/Share'
import { LoginService } from '../services/Auth/Login';
import { AuthContext } from '../context/AuthContext';
import Posts from './Posts';

function Feed() {
    const [user,setUser]=useState("");
    const [pass,setPass]=useState("");
    const {stateAuth,dispatchAuth} = useContext(AuthContext);
    // const handleLogin=()=>{
    //     console.log(user,pass);
    //     LoginService(user,pass,dispatchAuth);
    // }
  return (
    <div className='feed'>
    <div className='feedWrapper'>
     <Share />
    {/* <label><input onChange={(e)=>setUser(e.target.value)}type="text"/>NAme</label>
    <label><input onChange={(e)=>setPass(e.target.value)}type="text"/>Password</label>
    <button onClick={handleLogin}>Submit</button>  */}
     </div>
     <Posts />
     <Posts />
     <Posts />
    </div>
    
  )
}

export default Feed