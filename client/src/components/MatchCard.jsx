export default function MatchCard({ home, away, score, status, time, group, onClick }) {
  const isLive = status === 'live'

  return (
    <div 
      onClick={onClick}
      className={`grid grid-cols-3 items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all hover:scale-[1.02] ${
        isLive ? 'border-[#1D9E75]/30 bg-[#0d1812] hover:border-[#1D9E75]/60' : 'border-white/5 bg-[#0a0c10] hover:border-white/20'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-xs font-medium">
          {home.slice(0,3).toUpperCase()}
        </div>
        <div>
          <div className="text-sm font-medium text-white">{home}</div>
          <div className="text-xs text-white/30">{group}</div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        {isLive ? (
          <div className="bg-[#1D9E75]/10 border border-[#1D9E75]/30 rounded-lg px-4 py-2 text-xl font-medium">
            {score}
          </div>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white/20 text-sm">
            vs
          </div>
        )}
        {isLive ? (
          <div className="text-xs text-[#1D9E75] font-medium">{time}'</div>
        ) : (
          <div className="text-xs text-white/30">{time} EST</div>
        )}
      </div>

      <div className="flex items-center gap-3 flex-row-reverse">
        <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-xs font-medium">
          {away.slice(0,3).toUpperCase()}
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-white">{away}</div>
          <div className="text-xs text-white/30">{group}</div>
        </div>
      </div>
    </div>
  )
}