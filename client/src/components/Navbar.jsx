export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#1D9E75] rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">F</span>
        </div>
        <span className="font-medium text-white">FIFA 26 Analytics</span>
        <span className="text-xs bg-[#1D9E75]/20 text-[#1D9E75] border border-[#1D9E75]/50 px-2 py-0.5 rounded-full">
          LIVE
        </span>
      </div>
      <div className="flex gap-6 text-sm text-white/40">
        <span className="text-white font-medium border-b border-[#1D9E75] pb-0.5 cursor-pointer">Dashboard</span>
        <span className="cursor-pointer hover:text-white">Bracket</span>
        <span className="cursor-pointer hover:text-white">Teams</span>
        <span className="cursor-pointer hover:text-white">Venues</span>
      </div>
    </nav>
  )
}