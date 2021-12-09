import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    avatar: String,
    following: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
    followers: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
    lists: [{type: mongoose.Schema.Types.ObjectId, ref: "List"}]
  },
  {
    timestamps: true,
  }
  )

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}