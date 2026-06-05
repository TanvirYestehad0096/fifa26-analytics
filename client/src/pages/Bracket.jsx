export default function Bracket() {
  const rounds = [
    {
      name: 'Round of 16',
      matches: [
        { t1: 'Argentina', s1: 2, t2: 'France', s2: 1, winner: 'Argentina' },
        { t1: 'Spain', s1: 1, t2: 'England', s2: 0, winner: 'Spain' },
        { t1: 'Brazil', s1: 3, t2: 'Germany', s2: 1, winner: 'Brazil' },
        { t1: 'Portugal', s1: 2, t2: 'Netherlands', s2: 0, winner: 'Portugal' },
      ]
    },
    {
      name: 'Quarter-Finals',
      matches: [
        { t1: 'Argentina', s1: null, t2: 'Spain', s2: null },
        { t1: 'Brazil', s1: null, t2: 'Portugal', s2: null },
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
  ]

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
