import express from 'express'
import Team from '../models/Team.js'

const router = express.Router()

// Get all teams
router.get('/', async (req, res) => {
  try {
    const teams = await Team.find().sort({ points: -1 })
    res.json(teams)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get a single team by ID
router.get('/:id', async (req, res) => {
  try {
    const team = await Team.findById(req.params.id)
    if (!team) return res.status(404).json({ message: 'Team not found' })
    res.json(team)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Create a new team
router.post('/', async (req, res) => {
  const team = new Team(req.body)
  try {
    const newTeam = await team.save()
    res.status(201).json(newTeam)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

export default router
