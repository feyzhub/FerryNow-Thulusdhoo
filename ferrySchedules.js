// src/data/ferrySchedules.js

export const FERRY_OPERATORS = [
  {
    id: "refcool",
    name: "Refcool",
    description: "Daily scheduled passenger ferry service.",
    contact: "+960 777-1234",
    fare: "MVR 250",
    schedule: [
      { id: "r1", time: "06:30", timeFormatted: "06:30 AM", departure: "Male'", destination: "Thulusdhoo", duration: "45 mins" },
      { id: "r2", time: "08:30", timeFormatted: "08:30 AM", departure: "Thulusdhoo", destination: "Male'", duration: "45 mins" },
      { id: "r3", time: "11:30", timeFormatted: "11:30 AM", departure: "Male'", destination: "Thulusdhoo", duration: "45 mins" },
      { id: "r4", time: "14:30", timeFormatted: "02:30 PM", departure: "Thulusdhoo", destination: "Male'", duration: "45 mins" },
      { id: "r5", time: "16:30", timeFormatted: "04:30 PM", departure: "Male'", destination: "Thulusdhoo", duration: "45 mins" },
      { id: "r6", time: "19:30", timeFormatted: "07:30 PM", departure: "Thulusdhoo", destination: "Male'", duration: "45 mins" },
    ],
  },
  {
    id: "tharika",
    name: "Tharika Express",
    description: "Fast transfers and regular island routes.",
    contact: "+960 777-5678",
    fare: "MVR 250",
    schedule: [
      { id: "t1", time: "07:00", timeFormatted: "07:00 AM", departure: "Male'", destination: "Thulusdhoo", duration: "50 mins" },
      { id: "t2", time: "09:30", timeFormatted: "09:30 AM", departure: "Thulusdhoo", destination: "Male'", duration: "50 mins" },
      { id: "t3", time: "13:00", timeFormatted: "01:00 PM", departure: "Male'", destination: "Thulusdhoo", duration: "50 mins" },
      { id: "t4", time: "16:00", timeFormatted: "04:00 PM", departure: "Thulusdhoo", destination: "Male'", duration: "50 mins" },
      { id: "t5", time: "18:30", timeFormatted: "06:30 PM", departure: "Male'", destination: "Thulusdhoo", duration: "50 mins" },
    ],
  },
  {
    id: "riverspeed",
    name: "Riverspeed",
    description: "Speedboat express services across the atoll.",
    contact: "+960 777-9999",
    fare: "MVR 300",
    schedule: [
      { id: "rv1", time: "08:00", timeFormatted: "08:00 AM", departure: "Male'", destination: "Thulusdhoo", duration: "35 mins" },
      { id: "rv2", time: "10:00", timeFormatted: "10:00 AM", departure: "Thulusdhoo", destination: "Male'", duration: "35 mins" },
      { id: "rv3", time: "14:00", timeFormatted: "02:00 PM", departure: "Male'", destination: "Thulusdhoo", duration: "35 mins" },
      { id: "rv4", time: "17:00", timeFormatted: "05:00 PM", departure: "Male'", destination: "Thulusdhoo", duration: "35 mins" },
      { id: "rv5", time: "21:00", timeFormatted: "09:00 PM", departure: "Male'", destination: "Thulusdhoo", duration: "35 mins" },
    ],
  },
];