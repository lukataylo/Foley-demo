# Loop

A small Linear-style tracker. Used as the demo subject for [Foley](https://github.com/lukataylo/Foley).

## Run

```bash
pnpm install
pnpm dev   # http://localhost:3001
```

## Screens

- `/login` — email-only mock sign in
- `/` — Kanban board (Todo / Doing / Done)
- `/ticket/[id]` — ticket detail with comments
- `/settings` — workspace settings

No backend, no auth, no persistence. Mock data lives in `src/lib/data.ts`.
