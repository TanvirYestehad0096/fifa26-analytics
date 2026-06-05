import { useState } from 'react'
import StatCard from '../components/StatCard'
import MatchCard from '../components/MatchCard'
import GroupTable from '../components/GroupTable'
import TopScorers from '../components/TopScorers'
import LatestNews from '../components/LatestNews'
import MatchDetailsModal from '../components/MatchDetailsModal'

const matches = [
    { id: 1, home: 'Argentina', away: 'France', score: '2 — 1', status: 'live', time: '74', group: 'Group B', homeFlag: '🇦🇷', awayFlag: '🇫🇷' },
    { id: 2, home: 'Spain', away: 'England', score: '1 — 1', status: 'live', time: '62', group: 'Group C', homeFlag: '🇪🇸', awayFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { id: 3, home: 'Portugal', away: 'Netherlands', score: null, status: 'upcoming', time: '18:00', group: 'Group D', homeFlag: '🇵🇹', awayFlag: '🇳🇱' },
    { id: 4, home: 'USA', away: 'Mexico', score: null, status: 'upcoming', time: '21:00', group: 'Group A', homeFlag: '🇺🇸', awayFlag: '🇲🇽' },
]

export default function Dashboard() {
    const [selectedMatch, setSelectedMatch] = useState(null)

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