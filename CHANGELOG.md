# FerryNow — Thulusdhoo V2 changelog

## V2 redesign
- Replaced the narrow, single-column interface with a responsive dashboard.
- Added a route-aware next departure spotlight and grouped operators sharing the same earliest departure time.
- Improved end-of-day handling so the next day's timetable is displayed when no departures remain today.
- Kept the four passenger operators, their listed fares and contact details, vessel/service links, and both cargo/supply vessel cards.
- Added operator detail panels with current-day/regular timetable, contact shortcuts and tracking links.
- Kept weather data from Open-Meteo and made weather failure explicit rather than substituting a made-up temperature.
- Removed the third-party FollowMe HTML scraping and false-positive live status logic. The static app links to the provider; reliable live-state detection requires an official feed/API or a supported backend.
- Updated the PWA manifest and service-worker cache version, and removed references to icon files that were not in the uploaded ZIP.
- Moved conflicting, non-deployed React files into `legacy-react-source/` for reference. The root `index.html` is the active GitHub Pages entry point.

## Before public release
Confirm all schedules, Friday departures, contacts and fares with the relevant operators. The app presents the schedule information contained in the uploaded repository; it is not an official operator feed.
