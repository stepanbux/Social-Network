import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return(
      <div className={s.elem}>
        <img src='https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg' />
        {props.message}
        <div>
          <span>like {props.like}</span>
        </div>
      </div>
    );
}
export default Post;