# Switching Achievement Planner to a custom domain

The frontend currently lives at a GitHub Pages **project** URL:

    https://muchochicle.github.io/AchievementPlanner/

Because that's a sub-path (not a domain root), a few things are compromised
and will only be fully correct once the site is on its own domain served
from `/`:

- `robots.txt` is ignored by crawlers on a project path (they only read
  `https://<domain>/robots.txt`).
- Every canonical / sitemap / Open Graph URL, plus `404.html`'s asset
  paths, has to hardcode the `/AchievementPlanner/` prefix.

## When the domain is decided

1. **GitHub Pages:** add a `CNAME` file at the repo root containing just
   the bare domain (e.g. `achievementplanner.app`), and set the domain +
   "Enforce HTTPS" in the repo's Pages settings. Point the DNS
   (`A`/`AAAA` to GitHub's Pages IPs, or `CNAME` to
   `muchochicle.github.io`).

2. **Backend (Railway):** update `CORS_ORIGIN` and `FRONTEND_URL` to the
   new origin (`FRONTEND_URL` no longer needs a sub-path). Update
   `STEAM_RETURN_URL` / `STEAM_REALM` only if the *backend* domain
   changes (it isn't changing here) — and re-register the backend domain
   on Steam's API key page if so.

3. **`src/env.js`** — `PRODUCTION_API_BASE_URL` is the *backend* origin,
   unchanged. Nothing to do unless the backend also moves.

4. **Find-and-replace `https://muchochicle.github.io/AchievementPlanner`**
   → `https://<new-domain>` (and drop the now-unnecessary `/AchievementPlanner`
   path segment) in:
   - `robots.txt` (the `Sitemap:` line and the `Disallow:` paths — which
     become `/profile.html`, `/profile`)
   - `sitemap.xml` (all `<loc>`)
   - `_config.yml` — nothing URL-specific, but you can now also switch the
     canonical URLs to root-relative if preferred
   - Every `*.html` at the repo root: `<link rel="canonical">`,
     `og:url`, `og:image`
   - `404.html`: the `/AchievementPlanner/...` absolute asset + link
     paths become `/...`

5. **Google Search Console:** add the new domain as a property, submit
   `https://<new-domain>/sitemap.xml`, and (if the github.io URL was
   already verified/submitted) use the Change of Address tool or just let
   the old property age out. Prefer deciding the domain **before** the
   first Search Console submission to avoid a migration.

## Quick grep to find every hardcoded reference

    grep -rn "muchochicle.github.io/AchievementPlanner" -- '*.html' robots.txt sitemap.xml
    grep -rn "/AchievementPlanner/" 404.html
