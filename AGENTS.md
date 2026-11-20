<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Repo rules

Public Next.js stub for a ZenLens page. Read [README.md](README.md) and [docs/STATUS.md](docs/STATUS.md). Profile: `ts` (Next.js; lint is `eslint` with `eslint-config-next`).

## Stack and commands
Next.js 16 (App Router, `src/app`), React 19, Tailwind 4, TypeScript strict, ESLint 9, npm with a lockfile.
```sh
npm ci
npm run dev
npm run build
npm run lint
```
There is no test script yet.

## Rules
- The repo is **public**. Never commit secrets, `.env` files, keys, analytics ids, or anything private about ZenLens plans.
- Read `node_modules/next/dist/docs/` before writing Next code (see the block above).
- Do not add a LICENSE; the license choice is Steven's.
- Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`). Update docs/STATUS.md when status changes.
