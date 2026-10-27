import * as React from "react";

const MOBILE_BREAKPOINT = 768;

// 1. Create a subscribe function outside the hook
function subscribe(callback: () => void) {
  const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

// 2. Define how to read the snapshot value on the client
function getSnapshot() {
  return window.innerWidth < MOBILE_BREAKPOINT;
}

// 3. Define the fallback value for Server-Side Rendering (SSR)
function getServerSnapshot() {
  return false; // Default to desktop view during SSR hydration
}

export function useIsMobile() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
