const FERRY_OPERATORS = [
  {
    id: "tharika",
    name: "Tharika Express",
    tag: "Speedboat",
    description: "Scheduled speedboat transfer between Malé & Thulusdhoo.",
    booking: ["7810052", "7810078"],
    fareOneWay: "MVR 175",
    fareRoundTrip: "MVR 300",
    regularSchedule: [
      { id: "t1", time: "09:15", time24: "09:15", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "t2", time: "12:15", time24: "12:15", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "t3", time: "16:00", time24: "16:00", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "t4", time: "18:30", time24: "18:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "t5", time: "22:15", time24: "22:15", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "t6", time: "08:00", time24: "08:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "t7", time: "10:15", time24: "10:15", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },export const FERRY_OPERATORS = [
  {
    id: "tharika",
    name: "Tharika Express",
    tag: "Speedboat",
    description: "Scheduled speedboat transfer between Malé & Thulusdhoo.",
    booking: ["7810052", "7810078"],
    fareOneWay: "MVR 175",
    fareRoundTrip: "MVR 300",
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
      { id: "tf1", time: "08:00", time24: "08:00", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "tf2", time: "16:30", time24: "16:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "tf3", time: "20:30", time24: "20:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "tf4", time: "08:00", time24: "08:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "tf5", time: "14:30", time24: "14:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "tf6", time: "19:00", time24: "19:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
    ]
  },
  {
    id: "refcool",
    name: "Refcool Marine",
    tag: "Express",
    description: "Fast passenger speedboat express.",
    booking: ["7316362", "7312050"],
    website: "refcoolmarine.mv",
    fareOneWay: "MVR 200",
    fareRoundTrip: "MVR 400",
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
      { id: "rf1", time: "08:30", time24: "08:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rf2", time: "16:00", time24: "16:00", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rf3", time: "20:30", time24: "20:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rf4", time: "08:00", time24: "08:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "rf5", time: "14:30", time24: "14:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "rf6", time: "19:00", time24: "19:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
    ]
  },
  {
    id: "riverspeed",
    name: "River Speed",
    tag: "Atoll Express",
    description: "Atoll speedboat express transfers.",
    booking: ["9893434", "9143434"],
    email: "riverspeed3434@gmail.com",
    fareOneWay: "MVR 200",
    fareRoundTrip: "MVR 400",
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
      { id: "rvf4", time: "08:00", time24: "08:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "rvf5", time: "14:00", time24: "14:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
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
      style: 'bg-slate-100 text-slate-400 border-slate-200' 
    };
  } else if (!nextFerryTracker.found) {
    nextFerryTracker.found = true;
    return { 
      status: 'Next Ferry', 
      isNext: true, 
      style: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30 font-bold' 
    };
  } else {
    return { 
      status: 'Upcoming', 
      isNext: false, 
      style: 'bg-sky-50 text-sky-600 border-sky-200' 
    };
  }
};
      { id: "t8", time: "14:15", time24: "14:15", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "t9", time: "17:00", time24: "17:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "t10", time: "20:00", time24: "20:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
    ],
    fridaySchedule: [
      { id: "tf1", time: "08:00", time24: "08:00", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "tf2", time: "16:30", time24: "16:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "tf3", time: "20:30", time24: "20:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "tf4", time: "08:00", time24: "08:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "tf5", time: "14:30", time24: "14:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "tf6", time: "19:00", time24: "19:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
    ]
  },
  {
    id: "refcool",
    name: "Refcool Marine",
    tag: "Express",
    description: "Fast passenger speedboat express.",
    booking: ["7316362", "7312050"],
    website: "refcoolmarine.mv",
    fareOneWay: "MVR 200",
    fareRoundTrip: "MVR 400",
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
      { id: "rf1", time: "08:30", time24: "08:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rf2", time: "16:00", time24: "16:00", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rf3", time: "20:30", time24: "20:30", route: "MALE_TO_THULUSDHOO", departure: "Malé", destination: "Thulusdhoo" },
      { id: "rf4", time: "08:00", time24: "08:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "rf5", time: "14:30", time24: "14:30", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "rf6", time: "19:00", time24: "19:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
    ]
  },
  {
    id: "riverspeed",
    name: "River Speed",
    tag: "Atoll Express",
    description: "Atoll speedboat express transfers.",
    booking: ["9893434", "9143434"],
    email: "riverspeed3434@gmail.com",
    fareOneWay: "MVR 200",
    fareRoundTrip: "MVR 400",
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
      { id: "rvf4", time: "08:00", time24: "08:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
      { id: "rvf5", time: "14:00", time24: "14:00", route: "THULUSDHOO_TO_MALE", departure: "Thulusdhoo", destination: "Malé" },
    ]
  },
];

const getDepartureStatus = (time24, nextFerryTracker, now) => {
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const [hours, minutes] = time24.split(':').map(Number);
  const itemMinutes = hours * 60 + minutes;

  if (itemMinutes < currentMinutes) {
    return { 
      status: 'Departed', 
      isNext: false, 
      style: 'bg-slate-100 text-slate-400 border-slate-200' 
    };
  } else if (!nextFerryTracker.found) {
    nextFerryTracker.found = true;
    return { 
      status: 'Next Ferry', 
      isNext: true, 
      style: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30 font-bold' 
    };
  } else {
    return { 
      status: 'Upcoming', 
      isNext: false, 
      style: 'bg-sky-50 text-sky-600 border-sky-200' 
    };
  }
};
