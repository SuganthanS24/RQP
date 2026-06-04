import mongoose from 'mongoose'

const teamMemberSchema = new mongoose.Schema({
  name: String,
  designation: String,
  linkedin: { type: String, default: "" },
  instagram: { type: String, default: "" },
  email: { type: String, default: "" },
  phone: { type: String, default: "" },
  photo: {
    type: String,
    default: null
  },
  order: {
    type: Number,
    default: 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('TeamMember', teamMemberSchema)