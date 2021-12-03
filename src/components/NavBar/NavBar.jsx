import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
	return (
		<>
			{user ? (
				<nav>
					<div class='toggle'>
							<p class='distort'>
								<Link to="/">Distort</Link>
							</p>
							<p class = 'welcome'>
								Welcome, {user.name}
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
					<div class='submit'>
						<input type="text" />
						<button type='submit'>Search</button>
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
					<div class='submit'>
						<input type="text" />
						<button type='submit'>Search</button>
					</div>
				</nav>
			)}
		</>
	)
}

export default NavBar