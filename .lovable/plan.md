# Update site title and search/social info

## Goal
Google search and social previews currently show the placeholder "Lovable App". Replace it with "Iva Davies Makeup" everywhere it appears.

## Changes (all in `index.html`, the single place this static site defines its head)

- `<title>` → "Iva Davies Makeup"
- `<meta name="description">` → short Czech description of the services (professionální líčení a kurzy líčení a péče o pleť v Praze)
- `<meta name="author">` → "Iva Davies"
- `<meta property="og:title">` and `<meta name="twitter:title">` → "Iva Davies Makeup"
- `<meta property="og:description">` and `<meta name="twitter:description">` → same description as above
- Keep the existing og:image / twitter:image untouched
- Leave canonical, robots, sitemap and all page content unchanged

## Notes

- The live URL serves the last published build, so this change reaches the real Google/social preview only on the next publish.
