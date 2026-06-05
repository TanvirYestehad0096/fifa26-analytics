import Navbar from '../components/Navbar'
import StatCard from '../components/StatCard'
import MatchCard from '../components/MatchCard'
import GroupTable from '../components/GroupTable'
import TopScorers from '../components/TopScorers'
import LatestNews from '../components/LatestNews'

const matches = [
    { home: 'Argentina', away: 'France', score: '2 — 1', status: 'live', time: '74', group: 'Group B' },
    { home: 'Spain', away: 'England', score: '1 — 1', status: 'live', time: '62', group: 'Group C' },
    { home: 'Portugal', away: 'Netherlands', score: null, status: 'upcoming', time: '18:00', group: 'Group D' },
    { home: 'USA', away: 'Mexico', score: null, status: 'upcoming', time: '21:00', group: 'Group A' },
]

export default function Dashboard() {
    return (
        <div className="bg-[#0a0c10] min-h-screen text-white pb-10">
            <Navbar />
            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-none w-full">

                <div className="lg:col-span-2 flex flex-col gap-5">
                    <div className="bg-[#11141a] border border-white/10 rounded-2xl p-5">
                        <p className="text-xs text-white/30 tracking-widest mb-4">TODAY'S MATCHES</p>
                        <div className="flex flex-col gap-3">
                            {matches.map((m, i) => (
                                <MatchCard key={i} {...m} />
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

            </div>
        </div>
    )
}