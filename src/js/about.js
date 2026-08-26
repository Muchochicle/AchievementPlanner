import { loadNavbar } from "./layout.js";

// About is entirely static markup (about.html) - this file's only job is
// the navbar/session render every page needs, matching guides.js's own
// reasoning for staying a plain sync function with no fetch/loading state.
loadNavbar();

document.title = "About | Achievement Planner";
