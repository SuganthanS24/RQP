import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'Please provide a product name'],
    trim: true
  },
  category: String,
  height: String,
  weight: String,
  workingTime: String,
  chargingTime: String,
  dof: String,
  camera: String,
  connectivity: String,
  features: [String],
  basePrice: {
    type: Number,
    required: [true, 'Please provide a base price']
  },
  gstPercentage: {
    type: Number,
    default: 18
  },
  productImage: {
    type: String,
    default: null
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Product', productSchema)