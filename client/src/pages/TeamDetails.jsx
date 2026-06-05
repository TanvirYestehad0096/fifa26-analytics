import { useParams, useNavigate } from 'react-router-dom'

export default function TeamDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  // Mock data for the specific team
  const team = {
    name: 'Argentina',
    flag: '🇦🇷',
    manager: 'Lionel Scaloni',
    captain: 'Lionel Messi',
    confederation: 'CONMEBOL',
    worldCups: 3,
    group: 'Group B',
    form: ['W', 'D', 'W', 'W', 'W'],
    squad: [
      { num: 23, name: 'E. Martínez', pos: 'GK', club: 'Aston Villa' },
      { num: 1, name: 'F. Armani', pos: 'GK', club: 'River Plate' },
      { num: 13, name: 'C. Romero', pos: 'DEF', club: 'Tottenham' },
      { num: 19, name: 'N. Otamendi', pos: 'DEF', club: 'Benfica' },
      { num: 26, name: 'N. Molina', pos: 'DEF', club: 'Atlético Madrid' },
      { num: 7, name: 'R. De Paul', pos: 'MID', club: 'Atlético Madrid' },
      { num: 20, name: 'A. Mac Allister', pos: 'MID', club: 'Liverpool' },
      { num: 24, name: 'E. Fernández', pos: 'MID', club: 'Chelsea' },
      { num: 10, name: 'L. Messi', pos: 'FWD', club: 'Inter Miami' },
      { num: 9, name: 'J. Álvarez', pos: 'FWD', club: 'Man City' },
      { num: 11, name: 'A. Di María', pos: 'FWD', club: 'Benfica' },
    ]
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
                ⭐ {team.worldCups} Titles
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-6 max-w-md">
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Manager</p>
                <p className="text-sm text-white/90 font-medium">{team.manager}</p>
              </div>
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Captain</p>
                <p className="text-sm text-white/90 font-medium">{team.captain}</p>
              </div>
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Recent Form</p>
                <div className="flex gap-1 mt-1">
                  {team.form.map((res, i) => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.squad.map((player, i) => (
            <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors cursor-default">
              <div className="w-10 h-10 flex items-center justify-center bg-[#11141a] rounded-lg border border-white/10 text-[#1D9E75] font-bold">
                {player.num}
              </div>
              <div>
                <p className="text-sm font-medium text-white/90">{player.name}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] bg-white/10 text-white/60 px-1.5 py-0.5 rounded uppercase">{player.pos}</span>
                  <span className="text-xs text-white/40">{player.club}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
