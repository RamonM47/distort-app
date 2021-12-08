import React, { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import Users from '../Users/Users'
import * as authService from '../../services/authService'
import Movies from '../Movies/Movies.jsx'
import Podcasts from '../Podcasts/Podcasts.jsx'
import Music from '../Music/Music.jsx'
import Profile from '../Profile/Profile'
import Details from '../Details/Details'
import CreateListForm from '../../components/CreateListForm/CreateListForm'

const App = () => {
	const [user, setUser] = useState(authService.getUser())
	const navigate = useNavigate()

	const handleLogout = () => {
		authService.logout()
		setUser(null)
		navigate('/')
	}

	const handleSignupOrLogin = () => {
		setUser(authService.getUser())
	}

	return (
		<>
			<NavBar user={user} handleLogout={handleLogout} />
			<Routes>
				<Route path='/' element={<Landing user={user} />} />
				<Route path='/signup' element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/login' element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/users' element={user ? <Users loggedInUser={user} /> : <Navigate to='/login' />} />
				<Route path='/movies' element={<Movies user={user} />} />
				<Route path='/podcasts' element={<Podcasts user={user} />} />
				<Route path='/music' element={<Music user={user} />} />
				<Route path='/profile' element={<Profile loggedInUser={user} />} />
				<Route path='/details' element={<Details />} />
				<Route path='/create-list-form' state={user} element={<CreateListForm />} />
				
			</Routes>
		</>
	);
}
export default App;