import React from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post';



const MyPosts = (props) => {

  let postsElements = props.post.map((p) => {
    return <Post message={p.message} like={p.like} />
  })

  let newPostElement = React.createRef();


  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>

      {postsElements}

    </div>
  );
}
export default MyPosts;