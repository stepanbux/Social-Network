import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] );

    const activateMode = () => {
        setEditMode(true);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
        
    }

    const deactivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }


    return (
        <>
            { !editMode &&
                <div>
                    <span onDoubleClick={activateMode}>{props.status || 'none'}</span>
                </div>
            }

            { editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateMode} value={status}/>
                </div>
            }
        </>
    )
}


export default ProfileStatusWithHooks;