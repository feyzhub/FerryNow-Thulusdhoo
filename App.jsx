// src/App.jsx
import React, { useState } from 'react';
import { FERRY_OPERATORS } from './data/ferrySchedules';
import { ScheduleModal } from './components/ScheduleModal';

export default function App() {
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [activeRoute, setActiveRoute] = useState('MALE_TO_THULUSDHOO'); // 'MALE_TO_THULUSDHOO' or 'THULUSDHOO_TO_MALE'

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-white flex justify-center p-4 sm:p-6 font-sans">
      <div className="w-full max-w-md space-y-6">
        
        {/* Header Section */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-extrabold tracking-tight">Thulusdhoo Ferry Finder</h1>
          <p className="text-xs text-slate-400 font-medium">Wednesday, 16:13</p>
        </div>

        {/* Direction Toggle Pills */}
        <div className="bg-[#121a2d] p-1.5 rounded-2xl border border-slate-800/80 flex gap-2">
          <button
            onClick={() => setActiveRoute('MALE_TO_THULUSDHOO')}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${
              activeRoute === 'MALE_TO_THULUSDHOO'
                ? 'bg-[#00a3e0] text-white shadow-lg shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Malé → Thulusdhoo
          </button>
          <button
            onClick={() => setActiveRoute('THULUSDHOO_TO_MALE')}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${
              activeRoute === 'THULUSDHOO_TO_MALE'
                ? 'bg-[#00a3e0] text-white shadow-lg shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Thulusdhoo → Malé
          </button>
        </div>

        {/* Next Available Ferry Spotlight Card */}
        <div className="relative overflow-hidden bg-gradient-to-b from-[#131d35] to-[#0f172a] p-6 rounded-3xl border border-slate-700/50 shadow-2xl text-center space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-[#00a3e0]/10 border border-[#00a3e0]/30 text-[#00a3e0] text-[10px] font-bold tracking-widest uppercase">
            Next Available Ferry
          </div>
          <div>
            <h3 className="text-[#00a3e0] font-semibold text-lg">River Speed</h3>
            <div className="text-5xl font-black tracking-tight text-white my-1">4:20 PM</div>
          </div>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            Departs in 7 mins
          </div>
        </div>

        {/* Ferry Operators Quick Access */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold tracking-wider text-slate-400 uppercase">
            <span>Ferry Operators</span>
            <span className="text-[10px] text-slate-500 font-normal">Tap for full schedule</span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {FERRY_OPERATORS.map((operator) => (
              <button
                key={operator.id}
                onClick={() => setSelectedOperator(operator)}
                className="p-3 bg-[#131d35] hover:bg-[#1a2744] active:scale-95 border border-slate-800 hover:border-[#00a3e0]/50 rounded-2xl transition-all text-center group flex flex-col items-center justify-center gap-1 shadow-md"
              >
                <span className="text-xs font-bold text-slate-200 group-hover:text-[#00a3e0] transition-colors truncate w-full">
                  {operator.name}
                </span>
                <span className="text-[10px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700/50">
                  {operator.fare || 'Schedule'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Roller Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold tracking-wider text-slate-400 uppercase">
            <span>Schedule Roller</span>
            <button className="text-[#00a3e0] hover:underline text-xs font-semibold">
              RECENTER
            </button>
          </div>

          <div className="space-y-2.5">
            {/* Example Schedule Roller Items matching dark UI */}
            <div className="flex items-center justify-between p-4 bg-[#131d35]/60 border border-slate-800/60 rounded-2xl opacity-60">
              <div>
                <div className="text-base font-bold text-slate-300">9:15 AM</div>
                <div className="text-xs text-slate-400">Refcool Marine</div>
              </div>
              <span className="px-3 py-1 text-[11px] font-semibold bg-slate-800/80 text-slate-400 rounded-lg border border-slate-700/50">
                Departed
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#131d35]/60 border border-slate-800/60 rounded-2xl opacity-60">
              <div>
                <div className="text-base font-bold text-slate-300">9:15 AM</div>
                <div className="text-xs text-slate-400">Tharika Express</div>
              </div>
              <span className="px-3 py-1 text-[11px] font-semibold bg-slate-800/80 text-slate-400 rounded-lg border border-slate-700/50">
                Departed
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#131d35]/60 border border-slate-800/60 rounded-2xl opacity-60">
              <div>
                <div className="text-base font-bold text-slate-300">9:20 AM</div>
                <div className="text-xs text-slate-400">River Speed</div>
              </div>
              <span className="px-3 py-1 text-[11px] font-semibold bg-slate-800/80 text-slate-400 rounded-lg border border-slate-700/50">
                Departed
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#131d35]/60 border border-slate-800/60 rounded-2xl opacity-60">
              <div>
                <div className="text-base font-bold text-slate-300">12:15 PM</div>
                <div className="text-xs text-slate-400">Tharika Express</div>
              </div>
              <span className="px-3 py-1 text-[11px] font-semibold bg-slate-800/80 text-slate-400 rounded-lg border border-slate-700/50">
                Departed
              </span>
            </div>
          </div>
        </div>

        {/* Full Schedule Modal Popup */}
        <ScheduleModal
          operator={selectedOperator}
          onClose={() => setSelectedOperator(null)}
        />

      </div>
    </div>
  );
}