import mongoose from 'mongoose'

const termsSchema = new mongoose.Schema({
  title: String,
  points: [
    {
      heading: String,
      description: String
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Terms', termsSchema)