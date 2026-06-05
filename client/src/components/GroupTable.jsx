import { useState, useEffect } from 'react'

export default function GroupTable() {
  const [active, setActive] = useState('Group A')
  const [groups, setGroups] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchTeams = () => {
    fetch('http://localhost:5000/api/teams')
      .then(res => res.json())
      .then(data => {
        const grouped = {}
        data.forEach(team => {
          if (!team.group) return
          if (!grouped[team.group]) grouped[team.group] = []
          
          const stats = team.stats || {}
          const played = stats.played || 0
          const points = stats.points || 0
          const gd = (stats.goalsFor || 0) - (stats.goalsAgainst || 0)

          grouped[team.group].push({
            n: team.name,
            p: played,
            gd: gd,
            pts: points
          })
        })

        // Sort each group
        Object.keys(grouped).forEach(g => {
          grouped[g].sort((a, b) => {
            if (b.pts !== a.pts) return b.pts - a.pts
            return b.gd - a.gd
          })
        })

        setGroups(grouped)
        setLoading(false)
        if (Object.keys(grouped).length > 0 && !grouped[active]) {
          setActive(Object.keys(grouped).sort()[0])
        }
      })
      .catch(err => {
        console.error('Failed to fetch teams for group table:', err)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchTeams()
    const interval = setInterval(fetchTeams, 15000) // Poll every 15 seconds
    return () => clearInterval(interval)
  }, [active])

  if (loading) return <div className="bg-[#11141a] rounded-2xl p-5 text-white/50 text-xs">Loading groups...</div>
  if (Object.keys(groups).length === 0) return <div className="bg-[#11141a] rounded-2xl p-5 text-white/50 text-xs">No group data available</div>

  // Make sure active group exists
  const displayGroup = groups[active] || Object.values(groups)[0]

  return (
    <div className="bg-[#11141a] border border-white/10 rounded-2xl p-5">
      <p className="text-xs text-white/30 tracking-widest mb-4">GROUP STANDINGS</p>

      <div className="flex gap-2 flex-wrap mb-4">
        {Object.keys(groups).sort().map(g => (
          <button
            key={g}
            onClick={() => setActive(g)}
            className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
              active === g
                ? 'bg-[#1D9E75] text-white border-[#1D9E75]'
                : 'text-white/40 border-white/15 hover:text-white'
            }`}
          >
            {g.replace('Group ', '')}
          </button>
        ))}
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-xs text-white/30 border-b border-white/5">
            <th className="text-left py-2 px-1 font-normal">#</th>
            <th className="text-left py-2 px-1 font-normal">Team</th>
            <th className="py-2 px-1 font-normal">P</th>
            <th className="py-2 px-1 font-normal">GD</th>
            <th className="py-2 px-1 font-normal">Pts</th>
          </tr>
        </thead>
        <tbody>
          {displayGroup.map((t, i) => (
            <tr key={t.n} className={`border-b border-white/5 last:border-0 ${i < 2 ? 'border-l-2 border-l-[#1D9E75]' : ''}`}>
              <td className="py-2 px-1 text-xs text-white/25">{i + 1}</td>
              <td className="py-2 px-1 text-xs text-white/80">{t.n}</td>
              <td className="py-2 px-1 text-xs text-white/80 text-center">{t.p}</td>
              <td className="py-2 px-1 text-xs text-white/80 text-center">{t.gd > 0 ? `+${t.gd}` : t.gd}</td>
              <td className="py-2 px-1 text-xs text-[#1D9E75] font-medium text-center">{t.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-xs text-white/25 mt-3 flex items-center gap-2">
        <span className="w-2 h-2 bg-[#1D9E75] rounded-sm inline-block"></span>
        Advance to Round of 32
      </p>
    </div>
  )
}