# Phase 4 Cleanup Plan

## Goal

Make the React frontend and Express backend the only active application paths in the repository root.

Keep the old static portfolio as an archive instead of deleting it.

## Cleanup Rules

Do not destroy or rewrite the old static files.

Move the legacy static site into a dedicated archive folder so its current contents remain preserved.

Do not invent a new deployment configuration without an explicit hosting decision.

## Files To Archive

The legacy static site archive should contain:

- `index.html`
- `style.css`
- `script.js`
- `vercel.json`
- `favicon.png`
- `RecipeWala.png`
- `PG-Search.png`
- `Collab.png`
- `url-short.png`
- `qrcode.png`
- `my-img-1.jpg`
- `underline.webp`
- `Om Prajapati Resume.pdf`

## Expected Outcome

The repository root should primarily contain the new workspace files:

- `frontend/`
- `backend/`
- `package.json`
- `package-lock.json`
- `.env`
- `.env.example`
- documentation files

The archive folder should make it obvious that the old static site is preserved but not active.

## Result

The legacy static portfolio was moved into `legacy-static/`.

The repository root now exposes the React workspace and backend as the primary application paths.

The old `vercel.json` was archived with the static site because it only described the legacy static deployment path and would be misleading as an active root config.

The active repository root now contains `render.yaml` as the deployment blueprint candidate for the new stack.
