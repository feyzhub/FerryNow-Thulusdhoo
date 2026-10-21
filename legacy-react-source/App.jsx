import React, { useState } from 'react';
import ScheduleModal from './ScheduleModal.js';

// Define your ferry/speedboat operators data here
const OPERATORS_DATA = [
  {
    id: 'mta',
    name: 'MTA Speedboat',
    tag: 'Speedboat',
    description: 'Daily scheduled transfers between Malé, Airport, and Thulusdhoo.',
    fareOneWay: '$25 / MVR 385',
    fareRoundTrip: '$50 / MVR 770',
    booking: ['+960 7771234', '+960 7775678'],
    website: 'mta.mv',
    vessels: [
      {
        name: 'MTA Express 1',
        isActive: true,
        trackingUrl: 'https://followme.mv'
      }
    ],
    regularSchedule: [
      { id: 's1', time: '09:30 AM', departure: 'Malé', destination: 'Thulusdhoo', route: 'MALE_TO_THULUSDHOO' },
      { id: 's2', time: '02:30 PM', departure: 'Thulusdhoo', destination: 'Malé', route: 'THULUSDHOO_TO_MALE' }
    ],
    fridaySchedule: [
      { id: 'f1', time: '09:00 AM', departure: 'Malé', destination: 'Thulusdhoo', route: 'MALE_TO_THULUSDHOO' },
      { id: 'f2', time: '03:00 PM', departure: 'Thulusdhoo', destination: 'Malé', route: 'THULUSDHOO_TO_MALE' }
    ]
  }
];

export default function Home({ operators = OPERATORS_DATA, isFriday = false }) {
  const [selectedOperator, setSelectedOperator] = useState(null);

  return (
    <main className="min-h-screen bg-slate-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-black text-slate-900">Ferry & Speedboat Schedules</h1>
          <p className="text-sm text-slate-500">Select an operator to view timetables, tracking, and hotline contacts.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {operators.map((operator) => (
            <div
              key={operator.id || operator.name}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-sky-600 bg-sky-100 px-2.5 py-0.5 rounded-full">
                  {operator.tag}
                </span>
                <h2 className="text-lg font-bold text-slate-900 mt-2">{operator.name}</h2>
                <p className="text-xs text-slate-500 mt-1">{operator.description}</p>
              </div>

              <button
                onClick={() => setSelectedOperator(operator)}
                className="mt-4 w-full py-2.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-sky-500 hover:text-white rounded-xl transition-colors"
              >
                View Schedule & Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedOperator && (
        <ScheduleModal
          operator={selectedOperator}
          isFriday={isFriday}
          onClose={() => setSelectedOperator(null)}
        />
      )}
    </main>
  );
}

// Render the application to DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);
