// src/components/ScheduleModal.jsx
import React, { useState } from 'react';

// Helper to determine status based on current time
const getFerryStatus = (time24, nextFerryFound) => {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const [hours, minutes] = time24.split(':').map(Number);
  const ferryMinutes = hours * 60 + minutes;

  if (ferryMinutes < currentMinutes) {
    return { status: 'Departed', isNext: false };
  } else if (!nextFerryFound.flag) {
    nextFerryFound.flag = true;
    return { status: 'Next Ferry', isNext: true };
  } else {
    return { status: 'Upcoming', isNext: false };
  }
};

const getBadgeStyle = (status) => {
  switch (status) {
    case 'Next Ferry':
      return 'bg-emerald-100 text-emerald-800 border-emerald-300 font-semibold animate-pulse';
    case 'Upcoming':
      return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'Departed':
      return 'bg-gray-100 text-gray-400 border-gray-200';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export const ScheduleModal = ({ operator, onClose }) => {
  const [filter, setFilter] = useState('ALL'); // 'ALL', 'TO_THULUSDHOO', 'TO_MALE'

  if (!operator) return null;

  const nextFerryFound = { flag: false };

  const filteredSchedule = operator.schedule.filter((item) => {
    if (filter === 'TO_THULUSDHOO') return item.destination === 'Thulusdhoo';
    if (filter === 'TO_MALE') return item.destination === "Male'";
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-gray-100 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold">{operator.name}</h2>
              {operator.fare && (
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-blue-600 rounded-full">
                  {operator.fare}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-300 mt-1">{operator.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Route Filter Tabs */}
        <div className="flex border-b border-gray-200 bg-slate-50 p-2 gap-2 text-xs font-semibold">
          <button
            onClick={() => setFilter('ALL')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              filter === 'ALL' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            All Routes
          </button>
          <button
            onClick={() => setFilter('TO_THULUSDHOO')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              filter === 'TO_THULUSDHOO' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            To Thulusdhoo
          </button>
          <button
            onClick={() => setFilter('TO_MALE')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              filter === 'TO_MALE' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            To Male'
          </button>
        </div>

        {/* Timetable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3">
          <div className="space-y-3">
            {filteredSchedule.length > 0 ? (
              filteredSchedule.map((item) => {
                const { status } = getFerryStatus(item.time, nextFerryFound);

                return (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all gap-3"
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      <span className="text-lg font-bold text-gray-900 min-w-[85px]">
                        {item.timeFormatted}
                      </span>
                      
                      <div className="flex flex-col">
                        <div className="flex items-center text-sm font-semibold text-gray-800 gap-1.5">
                          <span>{item.departure}</span>
                          <span className="text-gray-400">→</span>
                          <span>{item.destination}</span>
                        </div>
                        {item.duration && (
                          <span className="text-xs text-gray-500 mt-0.5">
                            Duration: {item.duration}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="self-end sm:self-center">
                      <span className={`px-3 py-1 text-xs rounded-full border ${getBadgeStyle(status)}`}>
                        {status}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-sm text-gray-500 py-8">
                No trips scheduled for this route direction.
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Contact: <strong className="text-gray-700">{operator.contact}</strong>
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};