# Status

Last checked 2026-11-20 against `main` at `ad57797` (2 commits, 2026-11-16).

## Works (verified 2026-11-20)
- `npm ci` (361 packages) and `npm run build` on Node 22: succeeds, `/` and `/_not-found` prerender as static.
- `npm run lint` is clean (run 2026-11-20).

## Broken or odd
- `npm ci` warns that `eslint@9.39.5` is deprecated.
- Unused create-next-app SVGs (`next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`) remain in `public/`.
- `README.md` was the stock create-next-app text until this PR.

## Unknown
- What the page was meant to become, and whether it is deployed anywhere. No deployment config is in the repo.

## Waiting on Steven
- License: the repo is public with no LICENSE. Choose one or leave all rights reserved.
- Keep, fold into the ZenLens repo, or archive.
- Repo description and topics on GitHub.

## Not yet from the standard
- No tests, no CI, no `.editorconfig`, no `.nvmrc`, no formatter, no PR or issue templates, no CODEOWNERS, no Dependabot, no gitleaks.
- No ARCHITECTURE.md (one page), CHANGELOG, `events/` CloudEvents schemas or generated API docs. These wait for revival.
- Package `name` is still `nextjs-starter` at version 0.1.0 and `private: true`.
