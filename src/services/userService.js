import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/users'

function getAllUsers() {
  return fetch(BASE_URL, {
    headers: {Authorization: `Bearer ${tokenService.getToken()}`}
  })
  .then(res => res.json())
}

function populateUser(userId) {
  return fetch(`${BASE_URL}/${userId}`)
  .then(res => res.json())
}

export {
  populateUser,
  getAllUsers
}