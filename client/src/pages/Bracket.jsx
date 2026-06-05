import { useState, useEffect } from 'react'

export default function Bracket() {
  const [rounds, setRounds] = useState([
    {
      name: 'Round of 16',
      matches: [
        { t1: 'TBD', s1: null, t2: 'TBD', s2: null },
        { t1: 'TBD', s1: null, t2: 'TBD', s2: null },
        { t1: 'TBD', s1: null, t2: 'TBD', s2: null },
        { t1: 'TBD', s1: null, t2: 'TBD', s2: null },
      ]
    },
    {
      name: 'Quarter-Finals',
      matches: [
        { t1: 'TBD', s1: null, t2: 'TBD', s2: null },
        { t1: 'TBD', s1: null, t2: 'TBD', s2: null },
      ]
    },
    {
      name: 'Semi-Finals',
      matches: [
        { t1: 'TBD', s1: null, t2: 'TBD', s2: null },
      ]
    },
    {
      name: 'Final',
      matches: [
        { t1: 'TBD', s1: null, t2: 'TBD', s2: null },
      ]
    }
  ])

  useEffect(() => {
    fetch('http://localhost:5000/api/matches')
      .then(res => res.json())
      .then(data => {
        // Group matches by stage
        const ro16 = data.filter(m => m.stage === 'Round of 16')
        
        // Update the state with actual matches if they exist
        setRounds(prev => {
          const updated = [...prev]
          if (ro16.length > 0) {
            const mappedRo16 = ro16.map(m => ({
              t1: m.homeTeam, s1: m.homeScore,
              t2: m.awayTeam, s2: m.awayScore,
              winner: m.homeScore > m.awayScore ? m.homeTeam : m.homeScore < m.awayScore ? m.awayTeam : null
            }))
            // Fill remaining slots
            while (mappedRo16.length < 4) mappedRo16.push({ t1: 'TBD', s1: null, t2: 'TBD', s2: null })
            updated[0].matches = mappedRo16
          }
          return updated
        })
      })
      .catch(err => console.error('Failed to fetch bracket matches:', err))
  }, [])

  return (
    <div className="p-6 max-w-none w-full h-full flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-white mb-1">Tournament Bracket</h1>
        <p className="text-sm text-white/40">Knockout Stage Path to Glory</p>
      </div>

      <div className="flex-grow overflow-x-auto pb-10">
        <div className="flex min-w-max gap-12 px-4 h-[600px] items-center">
          {rounds.map((round, rIndex) => (
            <div key={rIndex} className="flex flex-col gap-10 w-64 h-full justify-around relative">
              <div className="absolute top-0 w-full text-center text-sm font-medium text-[#1D9E75] uppercase tracking-widest bg-[#1D9E75]/10 py-2 rounded-lg border border-[#1D9E75]/20">
                {round.name}
              </div>
              
              <div className="flex flex-col justify-around h-full pt-16">
                {round.matches.map((match, mIndex) => (
                  <div key={mIndex} className="relative group">
                    <div className="bg-[#11141a] border border-white/10 rounded-xl overflow-hidden shadow-lg transition-all hover:border-[#1D9E75]/50 hover:shadow-[#1D9E75]/10">
                      <div className={`flex justify-between px-4 py-3 border-b border-white/5 ${match.winner === match.t1 ? 'bg-white/5' : ''}`}>
                        <span className={`font-medium ${match.winner === match.t1 ? 'text-white' : 'text-white/60'}`}>{match.t1}</span>
                        <span className={`font-bold ${match.winner === match.t1 ? 'text-[#1D9E75]' : 'text-white/40'}`}>{match.s1 !== null ? match.s1 : '-'}</span>
                      </div>
                      <div className={`flex justify-between px-4 py-3 ${match.winner === match.t2 ? 'bg-white/5' : ''}`}>
                        <span className={`font-medium ${match.winner === match.t2 ? 'text-white' : 'text-white/60'}`}>{match.t2}</span>
                        <span className={`font-bold ${match.winner === match.t2 ? 'text-[#1D9E75]' : 'text-white/40'}`}>{match.s2 !== null ? match.s2 : '-'}</span>
                      </div>
                    </div>

                    {/* Connecting lines */}
                    {rIndex < rounds.length - 1 && (
                      <div className="absolute top-1/2 -right-12 w-12 h-px bg-white/10 group-hover:bg-[#1D9E75]/50 transition-colors z-0"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
