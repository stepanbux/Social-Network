import React from 'react';
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/userPhoto.png'
import Preloaded from '../../common/Prereloaded';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloaded />
    } else {
        return (
            <div>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} />
                <div className={s.name}>
                   {props.profile.fullName}
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        );
    }
}
export default ProfileInfo;