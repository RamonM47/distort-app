import { User } from '../models/user.js'
import { List } from '../models/list.js'

function index(req, res) {
  User.find({})
  .populate('profile')
  .then(users => res.json(users))
}

function show(req, res) {
  User.findById(req.params.id)
  .populate('profile')
  .then(populateUser => res.json(populateUser))
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
  // User.findById(req.params.id)
  // .populate('profile')
  // .then(user => {
  //   user.profile.following.push(req.params.follower)
  //   user.save()
  //   .then()
  // })
}

export {
  index,
  show,
  createList,
  addFollower
}