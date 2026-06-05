export default function TopScorers() {
  const scorers = [
    { name: 'K. Mbappé', team: 'France', goals: 4, assists: 1 },
    { name: 'L. Messi', team: 'Argentina', goals: 3, assists: 2 },
    { name: 'J. Bellingham', team: 'England', goals: 3, assists: 0 },
    { name: 'Vinícius Jr.', team: 'Brazil', goals: 2, assists: 3 },
    { name: 'H. Kane', team: 'England', goals: 2, assists: 1 },
  ]

  return (
    <div className="bg-[#11141a] border border-white/10 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-white/30 tracking-widest">TOP SCORERS</p>
        <button className="text-xs text-[#1D9E75] hover:text-white transition-colors">View All</button>
      </div>

      <div className="flex flex-col gap-3">
        {scorers.map((s, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:-translate-y-0.5 transition-all cursor-default">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#1D9E75]/20 text-[#1D9E75] flex items-center justify-center text-xs font-bold border border-[#1D9E75]/30">
                {i + 1}
              </div>
              <div>
                <div className="text-sm font-medium text-white">{s.name}</div>
                <div className="text-xs text-white/40">{s.team}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-right">
              <div>
                <div className="text-sm font-bold text-[#1D9E75]">{s.goals}</div>
                <div className="text-[10px] text-white/30 uppercase tracking-wide">Goals</div>
              </div>
              <div className="w-px h-6 bg-white/10"></div>
              <div>
                <div className="text-sm font-medium text-white/80">{s.assists}</div>
                <div className="text-[10px] text-white/30 uppercase tracking-wide">Asts</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
