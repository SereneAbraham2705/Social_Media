import React from 'react'
import "../styles/Rightbar.css"
import ProfileImg1 from "../images/Nd.jpg";

function Rightbar() {
  return (
    <div className='rightbar'>
      <h4 className="rightbarTitle">Suggestions for you</h4>
        <ul className="rightbarFriendList">
          <li className='rightbarFriend'>
              <div className="rightbarProfileImgContainer">
              <img className='rightImg' src={ProfileImg1} alt=""/>
              <p>Deekshita Munishetty</p>
              <button className='followButton'>Follow</button>
              </div>
              
              
          </li>
        </ul>
    </div>
  )
}

export default Rightbar