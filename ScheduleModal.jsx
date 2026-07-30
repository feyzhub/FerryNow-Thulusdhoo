import React, { useState, useMemo } from 'react';

const ScheduleModal = ({ operator, isFriday, onClose }) => {
  if (!operator) return null;
  
  const [filterRoute, setFilterRoute] = useState('ALL');
  const rawSchedule = isFriday ? operator.fridaySchedule : operator.regularSchedule;

  const modalSchedule = useMemo(() => {
    if (filterRoute === 'ALL') return rawSchedule;
    return rawSchedule.filter((item) => item.route === filterRoute);
  }, [rawSchedule, filterRoute]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-md max-h-[90vh] flex flex-col bg-[#131d35] rounded-3xl border border-slate-700/60 shadow-2xl overflow-hidden text-white">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 bg-[#0f172a] flex items-start justify-between">
          <div>
            <h2 className="text-xl font-black text-white">{operator.name}</h2>
            <p className="text-xs text-slate-400 mt-0.5">{operator.description}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4">
          
          {/* Fares & Booking Info */}
          <div className="grid grid-cols-2 gap-2 bg-[#0a0f1d] p-3 rounded-2xl border border-slate-800/80 text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">One Way</span>
              <span className="font-bold text-emerald-400 text-sm">{operator.fareOneWay}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Roundtrip</span>
              <span className="font-bold text-cyan-400 text-sm">{operator.fareRoundTrip}</span>
            </div>
          </div>

          {/* Contacts / Links */}
          <div className="space-y-1.5 bg-[#0a0f1d] p-3 rounded-2xl border border-slate-800/80 text-xs">
            <div>
              <span className="text-slate-400 font-medium">Booking Contacts: </span>
              <span className="font-bold text-slate-200">{operator.booking.join(" / ")}</span>
            </div>
            {operator.website && (
              <div>
                <span className="text-slate-400 font-medium">Website: </span>
                <a href={`https://${operator.website}`} target="_blank" rel="noreferrer" className="text-[#00a3e0] underline font-medium">
                  {operator.website}
                </a>
              </div>
            )}
            {operator.email && (
              <div>
                <span className="text-slate-400 font-medium">Email: </span>
                <span className="text-slate-200 font-medium">{operator.email}</span>
              </div>
            )}
          </div>

          {/* Route Filter Tabs */}
          <div className="flex gap-1 bg-[#0a0f1d] p-1 rounded-xl border border-slate-800 text-[11px] font-bold">
            <button
              onClick={() => setFilterRoute('ALL')}
              className={`flex-1 py-1.5 rounded-lg transition-colors ${filterRoute === 'ALL' ? 'bg-[#00a3e0] text-white' : 'text-slate-400 hover:text-white'}`}
            >
              All Routes
            </button>
            <button
              onClick={() => setFilterRoute('MALE_TO_THULUSDHOO')}
              className={`flex-1 py-1.5 rounded-lg transition-colors ${filterRoute === 'MALE_TO_THULUSDHOO' ? 'bg-[#00a3e0] text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Malé → Thulus
            </button>
            <button
              onClick={() => setFilterRoute('THULUSDHOO_TO_MALE')}
              className={`flex-1 py-1.5 rounded-lg transition-colors ${filterRoute === 'THULUSDHOO_TO_MALE' ? 'bg-[#00a3e0] text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Thulus → Malé
            </button>
          </div>

          {/* Timetable List */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-400">
              <span>Operator Schedule</span>
              {isFriday && <span className="text-amber-400 font-semibold">(Friday Timetable)</span>}
            </div>

            {modalSchedule && modalSchedule.length > 0 ? (
              modalSchedule.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 rounded-xl bg-[#0a0f1d]/60 border border-slate-800">
                  <span className="text-sm font-bold text-white">{item.time}</span>
                  <span className="text-xs font-semibold text-slate-400">{item.departure} → {item.destination}</span>
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-500 py-4 text-center">No departures for this route.</p>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0f172a] border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-[#00a3e0] rounded-xl hover:bg-[#008ec3] transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default ScheduleModal;
