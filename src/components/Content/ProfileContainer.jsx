import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../redux/profile-reduce';
import Profile from './Profile';
import { Navigate, useParams } from 'react-router-dom';


class ProfileContainer extends React.Component{

    componentDidMount() {
        
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 26047
        }
        this.props.setUser(userId);
    }

    render() {

        if(!this.props.isAuth) {
            return <Navigate to="/login"/>
        }

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

export function withRouter(Children){
    return(props)=>{
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)



export default connect (mapStateToProps, {setUser})(WithUrlDataContainerComponent);