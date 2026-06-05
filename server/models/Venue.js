import mongoose from 'mongoose'

const venueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  capacity: { type: Number },
  surface: { type: String, default: 'Grass' },
  imageUrl: { type: String },
  matches: { type: Number, default: 0 },
}, { timestamps: true })

export default mongoose.model('Venue', venueSchema)
