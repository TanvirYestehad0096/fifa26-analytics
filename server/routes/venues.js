import express from 'express'
import Venue from '../models/Venue.js'

const router = express.Router()

// Get all venues
router.get('/', async (req, res) => {
  try {
    const venues = await Venue.find()
    res.json(venues)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Create a venue
router.post('/', async (req, res) => {
  const venue = new Venue(req.body)
  try {
    const newVenue = await venue.save()
    res.status(201).json(newVenue)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

export default router
