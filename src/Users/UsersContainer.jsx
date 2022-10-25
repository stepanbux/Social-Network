import { connect } from 'react-redux';
import { follow, getUsersThunkCreator, setCurrentPageAC, toggleFollowingProgress, unfollow } from '../components/redux/users-reducer';
import React from 'react';
import Users from './Users';
import Preloaded from '../components/common/Prereloaded';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
        { this.props.isFetching ? <Preloaded /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged} users={this.props.users} 
                followingInProgress={this.props.followingInProgress} unfollow={this.props.unfollow}
                follow={this.props.follow}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps, {
            setCurrentPage: setCurrentPageAC,
            toggleFollowingProgress: toggleFollowingProgress,
            getUsersThunkCreator: getUsersThunkCreator,
            unfollow: unfollow,
            follow: follow
        }),
    withAuthRedirect
)(UsersContainer)
