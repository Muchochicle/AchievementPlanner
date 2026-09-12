# Google Search Console setup runbook

Current public site: `https://muchochicle.github.io/AchievementPlanner/`
(a GitHub Pages **project** page — served from a sub-path, not a domain
root). A custom domain is planned but not yet decided — see
[`DOMAIN_SWITCH.md`](DOMAIN_SWITCH.md) and the "When the custom domain
lands" section at the bottom of this file.

---

## STATUS — updated 2026-09-12

- **Property:** URL-prefix `https://muchochicle.github.io/AchievementPlanner/`
  (Google account jordicasalsruiz@gmail.com). Still the only property in
  the account — confirmed via the property picker. VERIFIED via the
  HTML-tag method; token still live in `index.html`'s `<head>` (commit
  6222cf7). **Do not remove that `<meta>` tag.**
- **Homepage:** confirmed **indexed** ("La URL está en Google" / page
  indexed) via URL Inspection — this is real indexing, not just a
  submission.
- **Sitemap — bug found and fixed 2026-09-12:** the 2026-09-07 session
  had mistakenly submitted 7 individual page URLs (`/`, `/profile.html`,
  `/about.html`, `/roadmap.html`, `/guides.html`, `/podiums.html`,
  `/games.html`) as separate "sitemaps" in addition to the real
  `/sitemap.xml` — none of those are valid sitemap files, so all 8 entries
  sat at "Couldn't fetch" for 5 days with the last-read timestamp frozen
  on the original submission day (Google never retried). Root cause was
  confirmed to be this submission mistake, not a problem with the sitemap
  file itself: `curl` confirmed the real `sitemap.xml` was HTTP 200,
  `Content-Type: application/xml`, valid XML, matching the repo, the whole
  time. **Fix applied:** removed all 7 bogus entries and did one
  delete+resubmit of the real `sitemap.xml` to force a fresh fetch
  attempt (submitted 2026-09-12). This is a Search Console UI change only
  — no repo files were touched, since the sitemap content itself was
  always correct.
- **Hub pages not yet indexed:** `games.html`, `guides.html`,
  `podiums.html`, `roadmap.html`, `about.html` all came back "URL not in
  Google / Google doesn't recognize this URL" on inspection — expected,
  since the stuck sitemap meant Google never discovered them and no other
  page currently links to them. **Requested indexing individually for all
  5** via URL Inspection → Request indexing (added to Google's priority
  crawl queue). Should also be picked up once the resubmitted sitemap is
  actually crawled.
- **noindex routes confirmed:** URL Inspection on `profile.html` and
  `game.html` (no slug) both report "URL not in Google — Google doesn't
  recognize this URL", consistent with `noindex, follow` + (for profile)
  `Disallow`. `guide.html` carries the identical `noindex, follow` meta,
  confirmed live via `curl`. **Did not** request indexing for any of
  these, per the standing noindex decision.

Real indexing of the 5 requested hub pages is still pending Google's
crawl — request/resubmission ≠ indexed. Recheck in a few days.

The rest of this file is the original runbook, kept for the record and for
the eventual custom-domain migration.

---

## 1. Which property type to create

Create a **URL-prefix property** for the exact string:

    https://muchochicle.github.io/AchievementPlanner/

A **Domain property** is *not possible* for this site: it verifies via a
DNS `TXT` record on the domain root (`muchochicle.github.io`), which is
GitHub's domain, not ours. Only the URL-prefix property works while the
site lives on the github.io sub-path.

---

## 2. Verify ownership — pick ONE method

### Method A — HTML tag (recommended; smallest change)

1. In Search Console, add the URL-prefix property above and choose the
   **"HTML tag"** verification option.
2. Copy the token from the tag Google shows you
   (`<meta name="google-site-verification" content="TOKEN">`).
3. In `index.html`, find the commented block just under
   `<link rel="canonical">`, paste the token into `content="..."`, and
   **uncomment the `<meta>` line**. Leave the surrounding explanatory
   comment if you like, or delete it.
4. Commit and push to `main`. Wait for the "pages build and deployment"
   Action to go green (usually 1–2 min), then confirm the tag is live:

       curl -s https://muchochicle.github.io/AchievementPlanner/ | grep google-site-verification

5. Click **Verify** in Search Console.
6. The tag can stay in place permanently. Removing it later un-verifies
   the property.

### Method B — HTML file

1. Choose the **"HTML file"** verification option; download the
   `googleXXXXXXXXXXXX.html` file Google provides.
2. Drop that file **at the repo root** (same folder as `index.html` /
   `robots.txt`). Jekyll publishes root-level `.html` files verbatim, so
   it will be served at
   `https://muchochicle.github.io/AchievementPlanner/googleXXXXXXXXXXXX.html`.
   No `_config.yml` change is needed.
3. Commit, push, wait for the Pages deploy, confirm:

       curl -s -o /dev/null -w "%{http_code}\n" https://muchochicle.github.io/AchievementPlanner/googleXXXXXXXXXXXX.html

4. Click **Verify**. Keep the file in the repo permanently.

> Do **not** use both methods at once — one is enough. Method A is
> preferred because it is a one-line diff and there is no stray file to
> forget about during the custom-domain migration.

---

## 3. Submit the sitemap

After verification, in **Search Console → Sitemaps**, submit:

    sitemap.xml

(Search Console resolves it against the property root, i.e.
`https://muchochicle.github.io/AchievementPlanner/sitemap.xml`.)

The sitemap currently lists the 6 public hub pages only:

| URL | notes |
|---|---|
| `/` (home) | |
| `/games.html` | |
| `/guides.html` | |
| `/podiums.html` | |
| `/roadmap.html` | |
| `/about.html` | |

Deliberately **excluded** and expected to stay out of the index:

- `profile.html` — login-only; `noindex, follow` + `Disallow` in
  `robots.txt`.
- `game.html?slug=...` and `guide.html?slug=...` — JavaScript-rendered,
  no server-side content or per-page metadata; whole route is
  `noindex, follow`. Revisit only if these are ever pre-rendered.

---

## 4. About `robots.txt` on a project page (known limitation)

Crawlers only read `robots.txt` from a **domain root**
(`https://muchochicle.github.io/robots.txt` — which is 404 and outside
this repo's control). The `robots.txt` we ship at
`.../AchievementPlanner/robots.txt` is therefore **advisory only**.

This is not a blocker: indexing is actually controlled by the per-page
`<meta name="robots">` tags (which crawlers always honour) and by
submitting the sitemap URL directly. The `Disallow` lines for
`profile.html` become enforceable only once the site is on its own domain.

---

## 5. What to expect / what NOT to claim

- Verification is instant once the tag/file is live.
- Sitemap "Success" status appears within minutes to a day.
- Actual **indexing takes days to weeks** and is never guaranteed.
  Do **not** report "Google indexing complete" until the
  **Pages → Indexing** report in Search Console actually shows the URLs
  as *Indexed*. Use **URL Inspection → Request indexing** on the home
  page to nudge the first crawl.
- `noindex` pages will show in Search Console as "Excluded by 'noindex'
  tag" — that is the intended state, not an error.

---

## 6. When the custom domain lands — migration safety

The github.io property is now verified, so a move is a real migration, not
a fresh start. It is still **cheap right now** because nothing is indexed
yet — the cost grows with every page Google indexes under the github.io
property. **If a custom domain is coming, do it before the sitemap gets
crawled and hub pages accumulate in the index.**

Nothing in the current Search Console setup blocks or complicates the
move — the choices made are the migration-friendly ones:

- **Verification travels for free.** The `google-site-verification` meta
  tag is in `index.html`, which is the same file served at whatever root
  the site lives at. When you add the new domain as a property, Google
  checks that same tag on the new homepage and the new property verifies
  with **no extra step** (as long as the tag is never moved out of
  `index.html`). The HTML-file method would not have travelled as cleanly.
- **GitHub Pages 301-redirects** every `muchochicle.github.io/AchievementPlanner/*`
  URL to the custom domain once the `CNAME` is set. That site-wide 301 is
  exactly what Search Console's **Change of Address** tool needs to work.

Migration steps:

1. Do the full find-and-replace in [`DOMAIN_SWITCH.md`](DOMAIN_SWITCH.md)
   (canonical / `og:url` / `og:image` / sitemap `<loc>` / `robots.txt` /
   `404.html` paths). Keep the `google-site-verification` tag in
   `index.html` untouched.
2. Add the new domain as a property. A **URL-prefix** property mirrors
   today's setup and auto-verifies off the existing tag. A **Domain**
   property is also possible now (you control the new domain's DNS) and is
   worth doing too — it needs one DNS `TXT` record and then covers http +
   https + every subdomain.
3. Re-submit `sitemap.xml` under the new property.
4. In the **old** github.io property: **Settings → Change of address** →
   point it at the new URL-prefix property. Keep the old property until
   Search Console reports the move complete (can take weeks).
5. Leave the github.io property in place afterwards for monitoring the
   redirect; don't delete it.

---

## Repo-side status (already done — no action needed)

- `sitemap.xml` — valid XML, HTTP 200, 6 hub URLs, absolute `<loc>`s.
- `robots.txt` — HTTP 200 at the project path, `Allow: /`, sitemap
  reference, advisory `Disallow` for the profile page.
- Canonical tags — self-referential absolute URLs on every hub page and
  on `profile.html`.
- `noindex, follow` — `profile.html`, `game.html`, `guide.html`.
- `404.html` — real 404 status from GitHub Pages, `noindex`.
- `_config.yml` — excludes `backend/`, `test/`, `scripts/`, `docs/`,
  `dev-notes/`, tooling; force-includes `robots.txt` + `sitemap.xml`.
- `google-site-verification` `<meta>` — live in `index.html` `<head>`
  (commit 6222cf7). Keep it there.
