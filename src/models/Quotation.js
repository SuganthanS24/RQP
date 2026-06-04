import mongoose from 'mongoose'

const quotationSchema = new mongoose.Schema({
  quotationNo: {
    type: String,
    unique: true,
    required: true
  },
  quotationDate: Date,
  preparedFor: {
    name: String,
    institution: String,
    pincode: String,
    city: String,
    district: String,
    state: String,
    email: String,
    phone: String
  },
  product: {
    productId: mongoose.Schema.Types.ObjectId,
    productName: String,
    quantity: Number,
    unitPrice: Number,
    gstPercentage: Number,
    gstAmount: Number,
    packing: Number,
    transitInsurance: Number,
    shipping: Number,
    grandTotal: Number,
    productImage: String
  },
  status: {
    type: String,
    enum: ['draft', 'sent', 'accepted'],
    default: 'draft'
  },
  includeAbout: { type: Boolean, default: true },
  includeVisionMission: { type: Boolean, default: true },
  includeTerms: { type: Boolean, default: true },
  includeTeam: { type: Boolean, default: true },
  pdfUrl: String,
  customPages: [{
    id: String,
    imageUrl: String,
    label: String
  }],
  pageOrder: [{
    id: String,
    type: { type: String, enum: ['standard', 'custom'] },
    label: String
  }],
  createdBy: mongoose.Schema.Types.ObjectId,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Quotation', quotationSchema)