import React from 'react'
import "../styles/Profile.css"
import ProfileImg from "../images/jasmine.jpg";
import Topbar from "../components/Topbar"
import Sidebar from "../components/Sidebar"
import Rightbar from "../components/Rightbar"
import Feed from "../components/Feed"
import SocialImg from "../images/social3.jpg"

function Profile() {
    return (
        <>
          <Topbar />
          <div className="profile">
            <Sidebar />
            <div className="profileRight">
              <div className="profileRightTop">
                <div className="profileCover">
                  <img
                    className="profileCoverImg"
                    src={SocialImg}
                    alt=""
                  />
                  <img
                    className="profileUserImg"
                    src={ProfileImg}
                    alt=""
                  />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Serene Abraham</h4>
                    <button className='editButton'>Edit Profile</button>
                    <span className='profileInfoDesc'><p>@sereneabraham</p>Stay Happy and Positive!</span>
                </div>
                
              </div>
              <div className="profileRightBottom">
                <Feed />
                <Rightbar profile/>
              </div>
            </div>
          </div>
        </>
      );
}

export default Profile