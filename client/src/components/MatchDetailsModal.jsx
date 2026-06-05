export default function MatchDetailsModal({ match, onClose }) {
  if (!match) return null

  const isLive = match.status === 'live'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-[#11141a] border border-white/10 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header / Scoreboard */}
        <div className="relative p-8 border-b border-white/10 bg-gradient-to-b from-[#1D9E75]/10 to-transparent">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-colors"
          >
            ✕
          </button>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center gap-2">
              <div className="text-6xl filter drop-shadow-md">{match.homeFlag || '🇦🇷'}</div>
              <span className="text-lg font-medium text-white">{match.home}</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#1D9E75]/20 text-[#1D9E75] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-[#1D9E75]/30 mb-2">
                {isLive ? `${match.time}'` : match.status}
              </div>
              <div className="text-5xl font-bold text-white tracking-widest">
                {match.score ? match.score.replace('—', '-') : 'VS'}
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="text-6xl filter drop-shadow-md">{match.awayFlag || '🇫🇷'}</div>
              <span className="text-lg font-medium text-white">{match.away}</span>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="flex border-b border-white/10 bg-[#0a0c10]">
          <button className="flex-1 py-4 text-sm font-medium text-[#1D9E75] border-b-2 border-[#1D9E75] bg-white/5">
            Timeline
          </button>
          <button className="flex-1 py-4 text-sm font-medium text-white/40 hover:text-white transition-colors">
            Lineups
          </button>
          <button className="flex-1 py-4 text-sm font-medium text-white/40 hover:text-white transition-colors">
            Stats
          </button>
        </div>

        {/* Timeline View */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 text-right text-sm text-[#1D9E75] font-bold">23'</div>
            <div className="w-8 flex justify-center"><span className="text-xl">⚽</span></div>
            <div className="flex-1 bg-white/5 border border-white/5 rounded-lg p-3">
              <p className="text-sm font-medium text-white">Goal! {match.home}</p>
              <p className="text-xs text-white/40">L. Messi (Penalty)</p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-row-reverse">
            <div className="w-12 text-left text-sm text-[#1D9E75] font-bold">45+1'</div>
            <div className="w-8 flex justify-center"><span className="w-3 h-4 bg-yellow-400 rounded-sm"></span></div>
            <div className="flex-1 bg-white/5 border border-white/5 rounded-lg p-3 text-right">
              <p className="text-sm font-medium text-white">Yellow Card</p>
              <p className="text-xs text-white/40">A. Tchouaméni ({match.away})</p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-row-reverse">
            <div className="w-12 text-left text-sm text-[#1D9E75] font-bold">80'</div>
            <div className="w-8 flex justify-center"><span className="text-xl">⚽</span></div>
            <div className="flex-1 bg-white/5 border border-white/5 rounded-lg p-3 text-right">
              <p className="text-sm font-medium text-white">Goal! {match.away}</p>
              <p className="text-xs text-white/40">K. Mbappé (Assist: R. Kolo Muani)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
