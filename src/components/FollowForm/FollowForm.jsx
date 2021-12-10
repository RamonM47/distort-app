import { set } from 'mongoose'
import React, { useState } from 'react'
import * as followService from '../../services/followService'

const FollowForm = (props) => {
    const [followData, setFollowData] = useState({
        userToFollow: '',
        userFollowing: ''
    })

    const handleSubmit = e => {
        e.preventDefault()
        try {
        setFollowData({
            userToFollow: props.userToFollow,
            userFollowing: props.userFollowing})
            followService.follow(followData)
        } catch (err) {
            console.log(err)
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <button>Follow</button>
        </form>
    );
}



export default FollowForm;