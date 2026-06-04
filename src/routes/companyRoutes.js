import express from 'express'
import {
  getCompanyDetails,
  updateCompanyDetails,
  getBankDetails,
  updateBankDetails,
  getTerms,
  updateTerms,
  getTeamMembers,
  addTeamMember,
  updateTeamMember,
  deleteTeamMember
} from '../controllers/companyController.js'
import { protect } from '../middleware/authMiddleware.js'
import { upload } from '../middleware/uploadMiddleware.js'

const router = express.Router()

router.use(protect)

// Company
router.get('/company', getCompanyDetails)
router.put('/company', upload.single('logo'), updateCompanyDetails)

// Bank Details
router.get('/bank-details', getBankDetails)
router.put('/bank-details', updateBankDetails)

// Terms
router.get('/terms', getTerms)
router.put('/terms', updateTerms)

// Team
router.get('/team', getTeamMembers)
router.post('/team', upload.single('photo'), addTeamMember)
router.put('/team/:id', upload.single('photo'), updateTeamMember)
router.delete('/team/:id', deleteTeamMember)

export default router