import mongoose from 'mongoose'

const companySchema = new mongoose.Schema({
  companyName: String,
  address: String,
  email: String,
  phone: String,
  logo: {
    type: String,
    default: null
  },
  about: String,
  vision: String,
  mission: String,
  solution: String,
  howItWorks: String,
  whyChooseUs: String,
  customPages: [{
    id: String,
    imageUrl: String,
    label: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Company', companySchema)