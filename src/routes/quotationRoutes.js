import express from 'express'
import {
  createQuotation,
  getAllQuotations,
  getQuotationById,
  updateQuotation,
  deleteQuotation,
  downloadPdf,
  generatePdf,
  getPincode,
  uploadCustomPage,
  updatePageOrder
} from '../controllers/quotationController.js'
import { protect } from '../middleware/authMiddleware.js'
import { upload } from '../middleware/uploadMiddleware.js'

const router = express.Router()

router.use(protect)

router.get('/pincode/:pincode', getPincode)
router.post('/create', createQuotation)
router.get('/', getAllQuotations)
router.get('/:id', getQuotationById)
router.put('/:id', updateQuotation)
router.delete('/:id', deleteQuotation)
router.post('/:id/generate-pdf', generatePdf)
router.get('/:id/download', downloadPdf)
router.post('/:id/pages', upload.single('customPageImage'), uploadCustomPage)
router.put('/:id/pages/order', updatePageOrder)

export default router