import mongoose from 'mongoose'

const bankDetailsSchema = new mongoose.Schema({
  accountName: String,
  accountNo: String,
  ifscCode: String,
  bankName: String,
  branch: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('BankDetails', bankDetailsSchema)