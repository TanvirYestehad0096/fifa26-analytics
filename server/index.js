import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB successfully'))
  .catch((err) => console.error('❌ MongoDB connection error:', err.message))

// Routes
import teamRoutes from './routes/teams.js'
import matchRoutes from './routes/matches.js'
import venueRoutes from './routes/venues.js'

// Auto Update Service
import { startCronJobs } from './cron/autoUpdate.js'
startCronJobs()

app.use('/api/teams', teamRoutes)
app.use('/api/matches', matchRoutes)
app.use('/api/venues', venueRoutes)

// Basic Route
app.get('/', (req, res) => {
  res.send('FIFA 26 Analytics API is running...')
})

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
