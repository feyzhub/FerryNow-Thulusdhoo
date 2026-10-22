# FerryNow-Thulusdhoo V2 — trip planner update

- Combined Full Timetable shows both directions together in chronological order.
- Users can select one Thulusdhoo → Malé ferry and one Malé → Thulusdhoo ferry directly from the schedule.
- Shows the time gap between selected departures and contact numbers for each selected operator.
- Day selector: Friday and Saturday–Thursday.
- Removed airport transfer departures.
- Renamed MTCC Route 301 to MTCC Ferry and removed its broken live link.
- Operator cards show only operator name and subheading.
- Times use 24-hour format.
- Schedules are transcribed from the official posters provided in this conversation; confirm before travel.


## Live vessel tracking setup

The Live Vessels panel checks the public FollowMe GPS API for Refcool Express 1/2, Tharika 1/5, and River Speed 1/5. It refreshes every 30 seconds and only treats recent GPS reports (under 2 minutes old) as live. The panel displays speed, nearest known area, coordinates/update time, and a rough ETA to the nearer terminal based on straight-line distance and current speed. ETA is not a navigational guarantee.

### Required backend setup

GitHub Pages is static hosting, and FollowMe may block direct browser requests through CORS. Deploy `tracker-proxy.js` as a Cloudflare Worker. Then edit `index.html` and set `TRACKER_PROXY_URL` to the Worker URL (for example, `https://your-worker.your-subdomain.workers.dev/`). Upload the updated `index.html`, `schedules.js`, `manifest.json`, `sw.js`, images, and `tracker-proxy.js` to the repository. The Worker only allows known public tracker IDs and does not expose the device IMEI.

If the Worker is not configured, the panel attempts direct access; if CORS blocks it, the UI reports that setup is required instead of inventing a live status. Moving threshold: at least 3 knots. Below 1 knot is stopped; 1–3 knots is slow. GPS data older than 2 minutes is stale. Nearby-place and ETA calculations are approximate and use straight-line distances.
