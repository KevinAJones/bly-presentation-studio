// =============================================================================
// The Bly Team — Presentation Studio · AI proxy (Cloudflare Worker)
// =============================================================================
// Holds the team's Anthropic API key as a server-side secret and forwards
// Messages API calls from the Studio, so the key never lives in any browser
// and is never committed to the repo. Agents use the AI features with no key.
//
// ── Deploy (Cloudflare dashboard — no CLI needed) ───────────────────────────
//   1. dash.cloudflare.com → Workers & Pages → Create → Workers → Create Worker
//      → Deploy → "Edit code".
//   2. Delete the sample, paste THIS file, then "Deploy".
//   3. Worker → Settings → Variables and Secrets → Add → type "Secret":
//        Name:  ANTHROPIC_API_KEY
//        Value: sk-ant-...   (your team key)   → Deploy.
//   4. Copy the Worker URL (https://<name>.<account>.workers.dev) and set it as
//      AI_PROXY_URL at the top of PresentationStudio.dc.html (or send it over to
//      have it wired in). Once set, the Studio uses the proxy and hides the
//      per-agent key field automatically.
//
// Rotating the key later = update the ANTHROPIC_API_KEY secret. Nothing else.
// =============================================================================

const ALLOWED_ORIGINS = [
  'https://kevinajones.github.io', // GitHub Pages (production)
  'http://localhost:4457',         // local testing
  'http://localhost:8099'
];

const MODEL_ALLOWLIST = ['claude-opus-4-8'];

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.indexOf(origin) !== -1 ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'content-type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin'
  };
}

function json(obj, status, origin) {
  return new Response(JSON.stringify(obj), {
    status: status,
    headers: Object.assign({ 'content-type': 'application/json' }, corsHeaders(origin))
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }
    if (request.method !== 'POST') {
      return json({ error: { message: 'Method not allowed' } }, 405, origin);
    }
    if (!env.ANTHROPIC_API_KEY) {
      return json({ error: { message: 'Proxy is missing the ANTHROPIC_API_KEY secret.' } }, 500, origin);
    }

    let body;
    try { body = await request.json(); }
    catch (e) { return json({ error: { message: 'Invalid JSON body' } }, 400, origin); }

    // Forward only a known-good Messages API shape; cap output defensively.
    const model = (typeof body.model === 'string' && MODEL_ALLOWLIST.indexOf(body.model) !== -1)
      ? body.model : MODEL_ALLOWLIST[0];
    const payload = {
      model: model,
      max_tokens: Math.min(Number(body.max_tokens) || 1024, 8192),
      messages: Array.isArray(body.messages) ? body.messages : []
    };
    if (body.output_config) payload.output_config = body.output_config;
    if (body.system) payload.system = body.system;

    let upstream;
    try {
      upstream = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify(payload)
      });
    } catch (e) {
      return json({ error: { message: 'Upstream request failed: ' + (e && e.message || 'error') } }, 502, origin);
    }

    const text = await upstream.text();
    return new Response(text, {
      status: upstream.status,
      headers: Object.assign({ 'content-type': 'application/json' }, corsHeaders(origin))
    });
  }
};
