window.OPERATORS_DATA = [
  {
    id: 'tharika-express',
    name: 'Tharika Express',
    tag: 'Speedboat',
    description: 'Scheduled speedboat transfers between Malé / Airport and Thulusdhoo.',
    fareOneWay: 'MVR 175',
    fareRoundTrip: 'MVR 300',
    booking: ['+960 7771234', '+960 7775678'],
    website: 'tharika.mv',
    vessels: [
      {
        name: 'Tharika Express 1',
        isActive: true,
        trackingUrl: 'https://followme.mv'
      }
    ],
    regularSchedule: [
      { id: 'te1', time: '08:30 AM', departure: 'Thulusdhoo', destination: 'Malé', route: 'THULUSDHOO_TO_MALE' },
      { id: 'te2', time: '11:30 AM', departure: 'Malé', destination: 'Thulusdhoo', route: 'MALE_TO_THULUSDHOO' },
      { id: 'te3', time: '02:30 PM', departure: 'Thulusdhoo', destination: 'Malé', route: 'THULUSDHOO_TO_MALE' },
      { id: 'te4', time: '04:30 PM', departure: 'Malé', destination: 'Thulusdhoo', route: 'MALE_TO_THULUSDHOO' }
    ],
    fridaySchedule: [
      { id: 'tef1', time: '08:30 AM', departure: 'Thulusdhoo', destination: 'Malé', route: 'THULUSDHOO_TO_MALE' },
      { id: 'tef2', time: '03:00 PM', departure: 'Malé', destination: 'Thulusdhoo', route: 'MALE_TO_THULUSDHOO' }
    ]
  },
  {
    id: 'refcool-marine',
    name: 'Refcool Marine',
    tag: 'Speedboat',
    description: 'Daily passenger speedboat service connecting Malé and Thulusdhoo.',
    fareOneWay: 'MVR 200',
    fareRoundTrip: 'MVR 400',
    booking: ['+960 7901234'],
    website: 'refcool.mv',
    vessels: [
      {
        name: 'Refcool Express',
        isActive: true,
        trackingUrl: 'https://followme.mv'
      }
    ],
    regularSchedule: [
      { id: 'rc1', time: '09:00 AM', departure: 'Malé', destination: 'Thulusdhoo', route: 'MALE_TO_THULUSDHOO' },
      { id: 'rc2', time: '03:30 PM', departure: 'Thulusdhoo', destination: 'Malé', route: 'THULUSDHOO_TO_MALE' }
    ],
    fridaySchedule: [
      { id: 'rcf1', time: '09:00 AM', departure: 'Malé', destination: 'Thulusdhoo', route: 'MALE_TO_THULUSDHOO' },
      { id: 'rcf2', time: '04:00 PM', departure: 'Thulusdhoo', destination: 'Malé', route: 'THULUSDHOO_TO_MALE' }
    ]
  },
  {
    id: 'river-speed',
    name: 'River Speed',
    tag: 'Speedboat',
    description: 'Fast passenger transfer service between Malé and Thulusdhoo.',
    fareOneWay: 'MVR 200',
    fareRoundTrip: 'MVR 400',
    booking: ['+960 7881234'],
    website: '',
    vessels: [
      {
        name: 'River Speed 1',
        isActive: true,
        trackingUrl: 'https://followme.mv'
      }
    ],
    regularSchedule: [
      { id: 'rs1', time: '10:00 AM', departure: 'Malé', destination: 'Thulusdhoo', route: 'MALE_TO_THULUSDHOO' },
      { id: 'rs2', time: '04:30 PM', departure: 'Thulusdhoo', destination: 'Malé', route: 'THULUSDHOO_TO_MALE' }
    ],
    fridaySchedule: [
      { id: 'rsf1', time: '09:30 AM', departure: 'Malé', destination: 'Thulusdhoo', route: 'MALE_TO_THULUSDHOO' },
      { id: 'rsf2', time: '05:00 PM', departure: 'Thulusdhoo', destination: 'Malé', route: 'THULUSDHOO_TO_MALE' }
    ]
  },
  {
    id: 'tharika-2',
    name: 'Tharika 2 (Cargo / Supply)',
    tag: 'Supply Vessel',
    description: 'Local island supply ferry carrying cargo and heavy goods between Malé & Thulusdhoo.',
    fareOneWay: 'Contact Operator',
    fareRoundTrip: 'Contact Operator',
    booking: ['+960 7779999'],
    website: '',
    vessels: [
      {
        name: 'Tharika 2',
        isActive: true,
        trackingUrl: 'https://followme.mv'
      }
    ],
    regularSchedule: [
      { id: 't2-1', time: '05:30 PM', departure: 'Malé', destination: 'Thulusdhoo', route: 'MALE_TO_THULUSDHOO' }
    ],
    fridaySchedule: []
  },
  {
    id: 'ali-rasthaa',
    name: 'Ali Rasthaa (Cargo / Supply)',
    tag: 'Supply Vessel',
    description: 'Island cargo and logistics supply ferry.',
    fareOneWay: 'Contact Operator',
    fareRoundTrip: 'Contact Operator',
    booking: ['+960 7788888'],
    website: '',
    vessels: [
      {
        name: 'Ali Rasthaa',
        isActive: true,
        trackingUrl: 'https://followme.mv'
      }
    ],
    regularSchedule: [
      { id: 'ar1', time: '06:00 PM', departure: 'Malé', destination: 'Thulusdhoo', route: 'MALE_TO_THULUSDHOO' }
    ],
    fridaySchedule: []
  }
];
