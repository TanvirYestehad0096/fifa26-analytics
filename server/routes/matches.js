import express from 'express'
import Match from '../models/Match.js'

const router = express.Router()

// Get all matches
router.get('/', async (req, res) => {
  try {
    const matches = await Match.find().sort({ date: 1 })
    res.json(matches)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get matches by stage
router.get('/stage/:stage', async (req, res) => {
  try {
    const matches = await Match.find({ stage: req.params.stage }).sort({ date: 1 })
    res.json(matches)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Create a match
router.post('/', async (req, res) => {
  const match = new Match(req.body)
  try {
    const newMatch = await match.save()
    res.status(201).json(newMatch)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

export default router
