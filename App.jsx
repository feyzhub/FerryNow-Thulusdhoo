import React, { useState } from "react";

const FERRY_OPERATORS = [
  {
    id: "tharika",
    name: "Tharika Express",
    shortName: "Tharika",
    vesselName: "Tharika 1",
    dotColor: "bg-emerald-500",
    tag: "Speedboat",
    description: "Scheduled speedboat transfer between Malé & Thulusdhoo.",
    booking: ["7810052", "7810078"],
    fareOneWay: "MVR 175",
    fareRoundTrip: "MVR 300",
    liveTrackingUrl: "https://m.followme.mv/public/?id=19122",
    regularSchedule: [
      { id: "t1", time: "09:15", time24: "09:15", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "t2", time: "12:15", time24: "12:15", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "t3", time: "16:00", time24: "16:00", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "t4", time: "18:30", time24: "18:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "t5", time: "22:15", time24: "22:15", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "t6", time: "08:00", time24: "08:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "t7", time: "10:15", time24: "10:15", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "t8", time: "14:15", time24: "14:15", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "t9", time: "17:00", time24: "17:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "t10", time: "20:00", time24: "20:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
    ],
    fridaySchedule: [
      { id: "tf1", time: "09:15", time24: "09:15", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "tf2", time: "16:00", time24: "16:00", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "tf3", time: "18:30", time24: "18:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "tf4", time: "22:15", time24: "22:15", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "tf5", time: "08:00", time24: "08:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "tf6", time: "14:30", time24: "14:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "tf7", time: "17:00", time24: "17:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "tf8", time: "20:00", time24: "20:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
    ]
  },
  {
    id: "refcool",
    name: "Refcool Marine",
    shortName: "Refcool",
    vesselName: "Refcool Express",
    dotColor: "bg-sky-500",
    tag: "Express",
    description: "Fast passenger speedboat express.",
    booking: ["7316362", "7312050"],
    website: "refcoolmarine.mv",
    fareOneWay: "MVR 175",
    fareRoundTrip: "MVR 300",
    liveTrackingUrl: "https://m.followme.mv/public/?id=REFCOOL_ID",
    regularSchedule: [
      { id: "r1", time: "09:15", time24: "09:15", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "r2", time: "12:30", time24: "12:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "r3", time: "15:30", time24: "15:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "r4", time: "18:30", time24: "18:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "r5", time: "22:00", time24: "22:00", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "r6", time: "08:00", time24: "08:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "r7", time: "11:00", time24: "11:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "r8", time: "14:30", time24: "14:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "r9", time: "17:30", time24: "17:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "r10", time: "20:30", time24: "20:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
    ],
    fridaySchedule: [
      { id: "rf1", time: "09:15", time24: "09:15", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rf2", time: "15:30", time24: "15:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rf3", time: "18:30", time24: "18:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rf4", time: "22:00", time24: "22:00", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rf5", time: "08:00", time24: "08:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "rf6", time: "14:30", time24: "14:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "rf7", time: "17:00", time24: "17:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "rf8", time: "20:00", time24: "20:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
    ]
  },
  {
    id: "riverspeed",
    name: "River Speed",
    shortName: "River Speed",
    vesselName: "River Speed 1",
    dotColor: "bg-rose-500",
    tag: "Atoll Express",
    description: "Atoll speedboat express transfers.",
    booking: ["9893434", "9143434"],
    email: "riverspeed3434@gmail.com",
    fareOneWay: "MVR 175",
    fareRoundTrip: "MVR 300",
    liveTrackingUrl: "https://m.followme.mv/public/?id=RIVERSPEED_ID",
    regularSchedule: [
      { id: "rv1", time: "09:20", time24: "09:20", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rv2", time: "12:20", time24: "12:20", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rv3", time: "16:20", time24: "16:20", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rv4", time: "20:20", time24: "20:20", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rv5", time: "22:15", time24: "22:15", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rv6", time: "08:00", time24: "08:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "rv7", time: "10:30", time24: "10:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "rv8", time: "14:30", time24: "14:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "rv9", time: "18:30", time24: "18:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
    ],
    fridaySchedule: [
      { id: "rvf1", time: "09:30", time24: "09:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rvf2", time: "15:00", time24: "15:00", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rvf3", time: "21:00", time24: "21:00", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rvf4", time: "08:00", time24: "08:00", route: "THULUSDHOO_TO_MALE", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rvf5", time: "14:00", time24: "14:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
    ]
  }
];

export default function FerryTracker() {
  const [selectedOperator, setSelectedOperator] = useState(FERRY_OPERATORS[0]);
  const [isFriday, setIsFriday] = useState(false);

  const activeSchedule = isFriday 
    ? selectedOperator.fridaySchedule 
    : selectedOperator.regularSchedule;

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6 font-sans">
      {/* Operator Live Tracking Toolbar */}
      <div className="bg-slate-50 rounded-2xl border border-slate-100 p-2 shadow-sm space-y-1.5">
        {FERRY_OPERATORS.map((op) => (
          <div 
            key={op.id} 
            className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
              selectedOperator.id === op.id 
                ? "bg-white border-slate-300 shadow-xs ring-1 ring-slate-200" 
                : "bg-white/60 border-slate-100 hover:border-slate-200"
            }`}
          >
            <button 
              onClick={() => setSelectedOperator(op)}
              className="flex items-center gap-2.5 text-left flex-1"
            >
              <span className={`w-2.5 h-2.5 rounded-full ${op.dotColor} shadow-xs`}></span>
              <div>
                <span className="text-xs font-black text-slate-800 block leading-none">{op.name}</span>
                <span className="text-[10px] text-slate-400 font-medium leading-none mt-1 block">
                  {op.vesselName ? <>Active: <strong className="text-slate-600">{op.vesselName}</strong></> : op.tag}
                </span>
              </div>
            </button>

            {op.liveTrackingUrl ? (
              <a 
                href={op.liveTrackingUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-[10px] font-bold transition-colors"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Live Location ↗
              </a>
            ) : (
              <button 
                onClick={() => setSelectedOperator(op)}
                className="text-[10px] font-bold text-slate-400 hover:text-slate-600 px-2 py-1"
              >
                Schedule
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Selected Operator Schedule Panel */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-base font-black text-slate-900">{selectedOperator.name}</h2>
            <p className="text-xs text-slate-500">{selectedOperator.description}</p>
          </div>
          <button
            onClick={() => setIsFriday(!isFriday)}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              isFriday ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {isFriday ? "Friday Schedule" : "Regular Schedule"}
          </button>
        </div>

        {/* Schedule List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {activeSchedule.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs">
              <span className="font-bold text-slate-700">{item.time}</span>
              <span className="text-slate-500">{item.departure} → {item.destination}</span>
            </div>
          ))}
        </div>

        {/* Fares & Contact */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
          <div>
            <span>One Way: <strong>{selectedOperator.fareOneWay}</strong></span>
            <span className="mx-2">•</span>
            <span>Return: <strong>{selectedOperator.fareRoundTrip}</strong></span>
          </div>
          <div className="flex gap-2 font-semibold">
            {selectedOperator.booking.map((num) => (
              <a key={num} href={`tel:${num}`} className="text-indigo-600 hover:underline">
                📞 {num}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
