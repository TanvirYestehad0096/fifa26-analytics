import mongoose from 'mongoose'

const matchSchema = new mongoose.Schema({
  stage: { type: String, required: true }, // 'Group Stage', 'Round of 16', 'Quarterfinal', 'Semifinal', 'Final'
  group: { type: String }, // only for group stage
  homeTeam: { type: String, required: true },
  awayTeam: { type: String, required: true },
  homeFlag: { type: String },
  awayFlag: { type: String },
  homeScore: { type: Number, default: null },
  awayScore: { type: Number, default: null },
  date: { type: Date },
  venue: { type: String },
  city: { type: String },
  status: { type: String, enum: ['upcoming', 'live', 'completed'], default: 'upcoming' },
  matchday: { type: Number },
}, { timestamps: true })

export default mongoose.model('Match', matchSchema)
