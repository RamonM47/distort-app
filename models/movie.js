import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  content: String,
  Rating: Number,
  Author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"}
}, 
{
timestamps: true
})

const movieSchema = new mongoose.Schema({
  name: String,
  Type: String,
  wTeaser: String,
  wUrl: String,
  yUrl: String,
  reviews: [reviewSchema]
},
{
  timestamps: true,  
})

const Movie = mongoose.model('Movie', movieSchema)

export {
  Movie
}