import { useState, useEffect } from 'react'
import StatCard from '../components/StatCard'
import MatchCard from '../components/MatchCard'
import GroupTable from '../components/GroupTable'
import TopScorers from '../components/TopScorers'
import LatestNews from '../components/LatestNews'
import MatchDetailsModal from '../components/MatchDetailsModal'

export default function Dashboard() {
    const [selectedMatch, setSelectedMatch] = useState(null)
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchMatches = () => {
        fetch('http://localhost:5000/api/matches')
            .then(res => res.json())
            .then(data => {
                const formatted = data.map(m => ({
                    id: m._id,
                    home: m.homeTeam,
                    away: m.awayTeam,
                    score: m.homeScore !== null ? `${m.homeScore} — ${m.awayScore}` : null,
                    status: m.status,
                    time: m.status === 'upcoming' 
                      ? new Date(m.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
                      : 'Live',
                    group: m.group || m.stage,
                    homeFlag: m.homeFlag,
                    awayFlag: m.awayFlag
                }))
                setMatches(formatted.slice(0, 4)) // Show only first 4
                setLoading(false)
            })
            .catch(err => {
                console.error('Failed to fetch matches:', err)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchMatches() // Initial fetch
        const interval = setInterval(fetchMatches, 10000) // Poll every 10 seconds
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-none w-full relative">
            <div className="lg:col-span-2 flex flex-col gap-5">
                <div className="bg-[#11141a] border border-white/10 rounded-2xl p-5">
                    <p className="text-xs text-white/30 tracking-widest mb-4">TODAY'S MATCHES</p>
                    <div className="flex flex-col gap-3">
                        {matches.map((m) => (
                            <MatchCard key={m.id} {...m} onClick={() => setSelectedMatch(m)} />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <StatCard label="Total teams" value="48" sub="6 groups of 8" />
                    <StatCard label="Goals scored" value="51" sub="2.8 per match" />
                    <StatCard label="Matches played" value="18" sub="of 104 total" />
                </div>

                <LatestNews />
            </div>

            <div className="flex flex-col gap-5">
                <GroupTable />
                <TopScorers />
            </div>

            {selectedMatch && (
                <MatchDetailsModal 
                    match={selectedMatch} 
                    onClose={() => setSelectedMatch(null)} 
                />
            )}
        </div>
    )
}