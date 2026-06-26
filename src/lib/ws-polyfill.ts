// Polyfill globalThis.WebSocket for Node.js < 22 so that Supabase Realtime
// works in SSR without requiring the `ws` transport option everywhere.
// This file must be imported at the very top of server.ts (before any Supabase code).
import ws from "ws";

if (typeof globalThis.WebSocket === "undefined") {
  // @ts-expect-error -- polyfilling global for Node.js < 22
  globalThis.WebSocket = ws;
}
