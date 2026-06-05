const groups = {
  A:[{n:"Brazil",p:2,gd:4,pts:6},{n:"Germany",p:2,gd:1,pts:3},{n:"Japan",p:2,gd:-2,pts:2},{n:"Morocco",p:2,gd:-3,pts:0}],
  B:[{n:"France",p:2,gd:3,pts:6},{n:"Argentina",p:2,gd:2,pts:4},{n:"Mexico",p:2,gd:-1,pts:1},{n:"Poland",p:2,gd:-4,pts:0}],
  C:[{n:"Spain",p:2,gd:3,pts:5},{n:"England",p:2,gd:1,pts:4},{n:"Croatia",p:2,gd:-1,pts:1},{n:"Senegal",p:2,gd:-3,pts:0}],
  D:[{n:"Portugal",p:2,gd:4,pts:6},{n:"Netherlands",p:2,gd:1,pts:3},{n:"Uruguay",p:2,gd:-2,pts:1},{n:"Ecuador",p:2,gd:-3,pts:0}],
  E:[{n:"Belgium",p:2,gd:2,pts:4},{n:"USA",p:2,gd:1,pts:4},{n:"Wales",p:2,gd:-1,pts:1},{n:"Iran",p:2,gd:-2,pts:0}],
  F:[{n:"Denmark",p:2,gd:3,pts:6},{n:"Tunisia",p:2,gd:0,pts:3},{n:"Australia",p:2,gd:-1,pts:1},{n:"S. Arabia",p:2,gd:-2,pts:0}],
}

import { useState } from 'react'

export default function GroupTable() {
  const [active, setActive] = useState('A')

  return (
    <div className="bg-[#11141a] border border-white/10 rounded-2xl p-5">
      <p className="text-xs text-white/30 tracking-widest mb-4">GROUP STANDINGS</p>

      <div className="flex gap-2 flex-wrap mb-4">
        {Object.keys(groups).map(g => (
          <button
            key={g}
            onClick={() => setActive(g)}
            className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
              active === g
                ? 'bg-[#1D9E75] text-white border-[#1D9E75]'
                : 'text-white/40 border-white/15 hover:text-white'
            }`}
          >
            {g}
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
          {groups[active].map((t, i) => (
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