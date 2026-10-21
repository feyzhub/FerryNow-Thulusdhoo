# FerryNow — Thulusdhoo (V2 redesign)

A static, responsive ferry information page designed for GitHub Pages. The deployed app uses `index.html` directly; it does not require a build step, React, Tailwind, or Babel.

## Included
- Responsive redesign for mobile and desktop.
- Malé → Thulusdhoo and Thulusdhoo → Malé route switching.
- Next-departure spotlight; all operators departing at the same next time are shown together.
- Today's upcoming departures and tomorrow's schedule when today's departures have all passed.
- Operator cards with fares, contacts, schedule details, and vessel/service links.
- Cargo/supply details for Tharika 2 and Ali Rasthaa.
- Thulusdhoo weather from Open-Meteo, refreshed every 10 minutes.
- PWA manifest and a conservative service worker cache.

## Deploy to GitHub Pages
1. Download/unzip this project.
2. Review the schedules, fares, contacts, and operating days with the operators before publishing.
3. Commit the files to the repository's publishing branch/root (usually `main` and `/ (root)`).
4. In GitHub, open **Settings → Pages** and select the correct branch and root folder.
5. After deployment, hard-refresh the page or clear the old service-worker cache if the old version remains visible.

## Live vessel status note
FollowMe tracking links are provided, but this static GitHub Pages version does **not** scrape FollowMe or invent a vessel's active status. Reliable automatic green/live status requires a supported API/feed or a small server-side proxy that is allowed to access the provider's data. Until such a source is confirmed, tracker links open directly to the provider page.

## Schedule data caution
Schedules and operator contact details are shown as provided in the existing repository. They should be confirmed with each operator before being treated as official. MTCC Friday schedule is blank in the source data, so the page indicates no Friday departures are listed rather than inventing times.
