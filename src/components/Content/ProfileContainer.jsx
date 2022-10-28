import React from 'react';
import { connect } from 'react-redux';
import { setUser, getStatus, updateStatus } from '../redux/profile-reduce';
import Profile from './Profile';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';


class ProfileContainer extends React.Component{

    componentDidMount() {
        
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 26047;
        }
        this.props.setUser(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} 
            status={this.props.status} updateStatus={this.props.updateStatus}/>
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
        status: state.profilePage.status
    }
}

export default compose(
    connect (mapStateToProps, {setUser, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect 
)(ProfileContainer)