import React, { useState, useEffect, useMemo } from 'react';
import { FERRY_OPERATORS, getDepartureStatus } from './ferrySchedules';
import ScheduleModal from './ScheduleModal';

function App() {
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [activeRoute, setActiveRoute] = useState('MALE_TO_THULUSDHOO');
  const [now, setNow] = useState(new Date());

  // Live Timer (1-second tick for real-time countdown)
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Automatic Friday Schedule Detection
  const isFriday = now.getDay() === 5;

  const formattedDateStr = now.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  // Assemble full daily schedule based on current direction and day type
  const fullDailySchedule = useMemo(() => {
    let trips = [];
    FERRY_OPERATORS.forEach((operator) => {
      const scheduleList = isFriday ? operator.fridaySchedule : operator.regularSchedule;
      scheduleList.forEach((trip) => {
        trips.push({
          ...trip,
          operatorName: operator.name,
        });
      });
    });

    const filtered = trips.filter((t) => t.route === activeRoute);
    return filtered.sort((a, b) => a.time24.localeCompare(b.time24));
  }, [activeRoute, isFriday]);

  // Calculate status for each trip (Departed, Next Ferry, Upcoming)
  const nextFerryTracker = { found: false };
  const processedSchedule = fullDailySchedule.map((item) => {
    const { status, isNext, style } = getDepartureStatus(item.time24, nextFerryTracker, now);
    return { ...item, status, isNext, style };
  });

  // Next Available Ferry details
  const nextAvailableFerry = processedSchedule.find((item) => item.isNext);

  // Real-time Countdown calculation
  const countdownString = useMemo(() => {
    if (!nextAvailableFerry) return null;
    const [hours, minutes] = nextAvailableFerry.time24.split(':').map(Number);
    const target = new Date(now);
    target.setHours(hours, minutes, 0, 0);

    const diffMs = target - now;
    if (diffMs <= 0) return "Departing Now";

    const diffMins = Math.floor(diffMs / 60000);
    const hrs = Math.floor(diffMins / 60);
    const mins = diffMins % 60;
    const secs = Math.floor((diffMs % 60000) / 1000);

    if (hrs > 0) {
      return `Departs in ${hrs}h ${mins}m ${secs}s`;
    }
    return `Departs in ${mins}m ${secs}s`;
  }, [nextAvailableFerry, now]);

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-white flex justify-center p-4 sm:p-6 font-sans">
      <div className="w-full max-w-md space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-extrabold tracking-tight">Thulusdhoo Ferry Finder</h1>
          <p className="text-xs text-slate-400 font-medium">
            {formattedDateStr} {isFriday && <span className="text-amber-400 font-bold ml-1">• Friday Timetable</span>}
          </p>
        </div>

        {/* Direction Tabs */}
        <div className="bg-[#121a2d] p-1.5 rounded-2xl border border-slate-800/80 flex gap-2">
          <button
            onClick={() => setActiveRoute('MALE_TO_THULUSDHOO')}
            className={`flex-1 py-3 text-xs font-bold rounded-xl transition-all ${
              activeRoute === 'MALE_TO_THULUSDHOO'
                ? 'bg-[#00a3e0] text-white shadow-lg shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Malé → Thulusdhoo
          </button>
          <button
            onClick={() => setActiveRoute('THULUSDHOO_TO_MALE')}
            className={`flex-1 py-3 text-xs font-bold rounded-xl transition-all ${
              activeRoute === 'THULUSDHOO_TO_MALE'
                ? 'bg-[#00a3e0] text-white shadow-lg shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Thulusdhoo → Malé
          </button>
        </div>

        {/* Next Available Ferry Card */}
        <div className="relative overflow-hidden bg-gradient-to-b from-[#131d35] to-[#0f172a] p-6 rounded-3xl border border-slate-700/50 shadow-2xl text-center space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-[#00a3e0]/10 border border-[#00a3e0]/30 text-[#00a3e0] text-[10px] font-bold tracking-widest uppercase">
            Next Available Ferry
          </div>
          <div>
            <h3 className="text-[#00a3e0] font-semibold text-lg">
              {nextAvailableFerry ? nextAvailableFerry.operatorName : "No More Ferries Today"}
            </h3>
            <div className="text-5xl font-black tracking-tight text-white my-1">
              {nextAvailableFerry ? nextAvailableFerry.time : "--:--"}
            </div>
          </div>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            {countdownString || "Service Complete for Today"}
          </div>
        </div>

        {/* Operator Badges */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold tracking-wider text-slate-400 uppercase">
            <span>Ferry Operators</span>
            <span className="text-[10px] text-slate-500 font-normal">Tap for details & fares</span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {FERRY_OPERATORS.map((operator) => (
              <button
                key={operator.id}
                onClick={() => setSelectedOperator(operator)}
                className="p-3 bg-[#131d35] hover:bg-[#1a2744] active:scale-95 border border-slate-800 hover:border-[#00a3e0]/60 rounded-2xl transition-all text-center group flex flex-col items-center justify-center gap-1.5 shadow-md"
              >
                <span className="text-xs font-bold text-slate-200 group-hover:text-[#00a3e0] transition-colors truncate w-full">
                  {operator.name}
                </span>
                <span className="text-[10px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700/50">
                  {operator.fareOneWay}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* FULL DAILY SCHEDULE LIST */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold tracking-wider text-slate-400 uppercase">
            <span>Today's Full Schedule</span>
            <span className="text-[10px] text-[#00a3e0] font-medium">
              {activeRoute === 'MALE_TO_THULUSDHOO' ? 'Malé → Thulusdhoo' : 'Thulusdhoo → Malé'}
            </span>
          </div>

          <div className="space-y-2.5">
            {processedSchedule.length > 0 ? (
              processedSchedule.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between p-4 border rounded-2xl transition-all ${
                    item.status === 'Departed'
                      ? 'bg-[#131d35]/30 border-slate-800/40 opacity-50'
                      : item.isNext
                      ? 'bg-[#131d35] border-[#00a3e0] shadow-lg shadow-cyan-500/10 scale-[1.01]'
                      : 'bg-[#131d35] border-slate-800/80'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-base font-bold ${item.status === 'Departed' ? 'text-slate-400' : 'text-white'}`}>
                        {item.time}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                      <span className="font-medium text-slate-300">{item.operatorName}</span>
                      <span className="text-slate-600">•</span>
                      <span>{item.departure} → {item.destination}</span>
                    </div>
                  </div>

                  <span className={`px-3 py-1 text-[11px] font-semibold rounded-lg border ${item.style}`}>
                    {item.status}
                  </span>
                </div>
              ))
            ) : (
              <div className="p-8 text-center bg-[#131d35]/40 rounded-2xl border border-slate-800">
                <p className="text-xs text-slate-400">No ferries scheduled for this direction today.</p>
              </div>
            )}
          </div>
        </div>

        {/* Operator Modal */}
        <ScheduleModal
          operator={selectedOperator}
          isFriday={isFriday}
          onClose={() => setSelectedOperator(null)}
        />

      </div>
    </div>
  );
}

export default App;
