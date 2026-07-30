export const FERRY_OPERATORS = [
  {
    id: "tharika",
    name: "Tharika Express",
    description: "Scheduled speedboat transfer between Malé & Thulusdhoo.",
    booking: ["7810052", "7810078"],
    fareOneWay: "MVR 175",
    fareRoundTrip: "MVR 300",
    regularSchedule: [
      { id: "t1", time: "09:15 AM", time24: "09:15", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "t2", time: "12:15 PM", time24: "12:15", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "t3", time: "04:00 PM", time24: "16:00", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "t4", time: "06:30 PM", time24: "18:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "t5", time: "10:15 PM", time24: "22:15", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "t6", time: "08:00 AM", time24: "08:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "t7", time: "10:15 AM", time24: "10:15", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "t8", time: "02:15 PM", time24: "14:15", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "t9", time: "05:00 PM", time24: "17:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "t10", time: "08:00 PM", time24: "20:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
    ],
    fridaySchedule: [
      { id: "tf1", time: "08:00 AM", time24: "08:00", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "tf2", time: "04:30 PM", time24: "16:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "tf3", time: "08:30 PM", time24: "20:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "tf4", time: "08:00 AM", time24: "08:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "tf5", time: "02:30 PM", time24: "14:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "tf6", time: "07:00 PM", time24: "19:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
    ]
  },
  {
    id: "refcool",
    name: "Refcool Marine",
    description: "Fast passenger speedboat express.",
    booking: ["7316362", "7312050"],
    website: "refcoolmarine.mv",
    fareOneWay: "MVR 200",
    fareRoundTrip: "MVR 400",
    regularSchedule: [
      { id: "r1", time: "09:15 AM", time24: "09:15", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "r2", time: "12:30 PM", time24: "12:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "r3", time: "03:30 PM", time24: "15:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "r4", time: "06:30 PM", time24: "18:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "r5", time: "10:00 PM", time24: "22:00", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "r6", time: "08:00 AM", time24: "08:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "r7", time: "11:00 AM", time24: "11:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "r8", time: "02:30 PM", time24: "14:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "r9", time: "05:30 PM", time24: "17:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "r10", time: "08:30 PM", time24: "20:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
    ],
    fridaySchedule: [
      { id: "rf1", time: "08:30 AM", time24: "08:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rf2", time: "04:00 PM", time24: "16:00", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rf3", time: "08:30 PM", time24: "20:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rf4", time: "08:00 AM", time24: "08:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "rf5", time: "02:30 PM", time24: "14:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "rf6", time: "07:00 PM", time24: "19:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
    ]
  },
  {
    id: "riverspeed",
    name: "River Speed",
    description: "Atoll speedboat express transfers.",
    booking: ["9893434", "9143434"],
    email: "riverspeed3434@gmail.com",
    fareOneWay: "MVR 200",
    fareRoundTrip: "MVR 400",
    regularSchedule: [
      { id: "rv1", time: "09:20 AM", time24: "09:20", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rv2", time: "12:20 PM", time24: "12:20", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rv3", time: "04:20 PM", time24: "16:20", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rv4", time: "08:20 PM", time24: "20:20", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rv5", time: "10:15 PM", time24: "22:15", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rv6", time: "08:00 AM", time24: "08:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "rv7", time: "10:30 AM", time24: "10:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "rv8", time: "02:30 PM", time24: "14:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "rv9", time: "06:30 PM", time24: "18:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
    ],
    fridaySchedule: [
      { id: "rvf1", time: "09:30 AM", time24: "09:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rvf2", time: "03:00 PM", time24: "15:00", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rvf3", time: "09:00 PM", time24: "21:00", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rvf4", time: "08:00 AM", time24: "08:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "rvf5", time: "02:00 PM", time24: "14:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
    ]
  },
];

export const getDepartureStatus = (time24, nextFerryTracker, now) => {
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const [hours, minutes] = time24.split(':').map(Number);
  const itemMinutes = hours * 60 + minutes;

  if (itemMinutes < currentMinutes) {
    return { 
      status: 'Departed', 
      isNext: false, 
      style: 'bg-slate-800/60 text-slate-500 border-slate-700/50' 
    };
  } else if (!nextFerryTracker.found) {
    nextFerryTracker.found = true;
    return { 
      status: 'Next Ferry', 
      isNext: true, 
      style: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50 font-bold' 
    };
  } else {
    return { 
      status: 'Upcoming', 
      isNext: false, 
      style: 'bg-blue-500/20 text-blue-400 border-blue-500/40' 
    };
  }
};
