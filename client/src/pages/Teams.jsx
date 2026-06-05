import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../config'

export default function Teams() {
  const navigate = useNavigate()
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/teams`)
      .then(res => res.json())
      .then(data => {
        setTeams(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch teams:', err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="p-6 max-w-none w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-medium text-white mb-1">Participating Teams</h1>
          <p className="text-sm text-white/40">Browse all 48 teams competing in the 2026 World Cup</p>
        </div>
        <div className="flex gap-3">
          <input 
            type="text" 
            placeholder="Search teams..." 
            className="bg-[#11141a] border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-[#1D9E75]/50 w-64"
          />
          <select className="bg-[#11141a] border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none appearance-none cursor-pointer">
            <option>All Groups</option>
            <option>Group A</option>
            <option>Group B</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {teams.map((team, index) => (
          <div 
            key={index} 
            onClick={() => navigate(`/teams/${team.id}`)}
            className="bg-[#11141a] border border-white/10 rounded-2xl p-5 hover:border-[#1D9E75]/40 transition-all cursor-pointer group hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl filter drop-shadow-lg">{team.flag}</div>
              <div className="bg-white/5 border border-white/5 px-2 py-1 rounded text-[10px] text-white/40 font-mono">
                FIFA #{team.fifaRank}
              </div>
            </div>
            
            <h3 className="text-lg font-medium text-white group-hover:text-[#1D9E75] transition-colors">{team.name}</h3>
            <p className="text-xs text-white/30 mt-1 mb-6">{team.group}</p>
            
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div className="flex items-center gap-1.5">
                {team.stats?.form?.map((res, i) => (
                  <span key={i} className={`w-2 h-2 rounded-full ${res === 'W' ? 'bg-[#1D9E75]' : res === 'D' ? 'bg-white/20' : 'bg-red-500/80'}`}></span>
                ))}
              </div>
              <span className="text-sm font-medium text-white/80">{team.stats?.points || 0} pts</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
