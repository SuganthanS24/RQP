
import Company from '../models/Company.js'
import BankDetails from '../models/BankDetails.js'
import Terms from '../models/Terms.js'
import TeamMember from '../models/TeamMember.js'

export const getCompanyDetails = async (req, res, next) => {
  try {
    let company = await Company.findOne()
    
    if (!company) {
      company = await Company.create({
        companyName: 'Robomiracle Technologies Private Limited',
        address: 'Coimbatore, Tamil Nadu',
        email: 'sales@robomiracle.com',
        phone: '63794 38840'
      })
    }

    res.status(200).json(company)
  } catch (error) {
    next(error)
  }
}

export const updateCompanyDetails = async (req, res, next) => {
  try {
    const updateData = { ...req.body }
    if (req.file) {
      updateData.logo = `/uploads/${req.file.filename}`
    }

    let company = await Company.findOne()

    if (!company) {
      company = await Company.create(updateData)
    } else {
      company = await Company.findByIdAndUpdate(company._id, updateData, {
        new: true,
        runValidators: true
      })
    }

    res.status(200).json(company)
  } catch (error) {
    next(error)
  }
}

export const getBankDetails = async (req, res, next) => {
  try {
    let bank = await BankDetails.findOne()
    
    if (!bank) {
      bank = await BankDetails.create({
        accountName: 'Robomiracle Technologies Private Limited',
        accountNo: '9009999909',
        ifscCode: 'KKBK0008666',
        bankName: 'KOTAK MAHINDRA BANK',
        branch: 'COIMBATORE'
      })
    }

    res.status(200).json(bank)
  } catch (error) {
    next(error)
  }
}

export const updateBankDetails = async (req, res, next) => {
  try {
    let bank = await BankDetails.findOne()

    if (!bank) {
      bank = await BankDetails.create(req.body)
    } else {
      bank = await BankDetails.findByIdAndUpdate(bank._id, req.body, {
        new: true
      })
    }

    res.status(200).json(bank)
  } catch (error) {
    next(error)
  }
}

export const getTerms = async (req, res, next) => {
  try {
    let terms = await Terms.findOne()
    
    if (!terms) {
      terms = await Terms.create({
        title: 'Default Quotation Terms',
        points: [
          {
            heading: 'Quotation Acceptance',
            description: 'Once accepted by email or signature, the order is final and binding.'
          },
          {
            heading: 'Cancellation',
            description: 'Orders cannot be cancelled after acceptance.'
          }
        ]
      })
    }

    res.status(200).json(terms)
  } catch (error) {
    next(error)
  }
}

export const updateTerms = async (req, res, next) => {
  try {
    let terms = await Terms.findOne()

    if (!terms) {
      terms = await Terms.create(req.body)
    } else {
      terms = await Terms.findByIdAndUpdate(terms._id, req.body, {
        new: true
      })
    }

    res.status(200).json(terms)
  } catch (error) {
    next(error)
  }
}

export const getTeamMembers = async (req, res, next) => {
  try {
    const team = await TeamMember.find().sort({ order: 1 })
    res.status(200).json(team)
  } catch (error) {
    next(error)
  }
}

export const addTeamMember = async (req, res, next) => {
  try {
    const memberData = { ...req.body }
    
    if (req.file) {
      memberData.photo = `/uploads/${req.file.filename}`
    }

    const member = await TeamMember.create(memberData)
    res.status(201).json(member)
  } catch (error) {
    next(error)
  }
}

export const updateTeamMember = async (req, res, next) => {
  try {
    const memberData = { ...req.body }
    
    if (req.file) {
      memberData.photo = `/uploads/${req.file.filename}`
    }

    const member = await TeamMember.findByIdAndUpdate(req.params.id, memberData, {
      new: true
    })

    if (!member) {
      return res.status(404).json({ message: 'Team member not found' })
    }

    res.status(200).json(member)
  } catch (error) {
    next(error)
  }
}

export const deleteTeamMember = async (req, res, next) => {
  try {
    const member = await TeamMember.findByIdAndDelete(req.params.id)

    if (!member) {
      return res.status(404).json({ message: 'Team member not found' })
    }

    res.status(200).json({ message: 'Team member deleted' })
  } catch (error) {
    next(error)
  }
}