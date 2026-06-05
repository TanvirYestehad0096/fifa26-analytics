import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Team from './models/Team.js'
import Match from './models/Match.js'
import Venue from './models/Venue.js'

dotenv.config()

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err))

const seedDatabase = async () => {
  try {
    // Clear existing data
    await Team.deleteMany({})
    await Match.deleteMany({})
    await Venue.deleteMany({})

    console.log('Cleared existing data.')

    // Add Teams
    const teams = [
      { name: 'Argentina', flag: '🇦🇷', fifaRank: 1, group: 'Group A', points: 0, form: ['W', 'W', 'D'] },
      { name: 'France', flag: '🇫🇷', fifaRank: 2, group: 'Group B', points: 0, form: ['W', 'L', 'W'] },
      { name: 'Brazil', flag: '🇧🇷', fifaRank: 5, group: 'Group C', points: 0, form: ['D', 'D', 'W'] },
      { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', fifaRank: 3, group: 'Group D', points: 0, form: ['W', 'W', 'W'] },
      { name: 'Spain', flag: '🇪🇸', fifaRank: 8, group: 'Group E', points: 0, form: ['W', 'L', 'L'] },
      { name: 'Portugal', flag: '🇵🇹', fifaRank: 6, group: 'Group F', points: 0, form: ['L', 'W', 'W'] },
    ]

    const createdTeams = await Team.insertMany(teams)
    console.log(`Added ${createdTeams.length} teams.`)

    // Add Matches
    const matches = [
      { stage: 'Group Stage', group: 'Group A', homeTeam: 'Argentina', awayTeam: 'Canada', homeFlag: '🇦🇷', awayFlag: '🇨🇦', date: new Date('2026-06-11T20:00:00Z'), venue: 'Azteca Stadium', city: 'Mexico City', status: 'upcoming' },
      { stage: 'Group Stage', group: 'Group B', homeTeam: 'France', awayTeam: 'Australia', homeFlag: '🇫🇷', awayFlag: '🇦🇺', date: new Date('2026-06-12T15:00:00Z'), venue: 'MetLife Stadium', city: 'New York/New Jersey', status: 'upcoming' },
      { stage: 'Round of 16', homeTeam: 'Brazil', awayTeam: 'Spain', homeFlag: '🇧🇷', awayFlag: '🇪🇸', date: new Date('2026-06-28T18:00:00Z'), venue: 'AT&T Stadium', city: 'Dallas', status: 'upcoming' },
    ]
    
    const createdMatches = await Match.insertMany(matches)
    console.log(`Added ${createdMatches.length} matches.`)

    // Add Venues
    const venues = [
      { name: 'Azteca Stadium', city: 'Mexico City', country: 'Mexico', capacity: 83264 },
      { name: 'MetLife Stadium', city: 'New York/New Jersey', country: 'USA', capacity: 82500 },
      { name: 'AT&T Stadium', city: 'Dallas', country: 'USA', capacity: 80000 },
      { name: 'BMO Field', city: 'Toronto', country: 'Canada', capacity: 30000 },
    ]

    const createdVenues = await Venue.insertMany(venues)
    console.log(`Added ${createdVenues.length} venues.`)

    console.log('Database seeded successfully!')
    process.exit(0)
  } catch (err) {
    console.error('Error seeding database:', err)
    process.exit(1)
  }
}

seedDatabase()
