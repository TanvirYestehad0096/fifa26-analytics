export default function StatCard({ label, value, sub }) {
  return (
    <div className="bg-[#11141a] border border-white/10 rounded-2xl p-5">
      <div className="text-3xl font-medium text-white">{value}</div>
      <div className="text-xs text-white/40 mt-2">{label}</div>
      <div className="text-xs text-[#1D9E75] mt-1">{sub}</div>
    </div>
  )
}