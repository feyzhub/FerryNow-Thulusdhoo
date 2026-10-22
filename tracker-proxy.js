// Cloudflare Worker for FerryNow's public FollowMe tracker data.
// Deploy this as a Worker, then set TRACKER_PROXY_URL in index.html to the Worker URL.
const ALLOWED_IDS = new Set(['14166','14204','19122','19093','11334','8739','17852','18695']);
const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'public, max-age=15, stale-while-revalidate=30',
  'Content-Type': 'application/json; charset=utf-8'
};
export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'GET') return Response.json({ error: 'Method not allowed' }, { status: 405, headers: cors });
    const id = url.searchParams.get('id') || '';
    if (!ALLOWED_IDS.has(id)) return Response.json({ error: 'Unknown tracker ID' }, { status: 400, headers: cors });
    try {
      const upstream = await fetch(`https://m.followme.mv/public/api/device.php?id=${encodeURIComponent(id)}`, {
        headers: { 'Accept': 'application/json', 'User-Agent': 'FerryNow-Thulusdhoo/2.1' },
        cf: { cacheTtl: 15, cacheEverything: true }
      });
      if (!upstream.ok) return Response.json({ error: 'Tracker provider unavailable', status: upstream.status }, { status: 502, headers: cors });
      const data = await upstream.json();
      if (data?.status !== 'ok' || !data?.device) return Response.json({ error: 'Unexpected tracker response' }, { status: 502, headers: cors });
      // Do not expose device IMEI; return only fields FerryNow uses.
      const d = data.device;
      return Response.json({ status: 'ok', device: {
        id: d.id, name: d.name, latitude: d.latitude, longitude: d.longitude,
        speed: d.speed, heading: d.heading, updated_at: d.updated_at,
        fence: d.fence ? { name: d.fence.name, status: d.fence.status, datetime: d.fence.datetime } : null
      } }, { headers: cors });
    } catch (error) {
      return Response.json({ error: 'Unable to retrieve public GPS data' }, { status: 502, headers: cors });
    }
  }
};
