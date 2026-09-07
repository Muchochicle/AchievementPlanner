# Google Search Console setup runbook

Everything in the repo is already prepared for Search Console. The steps
below are **manual actions in the Google Search Console UI** and cannot be
done from the codebase — they need a Google account and a token/file that
Google generates for you.

Current public site: `https://muchochicle.github.io/AchievementPlanner/`
(a GitHub Pages **project** page — served from a sub-path, not a domain
root). A custom domain is planned but not yet decided — see
[`DOMAIN_SWITCH.md`](DOMAIN_SWITCH.md) and the "When the custom domain
lands" section at the bottom of this file.

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

## 6. When the custom domain lands

Search Console does **not** migrate automatically. Prefer deciding the
domain *before* the first submission to avoid this entirely. If the
github.io property is already verified when the domain switches:

1. Do the full find-and-replace in [`DOMAIN_SWITCH.md`](DOMAIN_SWITCH.md)
   (canonical / `og:url` / `og:image` / sitemap `<loc>` / `robots.txt` /
   `404.html` paths).
2. Add a **new** URL-prefix (or now-possible **Domain**) property for the
   new domain and re-verify (DNS `TXT` for a Domain property; the same
   HTML tag/file still works for a URL-prefix property).
3. Re-submit `sitemap.xml` under the new property.
4. Use **Settings → Change of address** in the old property to point it
   at the new one (URL-prefix → URL-prefix only). Keep the old property
   around until Search Console reports the move complete.
5. If Method A was used, move/keep the `google-site-verification` tag;
   if Method B, the `googleXXXX.html` file keeps working as long as it is
   still served at the new root.

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
- Verification insertion point — commented `<meta>` block in
  `index.html` `<head>`.
