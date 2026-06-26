---
name: Supabase WebSocket SSR fix
description: Supabase Realtime throws on Node.js < 22 in Vite SSR unless WebSocket is polyfilled globally.
---

The rule: any TanStack Start / Vite SSR project using Supabase on Node.js < 22 must polyfill `globalThis.WebSocket` before any Supabase `createClient` call runs.

**Why:** Supabase Realtime (`@supabase/realtime-js`) checks `typeof globalThis.WebSocket` at `createClient` time. Node.js 20 has no native WebSocket, so it throws `"Node.js 20 detected without native WebSocket support."`. This crashes SSR even if the client is never actually used for Realtime.

**How to apply:** Create `src/lib/ws-polyfill.ts`:
```ts
import ws from "ws";
if (typeof globalThis.WebSocket === "undefined") {
  globalThis.WebSocket = ws as unknown as typeof WebSocket;
}
```
Import it as the first line of `server.ts` (before any other import). Also add `ws` to Vite SSR externals in `vite.config.ts`:
```ts
vite: { ssr: { external: ["ws"] } }
```
