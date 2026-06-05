import { useState, useEffect } from 'react'

export default function Venues() {
  const [venues, setVenues] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/api/venues')
      .then(res => res.json())
      .then(data => {
        // Add emoji placeholders for image if none exists
        const withImages = data.map(v => ({
          ...v,
          image: v.imageUrl || '🏟️',
          isFinal: v.name.includes('MetLife') || v.name.includes('Azteca') // Simple logic to flag final hosts
        }))
        setVenues(withImages)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch venues:', err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="p-6 max-w-none w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-white mb-1">Tournament Venues</h1>
        <p className="text-sm text-white/40">16 cities across USA, Mexico, and Canada</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {venues.map((venue, index) => (
          <div key={index} className="group relative overflow-hidden rounded-2xl bg-[#11141a] border border-white/10 hover:border-[#1D9E75]/40 transition-all cursor-pointer h-64 flex flex-col justify-end p-5">
            {/* Background pattern/gradient to simulate an image placeholder since we don't have real images */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/80 to-transparent z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 text-9xl">
              {venue.image}
            </div>
            
            <div className="relative z-20">
              {venue.isFinal && (
                <span className="inline-block px-2 py-1 bg-[#1D9E75]/20 text-[#1D9E75] text-[10px] uppercase font-bold tracking-widest rounded border border-[#1D9E75]/30 mb-3">
                  Final Host
                </span>
              )}
              
              <h3 className="text-lg font-medium text-white mb-1">{venue.name}</h3>
              <p className="text-xs text-white/50 mb-4">{venue.city}</p>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-3">
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wide">Capacity</div>
                  <div className="text-sm font-medium text-white/80">{venue.capacity}</div>
                </div>
                <div className="w-px h-6 bg-white/10"></div>
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wide">Matches</div>
                  <div className="text-sm font-medium text-[#1D9E75]">{venue.matches}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
