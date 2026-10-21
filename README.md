# FerryNow — Thulusdhoo (V2 schedule update)

## What changed
- Added a Full Timetable / Trip Planner, combining operators in chronological departure-time order.
- Added day and direction filters, minute gaps between departures, and operator-specific phone numbers/details.
- Removed airport transfer departures from the timetable.
- Renamed MTCC Route 301 to MTCC Ferry and removed its broken live tracking link.
- Simplified operator cards to show only operator name and subheading.
- Updated Tharika Express, Refcool Marine and River Speed schedules from the supplied official posters.
- All displayed departure times use 24-hour format.
- Kept existing cargo/supply information and other app features.

## Publish
Upload/replace the files in the repository root. Keep `index.html`, `schedules.js`, `manifest.json`, `sw.js`, `V1.png`, and `back_btm.png` together.
The legacy React source is retained for reference and is not used by the standalone GitHub Pages app.

## Notes
The timetables are transcribed from the three images supplied by the user. Confirm with operators before travel. MTCC Friday departures were not provided in the supplied posters, so the app does not list Friday MTCC service.
