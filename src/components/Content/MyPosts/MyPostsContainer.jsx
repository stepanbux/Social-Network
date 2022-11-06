import { connect } from 'react-redux';
import { addPostActionCreator } from '../../redux/profile-reduce';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
    return {
        post: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => {
            dispatch(addPostActionCreator(post))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;