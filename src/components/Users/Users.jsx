import React from 'react';
import Pagenation from '../common/Pagination/Pagenation';
import User from './User';

let Users = ({ currentPage, totalUsersCount, onPageChanged, pageSize, users, followingInProgress, unfollow, follow}) => {

    return <div>
        <Pagenation currentPage={currentPage} onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount} pageSize={pageSize} />
        {
            users.map(u => <User user={u} key={u.id}
                followingInProgress={followingInProgress}
                unfollow={unfollow} follow={follow} />
            )
        }
    </div >
}

export default Users;