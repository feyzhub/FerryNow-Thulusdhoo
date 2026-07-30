const ScheduleModal = ({ operator, isFriday, onClose }) => {
  if (!operator) return null;
  
  const [filterRoute, setFilterRoute] = React.useState('ALL');
  const rawSchedule = isFriday ? operator.fridaySchedule : operator.regularSchedule;

  const modalSchedule = React.useMemo(() => {
    if (filterRoute === 'ALL') return rawSchedule;
    return rawSchedule.filter((item) => item.route === filterRoute);
  }, [rawSchedule, filterRoute]);

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden text-slate-800 border border-slate-100 max-h-[85vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-100 bg-slate-50 flex items-start justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-sky-600 bg-sky-100 px-2.5 py-0.5 rounded-full">
              {operator.tag}
            </span>
            <h2 className="text-xl font-black text-slate-900 mt-1">{operator.name}</h2>
            <p className="text-xs text-slate-500 mt-0.5">{operator.description}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/60 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4">
          
          {/* Fare Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">One Way</span>
              <span className="font-extrabold text-emerald-600 text-base">{operator.fareOneWay}</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Roundtrip</span>
              <span className="font-extrabold text-sky-600 text-base">{operator.fareRoundTrip}</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold mb-0.5">Hotline Contacts</span>
              <div className="flex gap-2">
                {operator.booking.map((phone, i) => (
                  <a key={i} href={`tel:${phone}`} className="font-bold text-slate-800 bg-white px-2.5 py-1 rounded-lg border border-slate-200 hover:border-sky-500 transition-colors">
                    📞 {phone}
                  </a>
                ))}
              </div>
            </div>
            {operator.website && (
              <div className="pt-1">
                <span className="text-slate-400 font-medium">Website: </span>
                <a href={`https://${operator.website}`} target="_blank" rel="noreferrer" className="text-sky-600 font-bold underline">
                  {operator.website}
                </a>
              </div>
            )}
          </div>

          {/* Route Tabs */}
          <div className="flex gap-1 bg-slate-100 p-1 rounded-xl text-[11px] font-bold">
            <button
              onClick={() => setFilterRoute('ALL')}
              className={`flex-1 py-1.5 rounded-lg transition-all ${filterRoute === 'ALL' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              All Routes
            </button>
            <button
              onClick={() => setFilterRoute('MALE_TO_THULUSDHOO')}
              className={`flex-1 py-1.5 rounded-lg transition-all ${filterRoute === 'MALE_TO_THULUSDHOO' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Malé → Thulus
            </button>
            <button
              onClick={() => setFilterRoute('THULUSDHOO_TO_MALE')}
              className={`flex-1 py-1.5 rounded-lg transition-all ${filterRoute === 'THULUSDHOO_TO_MALE' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Thulus → Malé
            </button>
          </div>

          {/* Schedule List */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-400">
              <span>Timetable</span>
              {isFriday && <span className="text-amber-600 font-semibold">(Friday Schedule)</span>}
            </div>

            {modalSchedule && modalSchedule.length > 0 ? (
              modalSchedule.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-sm font-extrabold text-slate-800">{item.time}</span>
                  <span className="text-xs font-semibold text-slate-500">{item.departure} → {item.destination}</span>
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-400 py-4 text-center">No departures scheduled for this route.</p>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="w-full py-2.5 text-xs font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
