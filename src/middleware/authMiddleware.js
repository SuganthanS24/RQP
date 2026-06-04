import jwt from 'jsonwebtoken'
import { config } from '../config/env.js'

export const protect = (req, res, next) => {
  let token

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized to access this route' })
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret)
    req.userId = decoded.id
    next()
  } catch (error) {
    res.status(401).json({ message: 'Not authorized to access this route' })
  }
}