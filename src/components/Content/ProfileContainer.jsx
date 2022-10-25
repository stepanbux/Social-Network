import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../redux/profile-reduce';
import Profile from './Profile';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component{

    componentDidMount() {
        
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 26047
        }
        this.props.setUser(userId);
    }

    render() {
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
    }
}

export default compose(
    connect (mapStateToProps, {setUser}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)