export default function LatestNews() {
  const news = [
    { title: 'New Offside Technology Debuts with Mixed Reactions', time: '2 hours ago', category: 'Technology', image: '🤖' },
    { title: 'MetLife Stadium Ready for the Final Match', time: '5 hours ago', category: 'Venues', image: '🏟️' },
    { title: 'Record Attendance Expected for USA vs Mexico', time: '8 hours ago', category: 'Milestone', image: '📈' },
  ]

  return (
    <div className="bg-[#11141a] border border-white/10 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-white/30 tracking-widest">LATEST UPDATES</p>
        <button className="text-xs text-[#1D9E75] hover:text-white transition-colors">See All News</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {news.map((item, i) => (
          <div key={i} className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/5 hover:border-[#1D9E75]/40 transition-all cursor-pointer h-full p-4 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all text-6xl group-hover:-rotate-12">
              {item.image}
            </div>
            
            <div className="mb-8">
              <span className="inline-block px-2 py-1 rounded bg-[#1D9E75]/20 text-[#1D9E75] text-[10px] font-bold uppercase tracking-wider mb-2 border border-[#1D9E75]/20">
                {item.category}
              </span>
              <h3 className="text-sm font-medium text-white/90 group-hover:text-white leading-relaxed">
                {item.title}
              </h3>
            </div>
            
            <div className="text-xs text-white/30 flex items-center gap-1.5 mt-auto">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
              {item.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
