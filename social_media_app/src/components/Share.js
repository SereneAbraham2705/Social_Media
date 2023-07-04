import React from 'react'
import "../styles/Share.css";
import ProfileImg from "../images/jasmine.jpg";
import { FaRegImages } from 'react-icons/fa';


function Share() {
    return (
        <div className="share">
          <div className="shareWrapper">
            <div className="shareTop">
              <img className="shareProfileImg" src={ProfileImg} alt="ProfileImg" />
              <input
                placeholder="What's in your mind?"
                className="shareInput"
              />
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <FaRegImages htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    {/* <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div> */}

                </div>
                <button className="shareButton">Post</button>
            </div>
          </div>
        </div>
      );
}

export default Share