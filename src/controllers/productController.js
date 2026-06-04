import Product from '../models/Product.js'

export const createProduct = async (req, res, next) => {
  try {
    const productData = { ...req.body }
    
    if (req.file) {
      productData.productImage = `/uploads/${req.file.filename}`
    }

    const product = await Product.create(productData)
    res.status(201).json(product)
  } catch (error) {
    next(error)
  }
}

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({ active: true }).sort({ createdAt: -1 })
    res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}

export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.status(200).json(product)
  } catch (error) {
    next(error)
  }
}

export const updateProduct = async (req, res, next) => {
  try {
    const productData = { ...req.body }
    
    if (req.file) {
      productData.productImage = `/uploads/${req.file.filename}`
    }

    const product = await Product.findByIdAndUpdate(req.params.id, productData, {
      new: true,
      runValidators: true
    })

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.status(200).json(product)
  } catch (error) {
    next(error)
  }
}

export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, { active: false }, { new: true })

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.status(200).json({ message: 'Product deleted successfully' })
  } catch (error) {
    next(error)
  }
}