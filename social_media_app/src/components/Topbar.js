import React from 'react';
import { FaSistrix } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import ProfileImg from "../images/jasmine.jpg";
import "../styles/Topbar.css"

function Topbar() {
    return (
        <div className="topbarContainer">
          <div className="topbarLeft">
            <span className="logo">Gensocial</span>
          </div>
          <div className="topbarCenter">
            <div className="searchbar">
              <FaSistrix className="searchIcon" />
              <input
                placeholder="Search for friend, post or video"
                className="searchInput"
              />
            </div>
          </div>
          <div className="topbarRight">
            <div className="topbarLinks">
              <span className="topbarLink">Homepage</span>
              {/* <span className="topbarLink">Timeline</span> */}
            </div>
            <div className="topbarIcons">
              <div className="topbarIconItem">
                <FaUserAlt />
                {/* <span className="topbarIconBadge">1</span> */}
              </div>
               {/* <div className="topbarIconItem">
                <Chat />
                <span className="topbarIconBadge">2</span>
              </div>
              <div className="topbarIconItem">
                <Notifications />
                <span className="topbarIconBadge">1</span>
              </div>  */}
            </div>
            <img src={ProfileImg} alt="profileImg" className="topbarImg"/>
          </div>
        </div>
      );
}

export default Topbar