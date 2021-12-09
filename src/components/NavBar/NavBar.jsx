import React, { useState, useEffect } from 'react'
import * as userService from '../../services/userService'
import { Link } from 'react-router-dom'
import  './NavBar.css'
import SearchForm from '../SearchForm/SearchForm'

const NavBar = ({ user, handleLogout }) => {
	const [userToPopulate, setUserToPopulate] = useState({})
	useEffect(() => {
		userService.populateUser(user._id)
		.then(populatedUser => setUserToPopulate(populatedUser))
	}, [])
	return (
		<>
			{user ? (
				<nav>
					<div class='toggle'>
							<p class='distort'>
								<Link to="/">Distort</Link>
							</p>
							<p class = 'welcome'>
								Welcome, <Link to="/profile" state={userToPopulate.profile}>{user.name}</Link>
							</p>
							<p class = 'users'>
								<Link to="/users">Users</Link>
							</p>
							<p class = 'logout'>
								<Link to='' onClick={handleLogout}>Log Out</Link>
							</p>
					</div>
					<div class='nav'>
							<p class = 'mv'>
								<Link to="/movies">Movies</Link>
							</p>
							<p class = 'msc'>
								<Link to="/music">Music</Link>
							</p>
							<p class = 'pc'>
								<Link to="/Podcasts">Podcasts</Link>
							</p>
							
					</div>
				</nav>
			) : (
				<nav>
					<div class='toggle'>
						<p class='distort'>
							<Link to="/">Distort</Link>
						</p>
						<p class= 'login'>
							<Link to="/login">Log In</Link>
						</p>
						<p class = 'signup'>
							<Link to="/signup">Sign Up</Link>
						</p>
					</div>
					<div class='nav'>
							<p class = 'mv'>
								<Link to="/movies">Movies</Link>
							</p>
							<p class = 'msc'>
								<Link to="/music">Music</Link>
							</p>
							<p class = 'pc'>
								<Link to="/podcasts">Podcasts</Link>
							</p>
					</div>
				</nav>
			)}
		</>
	)
}

export default NavBar