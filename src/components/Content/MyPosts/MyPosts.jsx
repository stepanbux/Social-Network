import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../Validation/validators';
import { Textarea } from '../../common/FormControls/FormsControls';
import s from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = (props) => {

  let postsElements = props.post.map((p) => {
    return <Post message={p.message} like={p.like} />
  })

  let onAddPost = (value) => {
    props.addPost(value.post);
  }
  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <PostFormRedux onSubmit={onAddPost}/>
      {postsElements}

    </div>
  );
}

const max = maxLengthCreator(10)

const PostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={Textarea} name={'post'} placeholder={'Enter your post'} 
      validate={[requiredField, max]} />
    </div>
    <div>
      <button>Add post</button>
    </div>
  </form>
}


const PostFormRedux = reduxForm({
  form: 'post'
})(PostForm)

export default MyPosts;