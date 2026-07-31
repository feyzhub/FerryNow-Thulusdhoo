import React, { useState, useEffect, useMemo } from 'react';
import { FERRY_OPERATORS, getDepartureStatus } from './ferryData.js';
import ScheduleModal from './ScheduleModal.jsx';

// Helper to map WMO Weather Codes from Open-Meteo to readable text and warning status
const decodeWeatherCode = (code) => {
  // WMO Codes: https://open-meteo.com/en/docs
  switch (code) {
    case 0:
      return { condition: 'Clear', isBadWeather: false };
    case 1:
    case 2:
    case 3:
      return { condition: 'Partly Cloudy', isBadWeather: false };
    case 45:
    case 48:
      return { condition: 'Foggy', isBadWeather: false };
    case 51:
    case 53:
    case 55:
      return { condition: 'Drizzle', isBadWeather: true };
    case 61:
    case 63:
    case 65:
      return { condition: 'Rain', isBadWeather: true };
    case 80:
    case 81:
    case 82:
      return { condition: 'Showers', isBadWeather: true };
    case 95:
    case 96:
    case 99:
      return { condition: 'Thunderstorm', isBadWeather: true };
    default:
      return { condition: 'Cloudy', isBadWeather: false };
  }
};

export default function App() {
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [activeRoute, setActiveRoute] = useState('MALE_TO_THULUSDHOO');
  const [now, setNow] = useState(new Date());

  // Weather state
  const [weather, setWeather] = useState({
    temp: '--',
    condition: 'Loading...',
    isBadWeather: false
  });

  // Live Clock
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch Live Weather for Thulusdhoo from Open-Meteo
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=4.373&longitude=73.651&current=temperature_2m,weather_code,wind_speed_10m'
        );
        const data = await response.json();
        
        if (data && data.current) {
          const temp = Math.round(data.current.temperature_2m);
          const weatherCode = data.current.weather_code;
          const { condition, isBadWeather } = decodeWeatherCode(weatherCode);

          setWeather({
            temp: `${temp}°C`,
            condition: condition,
            isBadWeather: isBadWeather
          });
        }
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
        setWeather({ temp: '--', condition: 'Unavailable', isBadWeather: false });
      }
    };

    fetchWeather();
    // Refresh weather every 15 minutes
    const weatherTimer = setInterval(fetchWeather, 15 * 60 * 1000);
    return () => clearInterval(weatherTimer);
  }, []);

  const isFriday = now.getDay() === 5;

  const formattedClock = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const formattedDate = now.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  const fullDailySchedule = useMemo(() => {
    let trips = [];
    FERRY_OPERATORS.forEach((operator) => {
      const scheduleList = isFriday ? operator.fridaySchedule : operator.regularSchedule;
      scheduleList.forEach((trip) => {
        trips.push({
          ...trip,
          operatorName: operator.name,
          operatorId: operator.id
        });
      });
    });

    const filtered = trips.filter((t) => t.route === activeRoute);
    return filtered.sort((a, b) => a.time24.localeCompare(b.time24));
  }, [activeRoute, isFriday]);

  const nextFerryTracker = { found: false };
  const processedSchedule = fullDailySchedule.map((item) => {
    const { status, isNext, style } = getDepartureStatus(item.time24, nextFerryTracker, now);
    return { ...item, status, isNext, style };
  });

  const nextAvailableFerry = processedSchedule.find((item) => item.isNext);

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
    <div className="bg-[#f3f4f6] min-h-screen flex justify-center items-start p-0 sm:p-6 font-sans">
      <div className="w-full max-w-md bg-white sm:rounded-[36px] shadow-xl border border-slate-100 min-h-screen sm:min-h-[840px] p-5 sm:p-6 flex flex-col justify-between space-y-5 overflow-hidden">
        
        <div className="space-y-5">
          {/* Header */}
          <div className="flex items-center justify-between pt-2 px-1">
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">Hello</h1>
              <p className="text-xs font-semibold text-slate-400">{formattedDate} {isFriday && '• Friday'}</p>
            </div>
            <div className="text-right bg-slate-50 border border-slate-100 px-3.5 py-1.5 rounded-2xl shadow-sm">
              <span className="text-sm font-black text-slate-800 tracking-wider font-mono">{formattedClock}</span>
            </div>
          </div>

          {/* Next Ferry Card */}
          <div className="bg-[#0b1329] text-white p-6 rounded-3xl shadow-xl relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[160px] border border-slate-800">
            <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-[10px] font-extrabold tracking-widest uppercase mb-2">
              NEXT AVAILABLE FERRY
            </span>

            <h3 className="text-sky-300 font-bold text-sm tracking-wide">
              {nextAvailableFerry ? nextAvailableFerry.operatorName : "No More Ferries Today"}
            </h3>

            <div className="text-5xl font-black tracking-tight text-white my-1">
              {nextAvailableFerry ? nextAvailableFerry.time : "--:--"}
            </div>

            <div className="mt-2 inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold">
              {countdownString || "Service Completed for Today"}
            </div>
          </div>

          {/* Route Switcher */}
          <div className="bg-slate-100 p-1 rounded-2xl flex gap-1 border border-slate-200/60">
            <button
              onClick={() => setActiveRoute('MALE_TO_THULUSDHOO')}
              className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all ${
                activeRoute === 'MALE_TO_THULUSDHOO'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Malé → Thulusdhoo
            </button>
            <button
              onClick={() => setActiveRoute('THULUSDHOO_TO_MALE')}
              className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all ${
                activeRoute === 'THULUSDHOO_TO_MALE'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Thulusdhoo → Malé
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-3">
            {FERRY_OPERATORS.map((op) => {
              const isSelected = selectedOperator?.id === op.id;
              const hasUpcoming = processedSchedule.some(
                (s) => s.operatorId === op.id && s.status !== 'Departed'
              );

              return (
                <div
                  key={op.id}
                  onClick={() => setSelectedOperator(op)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between h-28 relative ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-[1.02]'
                      : 'bg-slate-50 hover:bg-slate-100/80 text-slate-800 border-slate-100 shadow-sm'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                      isSelected ? 'bg-slate-800 text-white' : 'bg-white text-slate-700 shadow-sm'
                    }`}>
                      🚢
                    </div>
                    <span className={`w-2.5 h-2.5 rounded-full ${hasUpcoming ? 'bg-sky-500' : 'bg-slate-300'}`}></span>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-sm leading-tight">{op.name}</h4>
                    <p className={`text-[11px] font-medium mt-0.5 ${isSelected ? 'text-slate-400' : 'text-slate-500'}`}>
                      From {op.fareOneWay}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Weather Card (Replaced Ticket Info) */}
            <div className="p-4 rounded-2xl border bg-slate-50 text-slate-800 border-slate-100 shadow-sm flex flex-col justify-between h-28">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                Weather
              </span>
              <div>
                <h4 className="font-extrabold text-sm leading-tight text-slate-800">
                  {weather.condition}
                </h4>
                <p className="text-xl font-black text-slate-900 mt-0.5 font-mono">
                  {weather.temp}
                </p>
              </div>
            </div>
          </div>

          {/* Conditional Schedule Warning Card */}
          {weather.isBadWeather && (
            <div className="bg-amber-50 border border-amber-200/80 p-4 rounded-2xl text-amber-900 text-xs shadow-sm space-y-1">
              <h5 className="font-extrabold text-amber-950 uppercase text-[10px] tracking-wider">
                Schedule Notice
              </h5>
              <p className="font-medium text-amber-900/90 leading-relaxed">
                Ferry schedules may change due to weather conditions. Please contact the ferry operators for the latest information.
              </p>
            </div>
          )}

          {/* Full Schedule List */}
          <div className="space-y-2.5 pt-1">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Full Schedule Today
              </span>
              <span className="text-[11px] font-bold text-sky-600">
                {processedSchedule.length} Trips
              </span>
            </div>

            <div className="space-y-2 max-h-60 overflow-y-auto pr-0.5">
              {processedSchedule.length > 0 ? (
                processedSchedule.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                      item.status === 'Departed'
                        ? 'bg-slate-50/60 border-slate-100 opacity-60'
                        : item.isNext
                        ? 'bg-sky-50/50 border-sky-300 shadow-sm'
                        : 'bg-slate-50 border-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base font-black text-slate-900 font-mono">
                        {item.time}
                      </span>
                      <div>
                        <p className="text-xs font-extrabold text-slate-800 leading-none">
                          {item.operatorName}
                        </p>
                        <p className="text-[10px] font-semibold text-slate-400 mt-1">
                          {item.departure} → {item.destination}
                        </p>
                      </div>
                    </div>

                    <span className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border ${item.style}`}>
                      {item.status}
                    </span>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-400">
                  No departures available for this route today.
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Modal */}
        <ScheduleModal
          operator={selectedOperator}
          isFriday={isFriday}
          onClose={() => setSelectedOperator(null)}
        />

      </div>
    </div>
  );
}
