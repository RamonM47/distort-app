import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'

const Profile = () => {
    const location = useLocation()
    const user = location.state

    return (
        <>
            <main >
                <h2>
                    Name: {user.name}
                </h2>
                <h2>
                    Avatar: {user.avatar}
                </h2>
                <h2>
                    Following: {user.following}
                </h2>
                <h2>
                    Followers: {user.followers}
                </h2>
                <h2>
                    Music List: {user.musicList}
                </h2>
                <h2>
                    Movie List: {user.movieList}
                </h2>
                <h2>
                    Podcast List: {user.podcastList}
                </h2>

            </main>
            <body>

            </body>
        </>
    )
}

export default Profile


