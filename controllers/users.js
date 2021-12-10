import { User } from '../models/user.js'
import { List } from '../models/list.js'
import { Profile } from '../models/profile.js'

function index(req, res) {
  User.find({})
  .populate('profile')
  .then(users => res.json(users))
}

function show(req, res) {
  User.findById(req.params.id)
  .populate('profile')
  .then(populateUser => 
    res.json(populateUser))
}

function createList(req, res) {
  const list = new List(req.body)
  User.findById(req.params.id)
  .populate('profile')
  .then(profile => {
    profile.profile.lists.push(list._id)
    list.save()
    profile.profile.save()
    .then(updatedProfile => {
      res.json({updatedProfile})
    })
  }).catch(err => {
    console.log(err)
  })
}

function addFollower(req, res) {
  Profile.findById(req.params.id)
  .then(profileFollowing =>{
    Profile.findById(req.body.userToFollow._id)
    .then(profileToFollow => {
      profileFollowing.following.push(profileToFollow)
      profileToFollow.followers.push(profileFollowing)
      profileFollowing.save()
      profileToFollow.save()
      console.log(profileToFollow, profileFollowing)
    })
  }).catch(err => {
    console.log(err)
  })
}

export {
  index,
  show,
  createList,
  addFollower
}