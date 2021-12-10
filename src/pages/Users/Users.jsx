import React, { useState, useEffect } from 'react';
import * as userService from '../../services/userService'
import './Users.css'
import FollowForm from '../../components/FollowForm/FollowForm';
import { Link } from 'react-router-dom';

const Users = (props) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    userService.getAllUsers()
      .then(users => setUsers(users))
  }, [])

  return (

    <div class='profilecard'>
      <h1 class='hello' >Hello. This is a list of all the users.</h1>
      {users.length ?
        <>

          {users.map(user => 
              <div class='pfcard'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwUXumi2-4L46JVm7bryAzGyWCD1SHYLfIw&usqp=CAU'></img>
                <h2 class='name' key={user._id}>
              {<Link to="/profile" state={user.profile}>{user.name}</Link>}</h2>
                <h2 class='mvlst' >Lists: {user.profile?.lists.length}</h2>
                <h3 class='fdlst'>Followers (0)</h3>
                {props.loggedInUser.profile === user.profile._id ? '' :

                  <FollowForm userToFollow={user.profile} userFollowing={props.loggedInUser.profile} />
                }
            </div>
          )}
        </>
        :
        <p>Loading...</p>
      }
    </div>
  );
}



export default Users