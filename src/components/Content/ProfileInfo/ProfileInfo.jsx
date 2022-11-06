import React from 'react';
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/userPhoto.png'
import Preloaded from '../../common/Prereloaded';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, ...props}) => {
    if (!profile) {
        return <Preloaded />
    } else {
        return (
            <div>
                <img className={s.picture} src={profile.photos.large != null ? profile.photos.large : userPhoto} />
                <div className={s.name}>
                   {profile.fullName}
                </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        );
    }
}
export default ProfileInfo;