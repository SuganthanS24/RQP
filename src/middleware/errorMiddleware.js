export const errorHandler = (err, req, res, next) => {
  console.error(err)

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(e => e.message)
    return res.status(400).json({ message: messages })
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    return res.status(400).json({ message: 'Duplicate field value entered' })
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: 'Invalid token' })
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({ message: 'Token expired' })
  }

  // Multer errors
  if (err.name === 'MulterError') {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ message: 'Image size is too large. Maximum allowed size is 5MB.' })
    }
    return res.status(400).json({ message: err.message })
  }

  if (err.message === 'Invalid file type') {
    return res.status(400).json({ message: 'Invalid file type. Only JPG, PNG, GIF, and WEBP images are allowed.' })
  }

  res.status(err.statusCode || 500).json({
    message: err.message || 'Server error'
  })
}

export default errorHandler