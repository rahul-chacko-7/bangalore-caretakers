import { createContext } from 'react';

// During build-time prerendering, entry-server.jsx provides an object here and
// <SEO> writes the page's head tags into it while rendering, so the static HTML
// carries the real title, description, canonical and schema for each route.
// In the browser no provider exists and <SEO> updates document.head instead.
export const HeadContext = createContext(null);
