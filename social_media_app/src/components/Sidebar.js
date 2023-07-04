import React from 'react'
import "../styles/Sidebar.css"
import { FaBookmark } from 'react-icons/fa';
import { FaCompass } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

function Sidebar() {
    return (
        <div className="sidebar">
          <div className="sidebarWrapper">
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <FaCompass className="sidebarIcon" />
                <span className="sidebarListItemText">Explore</span>
              </li>
              {/* <li className="sidebarListItem">
                <Chat className="sidebarIcon" />
                <span className="sidebarListItemText">Chats</span>
              </li>
              <li className="sidebarListItem">
                <PlayCircleFilledOutlined className="sidebarIcon" />
                <span className="sidebarListItemText">Videos</span>
              </li>
              <li className="sidebarListItem">
                <Group className="sidebarIcon" />
                <span className="sidebarListItemText">Groups</span>
              </li> */}
              <li className="sidebarListItem">
                <FaBookmark className="sidebarIcon" />
                <span className="sidebarListItemText">Bookmarks</span>
              </li>
              <li className="sidebarListItem">
                <FaHeart className="sidebarIcon" />
                <span className="sidebarListItemText">Liked Posts</span>
              </li>
              {/* <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                <span className="sidebarListItemText">Jobs</span>
              </li>
              <li className="sidebarListItem">
                <Event className="sidebarIcon" />
                <span className="sidebarListItemText">Events</span>
              </li>
              <li className="sidebarListItem">
                <School className="sidebarIcon" />
                <span className="sidebarListItemText">Courses</span>
              </li> */}
            </ul>
            {/* <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
              {Users.map((u) => (
                <CloseFriend key={u.id} user={u} />
              ))}
            </ul> */}
          </div>
        </div>
      );
}

export default Sidebar