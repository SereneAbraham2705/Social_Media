import React, { useState } from 'react'
import "../styles/Posts.css"
import ProfileImg1 from "../images/Nd.jpg";
import CakeImg from "../images/birthdayc.jpg";
import LikeImg from "../images/like.webp";
import BookImg from "../images/bookm.jpg";
import { FaEllipsisH } from 'react-icons/fa';


function Posts() {
  const [like,setLike] = useState(1);
  const [islike,setIslike]=useState(false);
  const likeHandler=()=>{
    setLike(islike?like-1:like+1);
    setIslike(!islike);
  }
    return (
     <div className="post">
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img className="postProfileImg" src={ProfileImg1} alt="some Img"/>
                    <span className="postUsername">Neethu Dhwani</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className='postTopRight'></div>
                <FaEllipsisH />
            </div>
            <div className='postCenter'>
            <span className="postText">Cake symbolizes joy, love, appreciation, and even accomplishments. It is served during weddings, birthdays, and many different party settings. The cakes are almost always made to honor or mean something to the recipient. They are edible art, to be viewed and consumed with love and happiness on the most joyous occasions. Most cakes for these types of special occasions are ordered in a cake bakery. Take a look at this delicious cake i made for a clients birthday party!</span>
          <img className="postImg" src={CakeImg} alt="" />
            </div>
            <div className='postBottom'>
            <div className="postBottomLeft">
            <img className="likeIcon" src={BookImg}  alt="" />
            <img className="likeIcon" src={LikeImg} onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">4 comments</span>
          </div>
            </div>
        </div>
        
     </div>
    );
}

export default Posts