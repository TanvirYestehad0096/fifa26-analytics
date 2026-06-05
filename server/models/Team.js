import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  flag: { type: String },
  fifaRank: { type: Number },
  group: { type: String },
  coach: { type: String },
  confederation: { type: String },
  players: [
    {
      name: String,
      position: String,
      number: Number,
      club: String,
      age: Number,
    }
  ],
  stats: {
    played: { type: Number, default: 0 },
    won: { type: Number, default: 0 },
    drawn: { type: Number, default: 0 },
    lost: { type: Number, default: 0 },
    goalsFor: { type: Number, default: 0 },
    goalsAgainst: { type: Number, default: 0 },
    points: { type: Number, default: 0 },
  }
}, { timestamps: true })

export default mongoose.model('Team', teamSchema)
