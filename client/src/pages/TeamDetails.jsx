import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { API_URL } from '../config'

export default function TeamDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [team, setTeam] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/teams/${id}`)
      .then(res => res.json())
      .then(data => {
        setTeam(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch team details:', err)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <div className="p-6 text-white/50">Loading team details...</div>
  }

  if (!team) {
    return <div className="p-6 text-white/50">Team not found</div>
  }

  return (
    <div className="p-6 max-w-none w-full">
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
      >
        ← Back to Teams
      </button>

      {/* Hero Section */}
      <div className="relative bg-[#11141a] border border-white/10 rounded-3xl overflow-hidden p-8 mb-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1D9E75]/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="text-9xl filter drop-shadow-2xl">{team.flag}</div>
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-4xl font-bold text-white mb-2">{team.name}</h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              <span className="bg-[#1D9E75]/20 text-[#1D9E75] px-3 py-1 rounded-full text-xs font-medium border border-[#1D9E75]/30">
                {team.confederation}
              </span>
              <span className="bg-white/5 text-white/60 px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                {team.group}
              </span>
              <span className="bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-xs font-medium border border-[#FFD700]/30 flex items-center gap-1">
                ⭐ {team.fifaRank ? `FIFA Rank: ${team.fifaRank}` : 'Unranked'}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-6 max-w-md">
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Manager</p>
                <p className="text-sm text-white/90 font-medium">{team.coach || 'N/A'}</p>
              </div>
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Captain</p>
                <p className="text-sm text-white/90 font-medium">TBD</p>
              </div>
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Recent Form</p>
                <div className="flex gap-1 mt-1">
                  {(team.form || []).map((res, i) => (
                    <span key={i} className={`w-3 h-3 rounded-sm ${res === 'W' ? 'bg-[#1D9E75]' : res === 'D' ? 'bg-white/20' : 'bg-red-500/80'}`}></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Squad List */}
      <div>
        <h2 className="text-xl font-medium text-white mb-4">Current Squad</h2>
        {team.players && team.players.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.players.map((player, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors cursor-default">
                <div className="w-10 h-10 flex items-center justify-center bg-[#11141a] rounded-lg border border-white/10 text-[#1D9E75] font-bold">
                  {player.number || '-'}
                </div>
                <div>
                  <p className="text-sm font-medium text-white/90">{player.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] bg-white/10 text-white/60 px-1.5 py-0.5 rounded uppercase">{player.position || 'Unknown'}</span>
                    <span className="text-xs text-white/40">{player.club || 'Free Agent'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white/40 text-sm">Squad data not available yet.</p>
        )}
      </div>
    </div>
  )
}
