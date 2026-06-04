import express from 'express'
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js'
import { protect } from '../middleware/authMiddleware.js'
import { upload } from '../middleware/uploadMiddleware.js'

const router = express.Router()

router.use(protect)

router.post('/', upload.single('productImage'), createProduct)
router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.put('/:id', upload.single('productImage'), updateProduct)
router.delete('/:id', deleteProduct)

export default router